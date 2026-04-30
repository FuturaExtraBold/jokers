import "./CTA.scss";

import PropTypes from "prop-types";

const CTA = ({ title, description, buttonText, buttonLink }) => {
  return (
    <section className="cta">
      <div className="cta__accent" />
      <div className="cta__text">
        <h2 className="cta__title">{title}</h2>
        <p className="body cta__description">{description}</p>
      </div>
      <a href={buttonLink} className="cta__button">
        {buttonText}
      </a>
    </section>
  );
};

CTA.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default CTA;
