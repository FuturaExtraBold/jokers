import Panel from "../../components/Panel/Panel.jsx";

function PanelBuildingYourHand() {
  return (
    <Panel
      title="BUILDING YOUR HAND"
      textAlign="center"
      body={
        <>
          <p className="body">
            The cards you draw are either placed
            <br />
            face-up in front of you, or held in your hand:
          </p>
          <div className="panel__section">
            <h3>Poker Hand (Face-Up)</h3>
            <ul className="body body--list">
              <li>
                •&nbsp;
                <span className="body--large body--accent">Number Cards</span>{" "}
                create your face-up{" "}
                <span className="body--large">Poker Hand</span>
              </li>
              <li>
                •&nbsp;Any time you draw{" "}
                <span className="body--large body--accent">Number Cards</span>
                , add them to your
                <br />
                <span className="body--large">Poker Hand</span> by{" "}
                <span className="body--large">
                  placing them face-up in front of you
                </span>
              </li>
              <li>
                •&nbsp;<span className="body--large">Poker Hands</span> are
                revealed at the end (the{" "}
                <span className="body--large body--accent">Showdown</span>)
              </li>
              <li>
                •&nbsp;<span className="body--large">Poker Hands</span> are
                visible to all, so it's easy to see
                <br />
                who's on top (and who needs to be taken down!)
              </li>
            </ul>
          </div>
          <div className="panel__section">
            <h3>Hidden Cards (In Hand)</h3>
            <ul className="body body--list">
              <li>
                •&nbsp;
                <span className="body--large body--accent">Trick Cards</span>{" "}
                and{" "}
                <span className="body--large body--accent">Joker Cards</span>{" "}
                are your secret
                <br />
                weapons and stay hidden in your hand
              </li>
              <li>
                •&nbsp;
                <span className="body--large">
                  <span className="body--accent">Trick Cards</span> stay hidden
                  until you play them
                </span>
              </li>
              <li>
                •&nbsp;
                <span className="body--large body--accent">Joker Cards</span>{" "}
                (Wild Cards) stay hidden until the end
              </li>
            </ul>
          </div>
        </>
      }
    />
  );
}

export default PanelBuildingYourHand;
