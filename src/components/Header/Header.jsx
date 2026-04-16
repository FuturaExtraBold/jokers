import "./Header.scss";

import PropTypes from "prop-types";


function Header({ title }) {
  return (
    <div className="header">
      <div className="header__inner-shadow" />
      <h1>{title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
