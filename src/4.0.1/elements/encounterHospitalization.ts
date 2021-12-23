import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";
import { Identifier } from "./identifier";
import { Reference } from "./reference";

interface EncounterHospitalization {
  id: string;
  preAdmissionIdentifier: Identifier;
  origin: Reference;
  admitSource: CodeableConcept;
  reAdmission: CodeableConcept;
  dietPreference: Array<CodeableConcept>;
  specialCourtesy: Array<CodeableConcept>;
  specialArrangement: Array<CodeableConcept>;
  destination: Reference;
  dischargeDisposition: CodeableConcept;
  extension: Array<Extension>;
}

class EncounterHospitalization {
  private _data: {
    id: string;
    preAdmissionIdentifier: Identifier;
    origin: Reference;
    admitSource: CodeableConcept;
    reAdmission: CodeableConcept;
    dietPreference: Array<CodeableConcept>;
    specialCourtesy: Array<CodeableConcept>;
    specialArrangement: Array<CodeableConcept>;
    destination: Reference;
    dischargeDisposition: CodeableConcept;
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

    Object.defineProperty(this, "preAdmissionIdentifier", {
      enumerable: true,
      get: () => this._data.preAdmissionIdentifier,
      set: (value: Identifier) => {
        if (!value) return;
        this._data.preAdmissionIdentifier = value;
      },
    });

    Object.defineProperty(this, "origin", {
      enumerable: true,
      get: () => this._data.origin,
      set: (value: Reference) => {
        if (!value) return;
        this._data.origin = value;
      },
    });

    Object.defineProperty(this, "admitSource", {
      enumerable: true,
      get: () => this._data.admitSource,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.admitSource = value;
      },
    });

    Object.defineProperty(this, "reAdmission", {
      enumerable: true,
      get: () => this._data.reAdmission,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.reAdmission = value;
      },
    });

    Object.defineProperty(this, "dietPreference", {
      enumerable: true,
      get: () => this._data.dietPreference,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this.dietPreference = value;
      },
    });

    Object.defineProperty(this, "specialCourtesy", {
      enumerable: true,
      get: () => this._data.specialCourtesy,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.specialCourtesy = value;
      },
    });

    Object.defineProperty(this, "specialArrangement", {
      enumerable: true,
      get: () => this._data.specialArrangement,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.specialArrangement = value;
      },
    });

    Object.defineProperty(this, "destination", {
      enumerable: true,
      get: () => this._data.destination,
      set: (value: Reference) => {
        if (!value) return;
        this._data.destination = value;
      },
    });

    Object.defineProperty(this, "dischargeDeposition", {
      enumerable: true,
      get: () => this._data.dischargeDisposition,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.dischargeDisposition = value;
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
    return "Encounter.hospitalization";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      preAdmissionIdentifier:
        this.preAdmissionIdentifier && this.preAdmissionIdentifier.toJSON(),
      origin: this.origin && this.origin.toJSON(),
      admitSource: this.admitSource && this.admitSource.toJSON(),
      reAdmission: this.reAdmission && this.reAdmission.toJSON(),
      dietPreference:
        this.dietPreference && this.dietPreference.map((d) => d.toJSON()),
      specialCourtesy:
        this.specialCourtesy && this.specialCourtesy.map((s) => s.toJSON()),
      specialArrangement:
        this.specialArrangement &&
        this.specialArrangement.map((s) => s.toJSON()),
      destination: this.destination && this.destination.toJSON(),
      dischargeDisposition:
        this.dischargeDisposition && this.dischargeDisposition.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { EncounterHospitalization };
