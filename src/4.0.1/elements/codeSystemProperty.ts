import { code } from "../types/code";
import { Extension } from "./extension";

interface CodeSystemProperty {
  id: string;
  code: code;
  uri: URL;
  description: string;
  type: code;
  extension: Array<Extension>;
}

class CodeSystemProperty {
  private _data: {
    id: string;
    code: code;
    uri: URL;
    desciption: string;
    type: code;
    extension: Array<Extension>;
  };
  constructor(options?) {
    Object.defineProperty(this, "_data", { value: { ...options } });

    Object.defineProperty(this, "code", {
      enumerable: true,
      get: () => this._data.code,
      set: (value: code) => {
        if (!value) return;
        this._data.code = value;
      },
    });

    Object.defineProperty(this, "uri", {
      enumerable: true,
      get: () => this._data.uri,
      set: (value: URL) => {
        if (!value) return;
        this._data.uri = value;
      },
    });

    Object.defineProperty(this, "description", {
      enumerable: true,
      get: () => this._data.desciption,
      set: (value: string) => {
        if (!value) return;
        this._data.desciption = value;
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
    return "CodeSyste.property";
  }

  toJSON(): object {
    return {
      id: this.id,
      code: this.code && this.code.getValue(),
      uri: this.uri && this.uri.href,
      description: this.description,
      type: this.type && this.type.getValue(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { CodeSystemProperty };
