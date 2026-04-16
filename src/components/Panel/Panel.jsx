import "./Panel.scss";

import PropTypes from "prop-types";

function Panel({ title, body }) {
  return (
    <div className="panel">
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
};

export default Panel;
