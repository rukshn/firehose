import { code } from "../types/code";
import { Extension } from "./extension";

interface Narrative {
  id: string;
  status: code;
  div: string;
  extension: Array<Extension>;
}

class Narrative {
  private _data: {
    id: string;
    status: code;
    div: string;
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

    Object.defineProperty(this, "status", {
      enumerable: true,
      get: () => this._data.status,
      set: (value: code) => {
        if (!value) return;
        this._data.status = value;
      },
    });

    Object.defineProperty(this, "div", {
      enumerable: true,
      get: () => this._data.div,
      set: (value: string) => {
        if (!value) return;
        this._data.div = value;
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
    return "Resource.text";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      status: this.status && this.status.getValue(),
      div: this.div,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Narrative };
