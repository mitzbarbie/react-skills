import { useState } from "react";

const ChildrenDetail = () => {
  const [meow, setMeow] = useState("choose your children");
  const onClickMitz = () => setMeow("engkkyang!!");
  const onClickBarbie = () => setMeow("grrr");

  const [color, setColor] = useState("tomato");

  return (
    <div>
      <h1 style={{ color }}>{meow}</h1>
      <button
        onClick={() => {
          onClickMitz();
          setColor("white");
        }}
      >
        Mitz
      </button>
      <button
        onClick={() => {
          onClickBarbie();
          setColor("gray");
        }}
      >
        Barbie
      </button>
    </div>
  );
};

export default ChildrenDetail;
