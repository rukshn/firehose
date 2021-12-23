import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";
import { Reference } from "./reference";

interface EncounterDiagnosis {
  id: string;
  condition: Reference;
  use: CodeableConcept;
  rank: number;
  extension: Array<Extension>;
}

class EncounterDiagnosis {
  private _data: {
    id: string;
    condition: Reference;
    use: CodeableConcept;
    rank: number;
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

    Object.defineProperty(this, "condition", {
      enumerable: true,
      get: () => this._data.condition,
      set: (value: Reference) => {
        if (!value) return;
        this._data.condition = value;
      },
    });

    Object.defineProperty(this, "use", {
      enumerable: true,
      get: () => this._data.use,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.use = value;
      },
    });

    Object.defineProperty(this, "rank", {
      enumerable: true,
      get: () => this._data.rank,
      set: (value: number) => {
        if (!value) return;
        this._data.rank = value;
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
    return "Encounter.diagnosis";
  }

  toJSON(): Object {
    return {
      id: this.id,
      condition: this.condition && this.condition.toJSON(),
      use: this.use && this.use.toJSON(),
      rank: this.rank,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { EncounterDiagnosis };
