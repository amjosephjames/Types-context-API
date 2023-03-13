import React, { useContext, useState } from "react";
import { UserContext } from "./globalState";

const InputScreen = () => {
  const value = useContext(UserContext);
  const [name, setName] = useState<string>("");
  const [stack, setStack] = useState<string>("");

  const addUser = () => {
    value?.setData((el) => [
      ...el,
      { id: Math.floor(Math.random() * 100), name: name, stack: stack },
    ]);
  };

  return (
    <div
      style={{
        width: "300px",
        height: "150px",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      <input
        style={{
          width: "99%",
          outline: "none",
          height: "60px",
          marginTop: "30px",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <br />
      <input
        style={{
          width: "99%",
          outline: "none",
          height: "60px",
          marginTop: "30px",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
        placeholder="Stack"
        value={stack}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStack(e.target.value)
        }
      />
      <br />
      <button
        style={{
          width: "100%",
          outline: "none",
          height: "60px",
          backgroundColor: "black",
          marginTop: "30px",
          color: "white",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
        onClick={addUser}
      >
        Add Student
      </button>
    </div>
  );
};

export default InputScreen;
