import { code } from "../types/code";
import { Extension } from "./extension";

interface CodeSystemFilter {
  id: string;
  code: code;
  description: string;
  operator: Array<code>;
  value: string;
  extension: Array<Extension>;
}

class CodeSystemFilter {
  private _data: {
    id: string;
    code: code;
    description: string;
    operator: Array<code>;
    value: string;
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

    Object.defineProperty(this, "code", {
      enumerable: true,
      get: () => this._data.code,
      set: (value: code) => {
        if (!value) return;
        this._data.code = value;
      },
    });

    Object.defineProperty(this, "description", {
      enumerable: true,
      get: () => this._data.description,
      set: (value: string) => {
        if (!value) return;
        this._data.description = value;
      },
    });

    Object.defineProperty(this, "operator", {
      enumerable: true,
      get: () => this._data.operator,
      set: (value: Array<code>) => {
        if (!value) return;
        this._data.operator = value;
      },
    });

    Object.defineProperty(this, "value", {
      enumerable: true,
      get: () => this._data.value,
      set: (value: string) => {
        if (!value) return;
        this._data.value = value;
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
    return "CodeSystem.filter";
  }

  toJSON(): object {
    return {
      id: this.id,
      code: this.code && this.code.getValue(),
      description: this.description,
      operator: this.operator && this.operator.map((o) => o.toJSON()),
      value: this.value,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { CodeSystemFilter };
