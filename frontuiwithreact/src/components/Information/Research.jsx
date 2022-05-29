import React from "react";
import MiniInfo from "./MiniInfo";
const Research = ({ mode }) => {
  return (
    <>
      {mode == undefined ? (
        <div className="research p-rl-50">
          <MiniInfo
            title={"Elmi Derece:"}
            subtitle={"Texniki elmler namizedi, dosent"}
          />
          <MiniInfo
            title={"Tedqiqat sahesi:"}
            subtitle={
              "Data mining, ekspert sistemleri, suni intellekt, big data"
            }
          />
          <MiniInfo
            title={"E-poct"}
            subtitle={"nazila.rahimova@asoiu.edu.az"}
            mbnone={"none"}
          />
        </div>
      ) : (
        <div className="research p-rl-50" style={{ textAlign: "center" }}>
          <MiniInfo
            title={"Elmi Derece:"}
            subtitle={"Texniki elmler namizedi, dosent"}
            mode={mode}
          />
          <MiniInfo
            title={"Tedqiqat sahesi:"}
            subtitle={
              "Data mining, ekspert sistemleri, suni intellekt, big data"
            }
            mode={mode}
          />
          <MiniInfo
            title={"E-poct"}
            subtitle={"nazila.rahimova@asoiu.edu.az"}
            mbnone={"none"}
            mode={mode}
          />
        </div>
      )}
    </>
  );
};

export default Research;
