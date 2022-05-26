import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("hallo!");
  const onClickLeave = () => setMessage("bye bye!");

  const [color, setColor] = useState("white");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        red
      </button>
      <button style={{ color: "orange" }} onClick={() => setColor("orange")}>
        orange
      </button>
      <button style={{ color: "yellow" }} onClick={() => setColor("yellow")}>
        yellow
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        green
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        blue
      </button>
      <button style={{ color: "purple" }} onClick={() => setColor("purple")}>
        purple
      </button>
    </div>
  );
};

export default Say;
