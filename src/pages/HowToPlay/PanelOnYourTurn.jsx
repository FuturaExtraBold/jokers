import Panel from "../../components/Panel/Panel.jsx";

function PanelOnYourTurn() {
  return (
    <Panel
      title="ON YOUR TURN"
      textAlign="center"
      body={
        <>
          <p className="body">
            Each turn, you{" "}
            <span className="body--large">
              <em>must</em>
              &nbsp;&nbsp;draw
            </span>{" "}
            one card from the <span className="body--large">Draw Pile</span>,
            <br />
            and you{" "}
            <span className="body--large">
              <em>may</em>&nbsp;&nbsp;play
            </span>{" "}
            a <span className="body--large body--accent">Trick Card</span> from
            your hand:
          </p>
          <div className="panel__section">
            <h3>1. Draw One Card</h3>
            <p className="body">
              Draw one card from the top of the{" "}
              <span className="body--large">Draw Pile</span>.
              <br />
              If it’s a{" "}
              <span className="body--large body--accent">Number Card</span>, add
              it to your face-up <span className="body--large">Poker Hand</span>
            </p>
          </div>
          <div className="panel__section">
            <h3>2. Play a Trick Card (Optional)</h3>
            <p className="body">
              You <em>may</em>&nbsp;play one{" "}
              <span className="body--large body--accent">Trick Card</span> from
              your hand by
              <br />
              simply{" "}
              <span className="body--large">following the instructions</span> on
              the <span className="body--large body--accent">Trick Card</span>
            </p>
          </div>
          <div className="panel__section">
            <h3>3. End Turn</h3>
            <p className="body">
              After drawing your card and/or playing a{" "}
              <span className="body--large body--accent">Trick Card</span>,
              <br />
              just announce out loud <em>“I’m done!”</em>
            </p>
          </div>
        </>
      }
    />
  );
}

export default PanelOnYourTurn;
