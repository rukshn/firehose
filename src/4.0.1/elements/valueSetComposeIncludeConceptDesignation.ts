import { code } from "../types/code";
import { Coding } from "./coding";
import { Extension } from "./extension";

interface ValueSetComposeIncludeConceptDesignation {
  id: string;
  language: code;
  use: Coding;
  value: string;
  extension: Array<Extension>;
}

class ValueSetComposeIncludeConceptDesignation {
  private _data: {
    id: string;
    language: code;
    use: Coding;
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

    Object.defineProperty(this, "language", {
      enumerable: true,
      get: () => this._data.language,
      set: (value: code) => {
        if (!value) return;
        this._data.language = value;
      },
    });

    Object.defineProperty(this, "use", {
      enumerable: true,
      get: () => this._data.use,
      set: (value: Coding) => {
        if (!value) return;
        this._data.use = value;
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
    return "ValuSet.compose.include.concept.designation";
  }

  toJSON(): object {
    return {
      id: this.id,
      language: this.language && this.language.getValue(),
      use: this.use && this.use.toJSON(),
      value: this.value,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ValueSetComposeIncludeConceptDesignation };
