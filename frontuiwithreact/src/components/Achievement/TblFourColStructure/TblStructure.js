import React, { useState } from "react";
import AddFormData from "./AddFormData";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import ReadOnlyAddData from "./ReadOnlyAddData";

function TblStructure({ sectionHead, degree, uni, category, specialty }) {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([
    {
      id: 1,
      scienceDegree: "Dosent",
      university: "Azərbaycan Dövlət Neft və Sənaye Universiteti",
      privatization: "İnformasiya Texnologiyaları",
      diploma: "Fərqlənmə",
    },
  ]);
  const [addFormData, setAddFormData] = useState({
    scienceDegree: "",
    university: "",
    privatization: "",
    diploma: "",
  });
  const [editFormData, setEditFormData] = useState({
    scienceDegree: "",
    university: "",
    privatization: "",
    diploma: "",
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
      scienceDegree: addFormData.scienceDegree,
      university: addFormData.university,
      privatization: addFormData.privatization,
      diploma: addFormData.diploma,
    };

    const newList = [...list, newItem];
    setList(newList);
    setVisible(!visible);
    let scienceDegreeVal = document.querySelector("[name='scienceDegree']");
    let universityVal = document.querySelector("[name='university']");
    let privatizationVal = document.querySelector("[name='privatization']");
    let diplomaVal = document.querySelector("[name='diploma']");
    scienceDegreeVal.value = "";
    universityVal.value = "";
    privatizationVal.value = "";
    diplomaVal.value = "";
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedList = {
      id: editListId,
      scienceDegree: editFormData.scienceDegree,
      university: editFormData.university,
      privatization: editFormData.privatization,
      diploma: editFormData.diploma,
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
      scienceDegree: ls.scienceDegree,
      university: ls.university,
      privatization: ls.privatization,
      diploma: ls.diploma,
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
                {degree}
              </th>
              <th className="table__head" style={{ flexBasis: "230px" }}>
                {uni}
              </th>
              <th className="table__head" style={{ flexBasis: "230px" }}>
                {specialty}
              </th>
              <th className="table__head" style={{ flexBasis: "230px" }}>
                {category}
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
