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
    status: string;
    _status: code;
    div: string;
    extension: object;
    _extension: Array<Extension>;
  };

  constructor(options?) {
    const map = new Map(Object.entries(options));

    Object.defineProperty(this, "_data", { value: {} });

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
        this._data.status = value.getValue();
        this._data._status = value;
      },
    });

    Object.defineProperty(this, "_status", {
      enumerable: true,
      get: () => this._data._status,
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
        this._data.extension = value.map((v) => v.toJSON());
        this._data._extension = value;
      },
    });

    Object.defineProperty(this, "_extension", {
      enumerable: true,
      get: () => this._data._extension,
    });
  }

  getResourceType(): string {
    return "Narrative";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      status: this.status,
      _status: this._data._status,
      div: this.div,
      extension: this.extension,
      _extension: this._data._extension,
    };
  }
}

export { Narrative };
