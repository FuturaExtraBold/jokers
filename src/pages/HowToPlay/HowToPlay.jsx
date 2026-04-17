import Header from "../../components/Header/Header.jsx";
import PanelBuildingYourHand from "./PanelBuildingYourHand.jsx";
import PanelObjectOfTheGame from "./PanelObjectOfTheGame.jsx";
import PanelOnYourTurn from "./PanelOnYourTurn.jsx";
import PanelRoundStructure from "./PanelRoundStructure.jsx";
import PanelSettingUpTheGame from "./PanelSettingUpTheGame.jsx";

function HowToPlay() {
  return (
    <div className="container">
      <Header title="How to Play" />
      <div className="container container--padded">
        <PanelObjectOfTheGame />
        <PanelSettingUpTheGame />
        <PanelBuildingYourHand />
        <PanelRoundStructure />
        <PanelOnYourTurn />
      </div>
    </div>
  );
}

export default HowToPlay;
