import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";
import { FhirRange } from "./range";
import { SimpleQuantity } from "./simpleQuantitiy";

interface ObservationReferenceRange {
  id: string;
  low: SimpleQuantity;
  high: SimpleQuantity;
  type: CodeableConcept;
  appliesTo: Array<CodeableConcept>;
  age: FhirRange;
  text: string;
  extension: Array<Extension>;
}

class ObservationReferenceRange {
  private _data: {
    id: string;
    low: SimpleQuantity;
    high: SimpleQuantity;
    type: CodeableConcept;
    appliesTo: Array<CodeableConcept>;
    age: FhirRange;
    text: string;
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

    Object.defineProperty(this, "low", {
      enumerable: true,
      get: () => this._data.low,
      set: (value: SimpleQuantity) => {
        if (!value) return;
        this._data.low = value;
      },
    });

    Object.defineProperty(this, "high", {
      enumerable: true,
      get: () => this._data.high,
      set: (value: SimpleQuantity) => {
        if (!value) return;
        this._data.high = value;
      },
    });

    Object.defineProperty(this, "type", {
      enumerable: true,
      get: () => this._data.type,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.type = value;
      },
    });

    Object.defineProperty(this, "appliesTo", {
      enumerable: true,
      get: () => this._data.appliesTo,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.appliesTo = value;
      },
    });

    Object.defineProperty(this, "age", {
      enumerable: true,
      get: () => this._data.age,
      set: (value: FhirRange) => {
        if (!value) return;
        this._data.age = value;
      },
    });

    Object.defineProperty(this, "text", {
      enumerable: true,
      get: () => this._data.text,
      set: (value: string) => {
        if (!value) return;
        this._data.text = value;
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
    return "Observation.referenceRange";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      low: this.low && this.low.toJSON(),
      high: this.high && this.high.toJSON(),
      type: this.type && this.type.toJSON(),
      appliesTo: this.appliesTo && this.appliesTo.map((a) => a.toJSON()),
      age: this.age && this.age.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ObservationReferenceRange };
