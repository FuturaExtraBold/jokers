import "./App.scss";

import pie from "./assets/pie.png";
import AccentImage from "./components/AccentImage/AccentImage.jsx";
import Header from "./components/Header/Header.jsx";
import Panel from "./components/Panel/Panel.jsx";
import { fluid } from "./utils/fluid.js";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header title="How to Play" />
        <div className="container container--padded">
          <Panel
            textAlign="center"
            title="OBJECT OF THE GAME"
            images={
              <AccentImage
                src={pie}
                alt=""
                width={fluid(80, 373)}
                top={fluid(20, 120)}
                left={fluid(-18, -100)}
              />
            }
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
          <Panel
            title="SETTING UP THE GAME"
            textAlign="left"
            body={
              <ol className="body body--list body--list-numbered">
                <li>
                  Remove Instructions + Rankings cards and{" "}
                  <span className="body body--large">shuffle deck</span>
                </li>
                <li>
                  Each player{" "}
                  <span className="body body--large">draws four (4) cards</span>
                </li>
                <li>
                  Place remaining cards face down as the{" "}
                  <span className="body body--large">Draw Pile</span>
                </li>
                <li>
                  Flip top card over to create a{" "}
                  <span className="body body--large">Discard Pile</span>
                </li>
              </ol>
            }
          />
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
                      <span className="body--large body--accent">
                        Number Cards
                      </span>{" "}
                      create your face-up{" "}
                      <span className="body--large">Poker Hand</span>
                    </li>
                    <li>
                      •&nbsp;Any time you draw{" "}
                      <span className="body--large body--accent">
                        Number Cards
                      </span>
                      , add them to your
                      <br />
                      <span className="body--large">Poker Hand</span> by{" "}
                      <span className="body--large">
                        placing them face-up in front of you
                      </span>
                    </li>
                    <li>
                      •&nbsp;<span className="body--large">Poker Hands</span>{" "}
                      are revealed at the end (the{" "}
                      <span className="body--large body--accent">Showdown</span>
                      )
                    </li>
                    <li>
                      •&nbsp;<span className="body--large">Poker Hands</span>{" "}
                      are visible to all, so it’s easy to see
                      <br />
                      who’s on top (and who needs to be taken down!)
                    </li>
                  </ul>
                </div>
                <div className="panel__section">
                  <h3>Hidden Cards (In Hand)</h3>
                  <ul className="body body--list">
                    <li>
                      •&nbsp;
                      <span className="body--large body--accent">
                        Trick Cards
                      </span>{" "}
                      and{" "}
                      <span className="body--large body--accent">
                        Joker Cards
                      </span>{" "}
                      are your secret
                      <br />
                      weapons and stay hidden in your hand
                    </li>
                    <li>
                      •&nbsp;
                      <span className="body--large">
                        <span className="body--accent">Trick Cards</span> stay
                        hidden until you play them
                      </span>
                    </li>
                    <li>
                      •&nbsp;
                      <span className="body--large body--accent">
                        Joker Cards
                      </span>{" "}
                      (Wild Cards) stay hidden until the end
                    </li>
                  </ul>
                </div>
              </>
            }
          />
          <Panel
            title="ROUND STRUCTURE"
            textAlign="center"
            body={
              <ul className="body body--list">
                <li>
                  •&nbsp;
                  <span className="body--large">One game = Four rounds</span>
                </li>
                <li>
                  •&nbsp;Each player takes{" "}
                  <span className="body--large">one turn per round</span>
                </li>
                <li>
                  •&nbsp;Turns go clockwise, starting with the{" "}
                  <span className="body--large">youngest player</span>
                </li>
                <li>
                  •&nbsp;The youngest player{" "}
                  <span className="body--large">
                    announces the start of each round
                  </span>
                  <br />
                  <em>"Begin round two!...Round three!...Final Round!"</em>
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
