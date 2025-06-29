import { useState } from "react";
import Note from "./Note";

const pageStyle = {
  paddingLeft: "103px",
  paddingRight: "35px",
};

const noteContainerStyle = {
  gap: "25px",
  paddingTop: "16px",
  paddingBottom: "20px",
  paddingRight: "17.5px",
  marginRight: "-35px",
  maxHeight: "100dvh",
};

const handleNote = (id: number) => {
  return; // Placeholder
};

const notes = [
  <div></div>,
  <div></div>,
  <div></div>,
  <div></div>,
  <div></div>,
  <div></div>,
  <div></div>,
];

const PageNotes = () => {
  const [selectedNote, setNote] = useState(-1);

  return (
    <div className="container-fluid text-center" style={pageStyle}>
      <div className="row overflow-y-auto" style={noteContainerStyle}>
        {notes.map((note, index) => (
          <Note
            noteID={index}
            key={"note-" + index}
            noteSelected={selectedNote}
            onClick={() => {
              handleNote(index);
              setNote(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PageNotes;
