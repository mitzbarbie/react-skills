import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      Hallo, this is {name}! <br />
      My children name is {children}. <br />
      My favorite number is {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "David",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
