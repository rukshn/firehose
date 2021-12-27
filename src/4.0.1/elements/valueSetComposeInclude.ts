import { Extension } from "./extension";
import { ValueSetComposeIncludeConcept } from "./valueSetComposeIncludeConcept";

interface ValueSetComposeInclude {
  id: string;
  system: URL;
  version: string;
  concept: Array<ValueSetComposeIncludeConcept>;
  extension: Array<Extension>;
}

class ValueSetComposeInclude {
  private _data: {
    id: string;
    system: URL;
    version: string;
    concept: Array<ValueSetComposeIncludeConcept>;
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

    Object.defineProperty(this, "system", {
      enumerable: true,
      get: () => this._data.system,
      set: (value: URL) => {
        if (!value) return;
        this._data.system = value;
      },
    });

    Object.defineProperty(this, "version", {
      enumerable: true,
      get: () => this._data.version,
      set: (value: string) => {
        if (!value) return;
        this._data.version = value;
      },
    });

    Object.defineProperty(this, "concept", {
      enumerable: true,
      get: () => this._data.concept,
      set: (value: Array<ValueSetComposeIncludeConcept>) => {
        if (!value) return;
        this._data.concept = value;
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
    return "ValueSet.compose.inlucde";
  }

  toJSON(): object {
    return {
      id: this.id,
      system: this.system && this.system.href,
      version: this.version,
      concept: this.concept && this.concept.map((c) => c.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ValueSetComposeInclude };
