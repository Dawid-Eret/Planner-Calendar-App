const outerBoundStyle = {
  backgroundColor: "rgb(255, 255, 255)",
  color: "white",
  border: "1px solid black",
  minHeight: "100px",
  minWidth: "300px",
  padding: "0px",
  boxShadow: "8px 9px rgba(0, 0, 0, 0.55)",
};

const titleBarBorderStyle = {
  border: "0px",
  borderBottom: "1px",
  borderStyle: "solid",
  borderColor: "black",
};

const titleBarStyleSelected = {
  backgroundColor: "rgb(63, 127, 255)",
  paddingTop: "4px",
  paddingBottom: "6px",
  paddingLeft: "6px",
  paddingRight: "6px",
  wordWrap: "break-word" as any,
  borderStyle: "solid",
  border: "0px",
};

const titleBarStyle = {
  backgroundColor: "rgb(63, 127, 255)",
  paddingTop: "4px",
  paddingBottom: "6px",
  paddingLeft: "6px",
  paddingRight: "6px",
  wordWrap: "normal" as any,
  overflow: "hide",
  maxHeight: "32px",
  borderStyle: "solid",
  border: "0px",
};

const noteTextStyle = {
  wordWrap: "break-word" as any,
  paddingLeft: "4px",
  paddingRight: "4px",
  color: "black",
};

interface Props {
  noteID: number;
  noteSelected: number;
  onClick: () => void;
}

const Note = ({ noteID, noteSelected, onClick }: Props) => {
  return (
    <div
      className="col"
      onClick={() => {
        onClick();
      }}
      style={outerBoundStyle}
    >
      <div style={titleBarBorderStyle}>
        <div
          style={
            noteID === noteSelected ? titleBarStyleSelected : titleBarStyle
          }
        >
          Lorem ipsum donot something something happy birthday Mr. Santa claus!
        </div>
      </div>
      <div style={noteTextStyle}>
        placeholder placeholder placeholder placeholder placeholder placeholder
        placeholder placeholder placeholder placeholder placeholder placeholder{" "}
        placeholder placeholder placeholder placeholder placeholder placeholder
        placeholder{" "}
      </div>
    </div>
  );
};

export default Note;
