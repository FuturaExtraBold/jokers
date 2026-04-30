import InfoPanel from "../../components/InfoPanel/InfoPanel";

const FunnyBusiness = () => {
  return (
    <div className="info-panel-section funny-business">
      <InfoPanel
        title={
          <span>
            FAST-PACED
            <br />
            FUNNY BUSINESS
          </span>
        }
        body={
          <>
            <p className="body">
              No board. No dice. Just a handful
              <br />
              of hilarious ways to{" "}
              <span className="body--large">
                unleash animated
                <br />
                anarchy on enemies
              </span>{" "}
              while building the
              <br />
              best poker hand possible. Take out the
              <br />
              competition to{" "}
              <span className="body--accent">come out on top!</span>
            </p>
          </>
        }
      />
    </div>
  );
};

export default FunnyBusiness;
