import "./InfoPanel.scss";

import PropTypes from "prop-types";

const InfoPanel = ({ title, body, rtl }) => {
  return (
    <div className={`info-panel ${rtl ? "info-panel--rtl" : ""}`}>
      <div className="info-panel__text">
        <h2 className="info-panel__title">{title}</h2>
        <div className="info-panel__body">{body}</div>
      </div>
    </div>
  );
};

InfoPanel.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  rtl: PropTypes.bool,
};

export default InfoPanel;
