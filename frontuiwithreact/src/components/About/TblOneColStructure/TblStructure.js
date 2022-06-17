import React, { useState } from "react";
import AddFormData from "./AddFormData";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import ReadOnlyAddData from "./ReadOnlyAddData";
import classnames from "classnames";
function TblStructure({ sectionHead, name, pName }) {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([
    {
      id: 1,
      position:
        "Azərbaycan Dövlət Neft və Sənaye Universiteti - Avtomatika və telemexanika, elektrik mühəndisi",
    },
    {
      id: 2,
      position:
        "Texniki Elmlər Namizədi - İnformasiya işlənməsi və idarəetmə sistemləri",
    },
    {
      id: 3,
      position: "Dosent” elmi adı",
    },
  ]);
  const [addFormData, setAddFormData] = useState({
    position: "",
  });
  const [editFormData, setEditFormData] = useState({
    position: "",
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
      position: addFormData.position,
    };

    const newList = [...list, newItem];
    setList(newList);
    setVisible(!visible);
    let positionVal = document.querySelector("[name='position']");

    positionVal.value = "";
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedList = {
      id: editListId,
      position: editFormData.position,
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
      position: ls.position,
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
      <h4
        className={classnames({
          about__section__head: true,
          firstTitle: sectionHead == "Tehsil",
        })}
      >
        {sectionHead}
      </h4>
      <form onSubmit={handleEditFormSubmit}>
        <table style={{ width: "100%" }}>
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
