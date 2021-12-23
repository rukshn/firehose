import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";

interface PatientCommunication {
  id: string;
  language: CodeableConcept;
  preferred: boolean;
  extension: Array<Extension>;
}

class PatientCommunication {
  private _data: {
    id: string;
    language: CodeableConcept;
    preferred: boolean;
    extension: Array<Extension>;
  };
  constructor(options?) {
    Object.defineProperty(this, "_data", { value: { ...options } });

    Object.defineProperty(this, "language", {
      enumerable: true,
      get: () => this._data.language,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.language = value;
      },
    });

    Object.defineProperty(this, "preferred", {
      enumerable: true,
      get: () => this._data.preferred,
      set: (value: boolean) => {
        if (!value) return;
        this._data.preferred = value;
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
    return "Patient.communication";
  }

  toJSON(): object {
    return {
      id: this.id,
      language: this.language && this.language.toJSON(),
      preferred: this.preferred,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { PatientCommunication };
