import { Extension } from "../elements/extension";
import { Meta } from "../elements/meta";
import { ParametersParameter } from "../elements/paramatersParameter";

interface Parameters {
  id: string;
  meta: Meta;
  parameter: Array<ParametersParameter>;
  extension: Array<Extension>;
}

class Parameters {
  private _data: {
    id: string;
    meta: Meta;
    parameter: Array<ParametersParameter>;
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

    Object.defineProperty(this, "meta", {
      enumerable: true,
      get: () => this._data.meta,
      set: (value: Meta) => {
        if (!value) return;
        this._data.meta = value;
      },
    });

    Object.defineProperty(this, "parameter", {
      enumerable: true,
      get: () => this._data.parameter,
      set: (value: Array<ParametersParameter>) => {
        if (!value) return;
        this._data.parameter = value;
      },
    });

    Object.defineProperty(this, "extension", {
      enumerable: true,
      get: () => this._data.extension,
      set: (value: Array<Extension>) => {
        this._data.extension = value;
      },
    });
  }

  getResourceType(): string {
    return "Parameters";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      parameter: this.parameter && this.parameter.map((p) => p.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Parameters };
