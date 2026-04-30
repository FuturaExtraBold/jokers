import InfoPanel from "../../components/InfoPanel/InfoPanel";

const BigReveal = () => {
  return (
    <div className="info-panel-section big-reveal">
      <InfoPanel
        rtl
        title={
          <span>
            DON’T MISS OUR
            <br />
            BIG REVEAL
          </span>
        }
        body={
          <>
            <p className="body">
              Get product updates as we
              <br />
              approach launch and secure
              <br />
              <span className="body--large">
                early-adopter VIP pricing
              </span>{" "}
              when
              <br />
              <span className="body--accent">JOKERS</span> officially hits the
              table.
            </p>
          </>
        }
      />
    </div>
  );
};

export default BigReveal;
