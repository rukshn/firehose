import { CodeableConcept } from "./codeableConcept";
import { Coding } from "./coding";
import { Extension } from "./extension";
import { Quantity } from "./quantity";
import { FhirRange } from "./range";
import { Reference } from "./reference";

interface UseageContext {
  id: string;
  code: Coding;
  valueCodeableConcept: CodeableConcept;
  valueQuantity: Quantity;
  valueRange: FhirRange;
  valueReference: Reference;
  extension: Array<Extension>;
}

class UseageContext {
  private _data: {
    id: string;
    code: Coding;
    valueCodeableConcept: CodeableConcept;
    valueQuantity: Quantity;
    valueRange: FhirRange;
    valueReference: Reference;
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
      set: (value: Coding) => {
        if (!value) return;
        this._data.code = value;
      },
    });

    Object.defineProperty(this, "valueCodeableConcept", {
      enumerable: true,
      get: () => this._data.valueCodeableConcept,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.valueCodeableConcept = value;
      },
    });

    Object.defineProperty(this, "valueQuantity", {
      enumerable: true,
      get: () => this._data.valueQuantity,
      set: (value: Quantity) => {
        if (!value) return;
        this._data.valueQuantity = value;
      },
    });

    Object.defineProperty(this, "valueRange", {
      enumerable: true,
      get: () => this._data.valueRange,
      set: (value: FhirRange) => {
        if (!value) return;
        this._data.valueRange = value;
      },
    });

    Object.defineProperty(this, "valueReference", {
      enumerable: true,
      get: () => this._data.valueReference,
      set: (value: Reference) => {
        if (!value) return;
        this._data.valueReference = value;
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
    return "UseageContext";
  }

  toJSON(): object {
    return {
      id: this.id,
      code: this.code && this.code.toJSON(),
      valueCodeableConcept:
        this.valueCodeableConcept && this.valueCodeableConcept.toJSON(),
      valueQuantity: this.valueQuantity && this.valueQuantity.toJSON(),
      valueRange: this.valueRange && this.valueRange.toJSON(),
      valueReference: this.valueReference && this.valueReference.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { UseageContext };
