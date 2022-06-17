import React, { useState } from "react";
import AddFormData from "./AddFormData";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import ReadOnlyAddData from "./ReadOnlyAddData";

function TblStructure() {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState([
    {
      id: 1,
      scienceName:
        "Turist statusunun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementləri",
      category: "Scopus",
      publicationCountry: "Azerbaycan",
      publicationDate: "23.05.2005",
      link: "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415",
    },
    {
      id: 2,
      scienceName:
        "Turist statusunun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementləri",
      category: "Scopus",
      publicationCountry: "Azerbaycan",
      publicationDate: "23.05.2005",
      link: "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415",
    },
    {
      id: 3,
      scienceName:
        "Turist statusunun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementləri",
      category: "Scopus",
      publicationCountry: "Azerbaycan",
      publicationDate: "23.05.2005",
      link: "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415",
    },
    {
      id: 4,
      scienceName:
        "Turist statusunun beynəlxalq və daxili qanunvericilikdə təsbit olunmuş əsas hüquqi elementləri",
      category: "Scopus",
      publicationCountry: "Azerbaycan",
      publicationDate: "23.05.2005",
      link: "https://www.figma.com/file/hy5ej9m9IjBmcHqWEtgdI1/ASO%C4%B0U-TEACHER?node-id=55%3A415",
    },
  ]);
  const [addFormData, setAddFormData] = useState({
    scienceName: "",
    category: "",
    publicationCountry: "",
    publicationDate: "",
    link: "",
  });
  const [editFormData, setEditFormData] = useState({
    scienceName: "",
    category: "",
    publicationCountry: "",
    publicationDate: "",
    link: "",
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
      scienceName: addFormData.scienceName,
      category: addFormData.category,
      publicationCountry: addFormData.publicationCountry,
      publicationDate: addFormData.publicationDate,
      link: addFormData.link,
    };

    const newList = [...list, newItem];
    setList(newList);
    setVisible(!visible);
    let scienceDegreeVal = document.querySelector("[name='scienceName']");
    let universityVal = document.querySelector("[name='category']");
    let privatizationVal = document.querySelector(
      "[name='publicationCountry']"
    );
    let diplomaVal = document.querySelector("[name='publicationDate']");
    let linkVal = document.querySelector("[name='link']");
    scienceDegreeVal.value = "";
    universityVal.value = "";
    privatizationVal.value = "";
    diplomaVal.value = "";
    linkVal.value = "";
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedList = {
      id: editListId,
      scienceName: editFormData.scienceName,
      category: editFormData.category,
      publicationCountry: editFormData.publicationCountry,
      publicationDate: editFormData.publicationDate,
      link: editFormData.link,
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
      scienceName: ls.scienceName,
      category: ls.category,
      publicationCountry: ls.publicationCountry,
      publicationDate: ls.publicationDate,
      link: ls.link,
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
      <form onSubmit={handleEditFormSubmit}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr className="table__row">
              <th className="table__head" style={{ flexBasis: "190px" }}>
                Elmi işin adı
              </th>
              <th className="table__head" style={{ flexBasis: "190px" }}>
                Kateqoriyası
              </th>
              <th className="table__head" style={{ flexBasis: "190px" }}>
                Nəşr olunduğu ölkə
              </th>
              <th className="table__head" style={{ flexBasis: "190px" }}>
                Nəşr olunduğu tarix
              </th>
              <th className="table__head" style={{ flexBasis: "190px" }}>
                Link
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
