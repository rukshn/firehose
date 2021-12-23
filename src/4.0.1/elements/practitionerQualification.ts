import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";
import { Identifier } from "./identifier";
import { Period } from "./period";
import { Reference } from "./reference";

interface PractitionerQualification {
  id: string;
  identifier: Array<Identifier>;
  code: CodeableConcept;
  period: Period;
  issuer: Reference;
  extension: Array<Extension>;
}

class PractitionerQualification {
  private _data: {
    id: string;
    identifier: Array<Identifier>;
    code: CodeableConcept;
    period: Period;
    issuer: Reference;
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

    Object.defineProperty(this, "code", {
      enumerable: true,
      get: () => this._data.code,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.code = value;
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

    Object.defineProperty(this, "issuer", {
      enumerable: true,
      get: () => this._data.issuer,
      set: (value: Reference) => {
        if (!value) return;
        this._data.issuer = value;
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
    return "Practitioner.qualification";
  }

  toJSON(): object {
    return {
      id: this.id,
      identifier: this.identifier && this.identifier.map((i) => i.toJSON()),
      code: this.code && this.code.toJSON(),
      period: this.period && this.period.toJSON(),
      issuer: this.issuer && this.issuer.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { PractitionerQualification };
