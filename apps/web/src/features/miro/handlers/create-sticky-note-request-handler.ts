import { Handler } from "jimmy-js/types/types";
import { CreateStickyNoteRequest } from "../requests/create-sticky-note-request";

export const createStickyNoteRequestHandler: Handler<
  CreateStickyNoteRequest
> = async (request) => {
  const stickyNote = await miro.board.createStickyNote({
    content: request.text,
  });

  if (request.zoom) {
    await miro.board.viewport.zoomTo(stickyNote);
  }
};
