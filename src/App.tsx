import Raect from "react";
import DisplayScreen from "../src/components/displayScreen";
import InputScreen from "../src/components/inputScreen";

const app = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "black",
        width: "100%",
        height: "150vh",
      }}
    >
      <br />
      <br />
      <br />
      <InputScreen />
      <br />
      <br />
      <br />
      <DisplayScreen />
    </div>
  );
};
export default app;
