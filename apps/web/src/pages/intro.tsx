import * as React from "react";
import { Button, ButtonStyle } from "ui";
import { CreateStickyNoteRequest } from "../features/miro/requests/create-sticky-note-request";
import { useMediator } from "../providers/mediator-provider";

function Intro() {
  const { send } = useMediator();

  const handleStickyNoteCreation = React.useCallback(
    async () => await send(new CreateStickyNoteRequest("Hello, world!", true)),
    []
  );

  return (
    <div className="grid">
      <div className="cs1 ce12">
        <h1>Blocks Builder!</h1>
        <p>
          Welcome to the game of building blocks! You've are the designated
          foreman. It's your job to communication to the rest of the team on how
          they will build their blocks.
        </p>
      </div>
      <div className="cs1 ce12">
        <Button style={ButtonStyle.Primary} onClick={handleStickyNoteCreation}>
          Add Sticky Note
        </Button>
      </div>
    </div>
  );
}

export default Intro;
