import { Coding } from "./coding";
import { Extension } from "./extension";

interface CodeableConcept {
  id: string;
  coding: Array<Coding>;
  text: string;
  extension: Array<Extension>;
}

class CodeableConcept {
  private _data: {
    coding: Array<Coding>;
    id: string;
    text: string;
    extension: Array<Extension>;
  };
  constructor(options?) {
    Object.defineProperty(this, "_data", { value: { ...options } });

    Object.defineProperty(this, "id", {
      get: () => this._data.id,
      set: (value: string) => {
        if (!value) return;
        this._data.id = value;
      },
    });

    Object.defineProperty(this, "coding", {
      get: () => this._data.coding,
      set: (value: Array<Coding>) => {
        if (!value) return;
        this._data.coding = value;
      },
    });

    Object.defineProperty(this, "text", {
      get: () => this._data.text,
      set: (value: string) => {
        if (!value) return;
        this._data.text = value;
      },
    });

    Object.defineProperty(this, "extension", {
      get: () => this._data.extension,
      set: (value: Array<Extension>) => {
        if (!value) return;
        this._data.extension = value;
      },
    });
  }

  getResourceType(): string {
    return "CodeableConcept";
  }

  toJSON(): object {
    return {
      id: this.id,
      coding: this.coding && this._data.coding.map((c) => c.toJSON()),
      text: this.text,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { CodeableConcept };
