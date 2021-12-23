import { code } from "../types/code";
import { Extension } from "./extension";

interface Quantity {
  id: string;
  value: number;
  comparator: code;
  unit: string;
  system: URL;
  code: code;
  extension: Array<Extension>;
}

class Quantity {
  private _data: {
    id: string;
    value: number;
    comparator: code;
    unit: string;
    system: URL;
    code: code;
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

    Object.defineProperty(this, "value", {
      enumerable: true,
      get: () => this._data.value,
      set: (value: number) => {
        if (!value) return;
        this._data.value = value;
      },
    });

    Object.defineProperty(this, "comparator", {
      enumerable: true,
      get: () => this._data.comparator,
      set: (value: code) => {
        if (!value) return;
        this._data.comparator = value;
      },
    });

    Object.defineProperty(this, "unit", {
      enumerable: true,
      get: () => this._data.unit,
      set: (value: string) => {
        if (!value) return;
        this._data.unit = value;
      },
    });

    Object.defineProperty(this, "system", {
      enumerable: true,
      get: () => this._data.system,
      set: (value: URL) => {
        this._data.system = value;
      },
    });

    Object.defineProperty(this, "code", {
      enumerable: true,
      get: () => this._data.code,
      set: (value: code) => {
        this._data.code = value;
      },
    });

    Object.defineProperty(this, "extension", {
      enumerable: true,
      get: () => this._data.extension,
      set: (value: Array<Extension>) => {
        if (!value) return;
      },
    });
  }

  getResourceType(): string {
    return "Quantity";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType,
      id: this.id && this.id,
      value: this.value && this.value,
      comparator: this.comparator && this.comparator.toJSON(),
      unit: this.unit && this.unit,
      system: this.system && this.system.href,
      code: this.code && this.code.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Quantity };
