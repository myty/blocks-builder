import { Request } from "jimmy-js";

export class CreateStickyNoteRequest extends Request<Promise<void>> {
  constructor(public text: string, public zoom: boolean) {
    super();
  }
}
