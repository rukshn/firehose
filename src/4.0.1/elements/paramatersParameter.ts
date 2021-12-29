import { Resource } from "../resources/resource";
import { Extension } from "./extension";

interface ParametersParameter {
  id: string;
  name: string;
  value: any;
  resource: Resource;
  part: Array<ParametersParameter>;
  extension: Array<Extension>;
}

class ParametersParameter {
  private _data: {
    id: string;
    name: string;
    value: any;
    resource: Resource;
    part: Array<ParametersParameter>;
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

    Object.defineProperty(this, "name", {
      enumerable: true,
      get: () => this._data.name,
      set: (value: string) => {
        if (!value) return;
        this._data.name = value;
      },
    });

    Object.defineProperty(this, "value", {
      enumerable: true,
      get: () => this._data.value,
      set: (value: any) => {
        if (!value) return;
        this._data.value = value;
      },
    });

    Object.defineProperty(this, "resource", {
      enumerable: true,
      get: () => this._data.resource,
      set: (value: Resource) => {
        if (!value) return;
        this._data.value = value;
      },
    });

    Object.defineProperty(this, "part", {
      enumerable: true,
      get: () => true,
      set: (value: Array<ParametersParameter>) => {
        if (!value) return;
        this._data.part = value;
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
    return "Parameters.parameter";
  }

  toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      value: this.value,
      resource: this.resource && this.resource.toJSON(),
      part: this.part && this.part.map((p) => p.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ParametersParameter };
