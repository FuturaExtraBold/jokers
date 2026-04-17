import Panel from "../../components/Panel/Panel.jsx";

function PanelSpecialCardRules() {
  return (
    <Panel
      title="SPECIAL CARD RULES"
      textAlign="center"
      body={
        <>
          <div className="panel__section">
            <h3>6 and 9 Cards</h3>
            <p className="body">
              All <span className="body--accent">6 Cards</span> and{" "}
              <span className="body--accent">9 Cards</span> are{" "}
              <em>interchangeable</em>,
              <br />
              so build your hands and strategize accordingly!
            </p>
          </div>
          <div className="panel__section">
            <h3>Hammer Card</h3>
            <p className="body">
              The <span className="body--accent">Hammer Card</span> is playable
              by the holder at any time
              <br />
              to cancel the effect of any{" "}
              <span className="body--accent">Trick Card</span>, but must be
              played
              <br />
              immediately after the{" "}
              <span className="body--accent">Trick Card</span> is played. The{" "}
              <span className="body--accent">Hammer</span>
              <br />
              <span className="body--accent">Card</span> can also be played{" "}
              <em>on behalf of another player.</em>
            </p>
          </div>
          <div className="panel__section">
            <h3>Mini Bomb Card</h3>
            <p className="body">
              Everyone must pass a card to the left <em>at the same time.</em>
            </p>
          </div>
          <div className="panel__section">
            <h3>Banana Peel Card</h3>
            <p className="body">
              Everyone must discard <em>at the same time.</em>
            </p>
          </div>
          <div className="panel__section">
            <h3>Sucker Punch Card</h3>
            <p className="body">
              Players must swap ALL their cards, including their visible
              <br />
              <span className="body--large">Poker Hand</span> <em>and</em> any
              hidden <span className="body--accent">Trick Cards</span> and{" "}
              <span className="body--accent">Joker Cards</span>.
            </p>
          </div>
          <div className="panel__section">
            <h3>Discard Pile Re-Shuffle</h3>
            <p className="body">
              If you run out of draw cards, simply re-shuffle the
              <br />
              <span className="body--large">Discard Pile</span> to replenish the{" "}
              <span className="body--large">Draw Pile</span>. Turn over the top
              <br />
              card and place it face up to create a new{" "}
              <span className="body--large">Discard Pile</span>.
            </p>
          </div>
        </>
      }
    />
  );
}

export default PanelSpecialCardRules;
