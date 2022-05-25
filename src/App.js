import { Fragment } from "react";

function App() {
  const name = "hallo";
  const style = {
    backgroundColor: "black",
    color: "purple",
    fontSize: "32px",
    fontWeight: "bold",
    padding: 16,
  };
  return <div style={style}>{name}</div>;
}

export default App;
