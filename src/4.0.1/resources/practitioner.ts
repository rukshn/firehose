import { Address } from "../elements/address";
import { Attachment } from "../elements/attachment";
import { CodeableConcept } from "../elements/codeableConcept";
import { ContactPoint } from "../elements/contactPoint";
import { Extension } from "../elements/extension";
import { HumanName } from "../elements/humanName";
import { Identifier } from "../elements/identifier";
import { PractitionerQualification } from "../elements/practitionerQualification";
import { code } from "../types/code";
import { date } from "../types/date";

interface Practitioner {
  id: string;
  identifier: Array<Identifier>;
  active: boolean;
  name: Array<HumanName>;
  telecom: Array<ContactPoint>;
  address: Array<Address>;
  gender: code;
  birthDate: date;
  photo: Array<Attachment>;
  qualification: Array<PractitionerQualification>;
  communication: Array<CodeableConcept>;
  extension: Array<Extension>;
}

class Practitioner {
  private _data: {
    id: string;
    identifier: Array<Identifier>;
    active: boolean;
    name: Array<HumanName>;
    telecom: Array<ContactPoint>;
    address: Array<Address>;
    gender: code;
    birthdate: date;
    photo: Array<Attachment>;
    qualification: Array<PractitionerQualification>;
    communication: Array<CodeableConcept>;
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

    Object.defineProperty(this, "identifier", {
      enumerable: true,
      get: () => this._data.identifier,
      set: (value: Array<Identifier>) => {
        if (!value) return;
        this._data.identifier = value;
      },
    });

    Object.defineProperty(this, "active", {
      enumerable: true,
      get: () => this._data.active,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.active = value;
      },
    });

    Object.defineProperty(this, "name", {
      enumerable: true,
      get: () => this._data.name,
      set: (value: Array<HumanName>) => {
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

    Object.defineProperty(this, "address", {
      enumerable: true,
      get: () => this._data.address,
      set: (value: Array<Address>) => {
        if (!value) return;
        this._data.address = value;
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

    Object.defineProperty(this, "birthDate", {
      enumerable: true,
      get: () => this._data.birthdate,
      set: (value: date) => {
        if (!value) return;
        this._data.birthdate = value;
      },
    });

    Object.defineProperty(this, "photo", {
      enumerable: true,
      get: () => this._data.photo,
      set: (value: Array<Attachment>) => {
        if (!value) return;
        this._data.photo = value;
      },
    });

    Object.defineProperty(this, "qualification", {
      enumerable: true,
      get: () => this._data.qualification,
      set: (value: Array<PractitionerQualification>) => {
        if (!value) return;
        this._data.qualification = value;
      },
    });

    Object.defineProperty(this, "communication", {
      enumerable: true,
      get: () => this._data.communication,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.communication = value;
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
    return "Practitioner";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      identifier: this.identifier && this.identifier.map((i) => i.toJSON()),
      active: this.active,
      name: this.name && this.name.map((n) => n.toJSON()),
      telecom: this.telecom && this.telecom.map((t) => t.toJSON()),
      address: this.address && this.address.map((a) => a.toJSON()),
      gender: this.gender && this.gender.getValue(),
      birthDate: this.birthDate && this.birthDate.getValue(),
      photo: this.photo && this.photo.map((p) => p.toJSON()),
      qualification:
        this.qualification && this.qualification.map((q) => q.toJSON()),
      communication:
        this.communication && this.communication.map((c) => c.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Practitioner };
