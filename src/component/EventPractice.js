import { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChnageMessage = (e) => setMessage(e.target.value);

  const onClick = () => {
    console.log(username + ": " + message);
    setUsername("");
    setMessage("");
    // after click event, refresh for input
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>test</h1>
      <input
        type="text"
        name="username"
        placeholder="write your name"
        value={username}
        onChange={onChangeUsername}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="write something here"
        value={message}
        onChange={onChnageMessage}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
