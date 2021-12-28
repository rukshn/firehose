import { Extension } from "../elements/extension";
import { Meta } from "../elements/meta";
import { code } from "../types/code";

interface Resource {
  id: string;
  meta: Meta;
  implicitRules: Array<URL>;
  language: code;
  extension: Array<Extension>;
}

class Resource {
  private _data: {
    id: string;
    meta: Meta;
    implicitRules: Array<URL>;
    language: code;
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

    Object.defineProperty(this, "implicitRules", {
      enumerable: true,
      get: () => this._data.implicitRules,
      set: (value: Array<URL>) => {
        if (!value) return;
        this._data.implicitRules = value;
      },
    });

    Object.defineProperty(this, "language", {
      enumerable: true,
      get: () => this._data.language,
      set: (value: code) => {
        if (!value) return;
        this._data.language = value;
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
    return "Resource";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      implicitRules:
        this.implicitRules && this.implicitRules.map((i) => i.href),
      language: this.language && this.language.getValue(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Resource };
