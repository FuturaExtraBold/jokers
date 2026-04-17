import Panel from "../../components/Panel/Panel.jsx";

function PanelEndOfGame() {
  return (
    <Panel
      textAlign="center"
      title="END OF GAME"
      body={
        <>
          <p className="body">
            After the last player completes their turn in the fourth
            <br />
            and final round, it’s time for the{" "}
            <span className="body--accent">Showdown!</span>
          </p>
          <p className="body">
            To prepare for the <span className="body--accent">Showdown</span>,
            all players will
            <br />
            combine their <span className="body--accent">Joker Cards</span> (if
            held) with their <span className="body--large">Number Cards</span>
            <br />
            and arrange their cards to build their best possible
            <br />
            <span className="body--large">Poker Hand.</span> Refer to the{" "}
            <span className="body--large">Hand Rankings Card</span> if needed.
          </p>
          <p className="body">
            When everyone is ready, it’s{" "}
            <span className="body--accent">Showdown</span> time!
            <br />
            All players reveal their final hands (5 cards maximum).
            <br />
            The <span className="body--large">
              highest-ranking Poker Hand
            </span>{" "}
            wins!
          </p>
        </>
      }
    />
  );
}

export default PanelEndOfGame;
