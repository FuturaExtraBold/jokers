import InfoPanel from "../../../components/InfoPanel/InfoPanel";

const PunchedUp = () => {
  return (
    <div className="info-panel-section punched-up">
      <InfoPanel
        title="FAST-paced FUNNY business"
        body={
          <>
            <p className="body">
              No board. No dice. Just a handful of hilarious ways to{" "}
              <span className="body--large">
                unleash animated anarchy on enemies
              </span>{" "}
              while building the best poker hand possible. Take out the
              competition to{" "}
              <span className="body--accent">come out on top!</span>
            </p>
          </>
        }
      />
    </div>
  );
};

export default PunchedUp;
