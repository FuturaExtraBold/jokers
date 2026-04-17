import dynamite from "../../assets/dynamite.webp";
import pie from "../../assets/pie.webp";
import AccentImage from "../../components/AccentImage/AccentImage.jsx";
import Panel from "../../components/Panel/Panel.jsx";
import { fluid } from "../../utils/fluid.js";

function PanelObjectOfTheGame() {
  return (
    <Panel
      textAlign="center"
      title="OBJECT OF THE GAME"
      images={
        <>
          <AccentImage
            src={pie}
            alt="Pie in the Face"
            width={fluid(108, 373)}
            top={fluid(20, 120)}
            left={fluid(-60, -100)}
          />
          <AccentImage
            src={dynamite}
            alt="Stick of Boom"
            width={fluid(118, 410)}
            top={fluid(-46, -160)}
            left={fluid(420, 1540)}
          />
        </>
      }
      body={
        <>
          <p className="body">
            Build the{" "}
            <span className="body body--large">highest-ranking Poker Hand</span>{" "}
            by the
            <br />
            end of the game. Over{" "}
            <span className="body body--large">four fast-paced rounds</span>,
            you'll:
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
                Collect <span className="body--accent">Joker Cards</span> (aka
                Wild Cards) to use at the end
              </span>
            </li>
          </ul>
          <p className="body">
            The highest-ranking{" "}
            <span className="body body--large">Poker Hand</span> wins the game!
          </p>
        </>
      }
    />
  );
}

export default PanelObjectOfTheGame;
