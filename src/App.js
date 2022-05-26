import "./App.css";
import MyComponent from "./component/MyComponent";

function App() {
  const name = "hallo";
  return (
    <div className="test">
      {name} {/*ddd*/}dddd /*ddd */ //dddd
      <MyComponent />
    </div>
  );
}

export default App;
