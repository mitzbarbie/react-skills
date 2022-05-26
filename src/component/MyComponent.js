const MyComponent = (props) => {
  return (
    <div>
      Hallo, this is {props.name}! <br />
      My children name is {props.children}.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "David",
};

export default MyComponent;
