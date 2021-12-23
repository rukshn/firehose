import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";
import { Period } from "./period";
import { Reference } from "./reference";

interface EncounterParticipant {
  id: string;
  type: Array<CodeableConcept>;
  period: Period;
  individual: Reference;
  extension: Array<Extension>;
}

class EncounterParticipant {
  private _data: {
    id: string;
    type: Array<CodeableConcept>;
    period: Period;
    individual: Reference;
    extension: Array<Extension>;
  };
  constructor(options?) {
    Object.defineProperty(this, "_data", {
      value: { ...options },
    });

    Object.defineProperty(this, "id", {
      enumerable: true,
      get: () => this._data.id,
      set: (value: string) => {
        if (!value) return;
        this._data.id = value;
      },
    });

    Object.defineProperty(this, "type", {
      enumerable: true,
      get: () => this._data.type,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.type = value;
      },
    });

    Object.defineProperty(this, "period", {
      enumerable: true,
      get: () => this._data.period,
      set: (value: Period) => {
        this._data.period = value;
      },
    });

    Object.defineProperty(this, "individual", {
      enumerable: true,
      get: () => this._data.individual,
      set: (value: Reference) => {
        if (!value) return;
        this._data.individual = value;
      },
    });

    Object.defineProperty(this, "extension", {
      enumerable: true,
      get: () => this._data.extension,
      set: (value: Array<Extension>) => {
        if (!value) this;
        this._data.extension = value;
      },
    });
  }

  getResourceType(): string {
    return "Encounter.participants";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType,
      id: this.id && this.id,
      type: this.type && this.type.map((t) => t.toJSON()),
      period: this.period && this.period.toJSON(),
      individual: this.individual && this.individual.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { EncounterParticipant };
