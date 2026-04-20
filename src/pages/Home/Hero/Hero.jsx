import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__title">
        POKER STRATEGY.
        <br />
        CARTOON CHAOS.
      </h1>
      <p className="body hero__description">
        The <span className="text--accent">Jokers</span> have taken over Poker
        to create a wild
        <br />
        new family card game full of clever characters,
        <br />
        sneaky tricks and slapstick sabotage!
      </p>
    </section>
  );
};

export default Hero;
