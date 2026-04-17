import Panel from "../../components/Panel/Panel.jsx";

function PanelSettingUpTheGame() {
  return (
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
  );
}

export default PanelSettingUpTheGame;
