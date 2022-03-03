import { Mediator } from "jimmy-js";
import { Handler } from "jimmy-js/types/types";
import * as React from "react";
import { createStickyNoteRequestHandler } from "../features/miro/handlers/create-sticky-note-request-handler";
import { CreateStickyNoteRequest } from "../features/miro/requests/create-sticky-note-request";

interface MediatorContext {
  mediator: Mediator;
}

const mediatorContext = React.createContext<MediatorContext | undefined>(
  undefined
);

export const MediatorProvider: React.FC = ({ children }) => {
  const mediator = new Mediator();
  mediator.handle(CreateStickyNoteRequest, createStickyNoteRequestHandler);

  return (
    <mediatorContext.Provider value={{ mediator }}>
      {children}
    </mediatorContext.Provider>
  );
};

export function useMediator() {
  const { mediator } = React.useContext(mediatorContext) ?? {};

  if (mediator == null) {
    throw new Error("useMediator must be used within a MediatorProvider");
  }

  return mediator;
}
