import React, { useState } from "react";
import AddFormData from "./AddFormData";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import ReadOnlyAddData from "./ReadOnlyAddData";

function TblStructure({ sectionHead, name, link }) {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([
    {
      id: 1,
      certificateName: "Cisco Networking Academy",
      certificateLink:
        "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=2%3A5",
    },
  ]);
  const [addFormData, setAddFormData] = useState({
    certificateName: "",
    certificateLink: "",
  });
  const [editFormData, setEditFormData] = useState({
    certificateName: "",
    certificateLink: "",
  });

  const [editListId, setEditListId] = useState(null);
  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: 1001,
      certificateName: addFormData.certificateName,
      certificateLink: addFormData.certificateLink,
    };

    const newList = [...list, newItem];
    setList(newList);
    setVisible(!visible);
    let certificateNameVal = document.querySelector("[name='certificateName']");
    let certificateLinkVal = document.querySelector("[name='certificateLink']");

    certificateNameVal.value = "";
    certificateLinkVal.value = "";
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedList = {
      id: editListId,
      certificateName: editFormData.certificateName,
      certificateLink: editFormData.certificateLink,
    };

    const newList = [...list];

    const index = list.findIndex((ls) => ls.id === editListId);

    newList[index] = editedList;

    setList(newList);
    setEditListId(null);
  };

  const handleEditClick = (e, ls) => {
    e.preventDefault();
    setEditListId(ls.id);

    const formValues = {
      certificateName: ls.certificateName,
      certificateLink: ls.certificateLink,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditListId(null);
  };

  const handleDeleteClick = (lsId) => {
    const newList = [...list];

    const index = list.findIndex((ls) => ls.id === lsId);

    newList.splice(index, 1);

    setList(newList);
  };
  return (
    <div className="tblWrapper">
      <h4>{sectionHead}</h4>
      <form onSubmit={handleEditFormSubmit}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr className="table__row">
              <th className="table__head" style={{ flexBasis: "230px" }}>
                {name}
              </th>
              <th className="table__head" style={{ flexBasis: "230px" }}>
                {link}
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((ls) => (
              <>
                {editListId === ls.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    ls={ls}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>
      {visible ? (
        <AddFormData
          handleAddFormSubmit={handleAddFormSubmit}
          handleAddFormChange={handleAddFormChange}
          setVisible={setVisible}
          visible={visible}
        />
      ) : (
        <ReadOnlyAddData setVisible={setVisible} visible={visible} />
      )}
    </div>
  );
}

export default TblStructure;
