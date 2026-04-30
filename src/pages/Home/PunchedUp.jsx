import InfoPanel from "../../components/InfoPanel/InfoPanel";

const PunchedUp = () => {
  return (
    <div className="info-panel-section punched-up">
      <InfoPanel
        title={
          <span>
            POKER...
            <br />
            PUNCHED UP
          </span>
        }
        body={
          <>
            <p className="body">
              Players compete to create the
              <br />
              strongest five-card poker hand.
              <br />
              <span className="body--large">Jokers are wild</span>, and{" "}
              <span className="body--accent">Trick Cards</span>
              <br />
              let you strengthen your hand or
              <br />
              <span className="body--accent">sabotage your opponents!</span>
            </p>
          </>
        }
      />
    </div>
  );
};

export default PunchedUp;
