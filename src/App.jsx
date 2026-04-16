import "./App.scss";

import Header from "./components/Header/Header.jsx";
import Panel from "./components/Panel/Panel.jsx";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header title="How to Play" />
        <div className="container container--padded">
          <Panel
            title="OBJECT OF THE GAME"
            body={
              <>
                <p className="body">
                  Build the{" "}
                  <span className="body body--large">
                    highest-ranking Poker Hand
                  </span>{" "}
                  by the
                  <br />
                  end of the game. Over{" "}
                  <span className="body body--large">
                    four fast-paced rounds
                  </span>
                  , you'll:
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
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
