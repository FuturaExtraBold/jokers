import Panel from "../../components/Panel/Panel.jsx";

function PanelSettingUpTheGame() {
  return (
    <Panel
      title="SETTING UP THE GAME"
      textAlign="left"
      body={
        <ul className="body body--list">
          <li>
            1. Remove Instructions + Rankings cards and{" "}
            <span className="body body--large">shuffle deck</span>
          </li>
          <li>
            2. Each player{" "}
            <span className="body body--large">draws four (4) cards</span>
          </li>
          <li>
            3. Place remaining cards face down as the{" "}
            <span className="body body--large">Draw Pile</span>
          </li>
          <li>
            4. Flip top card over to create a{" "}
            <span className="body body--large">Discard Pile</span>
          </li>
        </ul>
      }
    />
  );
}

export default PanelSettingUpTheGame;
