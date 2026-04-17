import Panel from "../../components/Panel/Panel.jsx";

function PanelRoundStructure() {
  return (
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
            <span className="body--large">announces the start of each round</span>
            <br />
            <em>"Begin round two!...Round three!...Final Round!"</em>
          </li>
        </ul>
      }
    />
  );
}

export default PanelRoundStructure;
