import "./App.css";
import MyComponent from "./component/MyComponent";
import Say from "./component/Say";

function App() {
  const name = "hallo";
  return (
    <div className="test">
      test : {name} {/*ddd*/}dddd /*ddd */ //dddd
      <MyComponent name="halo" favoriteNumber={7}>
        Mitz and Barbie
      </MyComponent>
      <Say />
    </div>
  );
}

export default App;
