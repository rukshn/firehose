import { Address } from "../elements/address";
import { Attachment } from "../elements/attachment";
import { CodeableConcept } from "../elements/codeableConcept";
import { ContactPoint } from "../elements/contactPoint";
import { Extension } from "../elements/extension";
import { HumanName } from "../elements/humanName";
import { Identifier } from "../elements/identifier";
import { Meta } from "../elements/meta";
import { PatientCommunication } from "../elements/patientCommunication";
import { PatientContact } from "../elements/patientContact";
import { PatientLink } from "../elements/patientLink";
import { Reference } from "../elements/reference";
import { code } from "../types/code";
import { date } from "../types/date";
import { dateTime } from "../types/dateTime";

interface Patient {
  id: string;
  meta: Meta;
  identifier: Array<Identifier>;
  active: boolean;
  name: Array<HumanName>;
  telecom: Array<ContactPoint>;
  gender: code;
  birthDate: date;
  deceasedBoolean: boolean;
  deceasedDateTime: dateTime;
  address: Array<Address>;
  maritalStatus: CodeableConcept;
  multipleBirthBoolean: boolean;
  multipleBirthInteger: number;
  photo: Array<Attachment>;
  contact: Array<PatientContact>;
  communication: Array<PatientCommunication>;
  generalPractitioner: Reference;
  managingOrganization: Reference;
  link: Array<PatientLink>;
  extension: Array<Extension>;
}

class Patient {
  private _data: {
    id: string;
    meta: Meta;
    active: boolean;
    name: Array<HumanName>;
    telecom: Array<ContactPoint>;
    gender: code;
    birthDate: date;
    deceasedBoolean: boolean;
    deceasedDateTime: dateTime;
    address: Array<Address>;
    maritalStatus: CodeableConcept;
    multipleBirthBoolean: boolean;
    multipleBirthInteger: number;
    photo: Array<Attachment>;
    contact: Array<PatientContact>;
    commuinication: Array<PatientCommunication>;
    generalPractitioner: Reference;
    managingOrganization: Reference;
    link: Array<PatientLink>;
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

    Object.defineProperty(this, "gender", {
      enumerable: true,
      get: () => this._data.gender,
      set: (value: code) => {
        if (!value) return;
        this._data.gender = value;
      },
    });

    Object.defineProperty(this, "birthdate", {
      enumerable: true,
      get: () => this._data.birthDate,
      set: (value: date) => {
        if (!value) return;
        this._data.birthDate = value;
      },
    });

    Object.defineProperty(this, "diseasedBoolean", {
      enumerable: true,
      get: () => this._data.deceasedBoolean,
      set: (value: boolean) => {
        if (!value) return;
        this._data.deceasedBoolean = value;
      },
    });

    Object.defineProperty(this, "deceasedDateTime", {
      enumerable: true,
      get: () => this._data.deceasedDateTime,
      set: (value: dateTime) => {
        this._data.deceasedDateTime = value;
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

    Object.defineProperty(this, "maritalStatus", {
      enumerable: true,
      get: () => this._data.maritalStatus,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.maritalStatus = value;
      },
    });

    Object.defineProperty(this, "multipleBirthBoolean", {
      enumerable: true,
      get: () => this._data.multipleBirthBoolean,
      set: (value: boolean) => {
        if (!value) return;
        this._data.multipleBirthBoolean = value;
      },
    });

    Object.defineProperty(this, "multipleBirthInteger", {
      enumerable: true,
      get: () => this._data.multipleBirthInteger,
      set: (value: number) => {
        if (!value) return;
        this._data.multipleBirthInteger = value;
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

    Object.defineProperty(this, "contact", {
      enumerable: true,
      get: () => this._data.contact,
      set: (value: Array<PatientContact>) => {
        if (!value) return;
        this._data.contact = value;
      },
    });

    Object.defineProperty(this, "communication", {
      enumerable: true,
      get: () => this._data.commuinication,
      set: (value: Array<PatientCommunication>) => {
        if (!value) return;
        this._data.commuinication = value;
      },
    });

    Object.defineProperty(this, "generalPractitioner", {
      enumerable: true,
      get: () => this._data.generalPractitioner,
      set: (value: Reference) => {
        if (!value) return;
        this._data.generalPractitioner = value;
      },
    });

    Object.defineProperty(this, "managingOrganization", {
      enumerable: true,
      get: () => this._data.generalPractitioner,
      set: (value: Reference) => {
        if (!value) return;
        this._data.managingOrganization = value;
      },
    });

    Object.defineProperty(this, "link", {
      enumerable: true,
      get: () => this._data.link,
      set: (value: Array<PatientLink>) => {
        if (!value) return;
        this._data.link = value;
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
    return "Patient";
  }

  toJSON(): object {
    return {
      resourceType: "Patient",
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      identifier: this.identifier && this.identifier.map((i) => i.toJSON()),
      active: this.active,
      name: this.name && this.name.map((n) => n.toJSON()),
      telecom: this.telecom && this.telecom.map((t) => t.toJSON()),
      gender: this.gender && this.gender.getValue(),
      birthdate: this.birthDate && this.birthDate.getValue(),
      deceasedBoolean: this.deceasedBoolean,
      deceasedDateTime:
        this.deceasedDateTime && this.deceasedDateTime.getValue(),
      address: this.address && this.address.map((a) => a.toJSON()),
      maritalStatus: this.maritalStatus && this.maritalStatus.toJSON(),
      multipleBirthBoolean: this.multipleBirthBoolean,
      multipleBirthInteger: this.multipleBirthInteger,
      photo: this.photo && this.photo.map((p) => p.toJSON()),
      contact: this.contact && this.contact.map((c) => c.toJSON()),
      communication: this.communication && this.communication.map((c) => {}),
      generalPractitioner:
        this.generalPractitioner && this.generalPractitioner.toJSON(),
      managingOrganization:
        this.managingOrganization && this.managingOrganization.toJSON(),
      link: this.link && this.link.map((l) => l.toJSON()),
    };
  }
}

export { Patient };
