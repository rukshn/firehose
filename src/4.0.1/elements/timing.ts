//TODO: complete timing element.
// For now timing will have code and text
// FHIR documentation - Many systems avoid the complexity of the Timing structure by using a text field for timing instructions. This maps to Timing.code.text

import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";

interface Timing {
  id: string;
  code: CodeableConcept;
  extension: Array<Extension>;
}

class Timing {
  private _data: {
    id: string;
    code: CodeableConcept;
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

    Object.defineProperty(this, "code", {
      enumerable: true,
      get: () => this._data.code,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.code = value;
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
    return "Timing";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      code: this.code && this.code.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Timing };
