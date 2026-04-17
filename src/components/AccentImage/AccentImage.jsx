import "./AccentImage.scss";

import PropTypes from "prop-types";

function AccentImage({ src, alt = "", width, top, left }) {
  return (
    <img
      className="accent-image"
      src={src}
      alt={alt}
      style={{ width, top, left }}
    />
  );
}

AccentImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
};

export default AccentImage;
