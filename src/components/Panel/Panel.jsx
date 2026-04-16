import "./Panel.scss";

import PropTypes from "prop-types";

function Panel({ title, body, textAlign }) {
  return (
    <div className={`panel ${textAlign ? `text-align--${textAlign}` : ""}`}>
      <div className="panel__header">
        <h2>{title}</h2>
      </div>
      <div className="panel__body">{body}</div>
    </div>
  );
}

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  textAlign: PropTypes.oneOf(["left", "center"]),
};

export default Panel;
