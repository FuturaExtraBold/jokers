import "./CTA.scss";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta__accent" />
      <div className="cta__text">
        <h2 className="cta__title">YOU WANT IN ON THIS?</h2>
        <p className="body cta__description">
          Sign up for exclusive pre-launch offers
        </p>
      </div>
      <a href="#" className="cta__button">
        Sign Up
      </a>
    </section>
  );
};

export default CTA;
