import React, { useContext } from "react";
import { UserContext } from "./globalState";

const DisplayScreen = () => {
  const value = useContext(UserContext);
  console.log(value?.data);
  return (
    <div
      style={{
        width: "350px",
        height: "450px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",

        alignItems: "center",
        marginTop: "200px",
      }}
    >
      <div
        style={{
          width: "90%",
          height: "90%",
          display: "flex",
          // justifyContent: "space-between",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {value?.data.map((props) => (
          <div key={props.id}>
            <div style={{ marginTop: "10px" }}>{props.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayScreen;
