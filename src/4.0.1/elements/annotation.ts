import { dateTime } from "../types/dateTime";
import { Extension } from "./extension";
import { Reference } from "./reference";

interface Annotation {
  id: string;
  authorReference: Reference;
  authorString: string;
  time: dateTime;
  text: string;
  extension: Array<Extension>;
}

class Annotation {
  private _data: {
    id: string;
    authorReference: Reference;
    authorString: string;
    time: dateTime;
    text: string;
    extension: Array<Extension>;
  };

  constructor(options?) {
    Object.defineProperty(this, "_data", { value: { ...options } });

    Object.defineProperty(this, "authorReference", {
      enumerable: true,
      get: () => this._data.authorReference,
      set: (value: Reference) => {
        if (!value) return;
        this._data.authorReference = value;
      },
    });

    Object.defineProperty(this, "authorString", {
      enumerable: true,
      get: () => this._data.authorString,
      set: (value: string) => {
        if (!value) return;
        this._data.authorString = value;
      },
    });

    Object.defineProperty(this, "time", {
      enumerable: true,
      get: () => this._data.time,
      set: (value: dateTime) => {
        if (!value) return;
        this._data.time = value;
      },
    });

    Object.defineProperty(this, "text", {
      enumerable: true,
      get: () => this._data.text,
      set: (value: string) => {
        if (!value) return;
        this._data.text = value;
      },
    });

    Object.defineProperty(this, "extension", {
      enumerable: true,
      get: () => this._data.extension,
      set: (value: Array<Extension>) => {
        if (!value) return;
        this._data.extension = value;
      },
    });
  }

  getResourceType(): string {
    return "Annotation";
  }

  toJSON(): object {
    return {
      id: this.id,
      authorReference: this.authorReference && this.authorReference.toJSON(),
      authorString: this.authorString,
      time: this.time && this.time.getValue(),
      text: this.text,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Annotation };
