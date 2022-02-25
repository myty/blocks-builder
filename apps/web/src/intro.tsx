import * as React from "react";

function Intro() {
  const handleStickyNoteCreation = async () => {
    const stickyNote = await miro.board.createStickyNote({
      content: `Hello, World!`,
    });

    await miro.board.viewport.zoomTo(stickyNote);
  };

  return (
    <div className="grid wrapper">
      <div className="cs1 ce12">
        <h1>Blocks Builder!</h1>
        <p>
          Welcome to the game of building blocks! You've are the designated
          foreman. It's your job to communication to the rest of the team on how
          they will build their blocks.
        </p>
      </div>
      <div className="cs1 ce12">
        <a className="button" onClick={handleStickyNoteCreation}>
          Add Sticky Note
        </a>
      </div>
    </div>
  );
}

export default Intro;
