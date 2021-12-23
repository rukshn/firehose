import { code } from "../types/code";
import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";
import { Period } from "./period";
import { Reference } from "./reference";

interface EncounterLocation {
  id: string;
  location: Reference;
  status: code;
  physicalType: CodeableConcept;
  period: Period;
  extension: Array<Extension>;
}

class EncounterLocation {
  private _data: {
    id: string;
    location: Reference;
    status: code;
    physicalType: CodeableConcept;
    period: Period;
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

    Object.defineProperty(this, "location", {
      enumerable: true,
      get: () => this._data.location,
      set: (value: Reference) => {
        if (!value) return;
        this._data.location = value;
      },
    });

    Object.defineProperty(this, "status", {
      enumerable: true,
      get: () => this._data.status,
      set: (value: code) => {
        if (!value) return;
        this._data.status = value;
      },
    });

    Object.defineProperty(this, "physicalType", {
      enumerable: true,
      get: () => this._data.physicalType,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.physicalType = value;
      },
    });

    Object.defineProperty(this, "period", {
      enumerable: true,
      get: () => this._data.period,
      set: (value: Period) => {
        if (!value) return;
        this._data.period = value;
      },
    });

    Object.defineProperty(this, "extension", {
      enumerable: true,
      get: () => this._data.extension,
      set: (value: Array<Extension>) => {
        if (!value) return;
        this, (this._data.extension = value);
      },
    });
  }

  getResourceType(): string {
    return "Encounter.Locaiton";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      location: this.location && this.location.toJSON(),
      status: this.status && this.status.getValue(),
      physicalType: this.physicalType.toJSON(),
      period: this.period && this.period.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { EncounterLocation };
