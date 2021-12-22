import { code } from "../types/code";
import { Extension } from "./extension";
import { Reference } from "./reference";

interface PatientLink {
  id: string;
  other: Reference;
  type: code;
  extension: Array<Extension>;
}

class PatientLink {
  private _data: {
    id: string;
    other: Reference;
    type: code;
    extension: Array<Extension>;
  };
  constructor(options?) {
    Object.defineProperty(this, "_data", { value: { ...options } });

    Object.defineProperty(this, "id", {
      enumerable: true,
      get: () => this._data.id,
      set: (value: string) => {
        if (!value) return;
        this._data.id = value;
      },
    });

    Object.defineProperty(this, "other", {
      enumerable: true,
      get: () => this._data.other,
      set: (value: Reference) => {
        if (!value) return;
        this._data.other = value;
      },
    });

    Object.defineProperty(this, "type", {
      enumerable: true,
      get: () => this._data.type,
      set: (value: code) => {
        if (!value) return;
        this._data.type = value;
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
    return "Patient.link";
  }

  toJSON(): object {
    return {
      id: this.id,
      other: this.other && this.other.toJSON(),
      type: this.type.getValue(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { PatientLink };
