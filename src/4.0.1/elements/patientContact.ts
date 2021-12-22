import { code } from "../types/code";
import { Address } from "./address";
import { CodeableConcept } from "./codeableConcept";
import { ContactPoint } from "./contactPoint";
import { Extension } from "./extension";
import { HumanName } from "./humanName";
import { Period } from "./period";
import { Reference } from "./reference";

interface PatientContact {
  id: string;
  relationship: Array<CodeableConcept>;
  name: HumanName;
  telecom: Array<ContactPoint>;
  address: Address;
  gender: code;
  organization: Reference;
  period: Period;
  extension: Array<Extension>;
}

class PatientContact {
  private _data: {
    id;
    relationship: Array<CodeableConcept>;
    name: HumanName;
    telecom: Array<ContactPoint>;
    address: Address;
    gender: code;
    organization: Reference;
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

    Object.defineProperty(this, "relationship", {
      enumerable: true,
      get: () => this._data.relationship,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.relationship = value;
      },
    });

    Object.defineProperty(this, "name", {
      enumerable: true,
      get: () => this._data.name,
      set: (value: HumanName) => {
        if (!value) return;
        this._data.name = value;
      },
    });

    Object.defineProperty(this, "telecom", {
      enumerable: true,
      get: () => this._data.telecom,
      set: (value: Array<ContactPoint>) => {
        if (!value) return;
        this._data.telecom = value;
      },
    });

    Object.defineProperty(this, "gender", {
      enumerable: true,
      get: () => this._data.gender,
      set: (value: code) => {
        if (!value) return;
        this._data.gender = value;
      },
    });

    Object.defineProperty(this, "organization", {
      enumerable: true,
      get: () => this._data.organization,
      set: (value: Reference) => {
        if (!value) return;
        this._data.organization = value;
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
        this._data.extension = value;
      },
    });
  }

  getResourceType(): string {
    return "Patient.contact";
  }

  toJSON(): object {
    return {
      id: this.id,
      relationship:
        this.relationship && this.relationship.map((r) => r.toJSON()),
      name: this.name.toJSON(),
      telecom: this.telecom && this.telecom.map((t) => t.toJSON()),
      address: this.address.toJSON(),
      gender: this.gender,
      organization: this.organization.toJSON(),
      period: this.period.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { PatientContact };
