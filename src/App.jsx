import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <div className="header__inner-shadow" />
          <h1>How to Play</h1>
        </div>
        <div className="container container--padded">
          <div className="panel">
            <div className="panel__header">
              <h2>OBJECT OF THE GAME</h2>
            </div>
            <div className="panel__body">
              <p className="body">
                Build the{" "}
                <span className="body body--large">
                  highest-ranking Poker Hand
                </span>{" "}
                by the
                <br />
                end of the game. Over{" "}
                <span className="body body--large">four fast-paced rounds</span>
                , you’ll:
              </p>
              <ul className="body body--list">
                <li>
                  •&nbsp;
                  <span className="body--large">
                    Build up your Poker Hand with{" "}
                    <span className="body--accent">Number Cards</span>
                  </span>
                </li>
                <li>
                  •&nbsp;
                  <span className="body--large">
                    Strengthen your hand or cause chaos with{" "}
                    <span className="body--accent">Trick Cards</span>
                  </span>
                </li>
                <li>
                  •&nbsp;
                  <span className="body--large">
                    Collect <span className="body--accent">Joker Cards</span>{" "}
                    (aka Wild Cards) to use at the end
                  </span>
                </li>
              </ul>
              <p className="body">
                The highest-ranking{" "}
                <span className="body body--large">Poker Hand</span> wins the
                game!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
