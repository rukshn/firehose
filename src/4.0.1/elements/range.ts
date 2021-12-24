import { Extension } from "./extension";
import { SimpleQuantity } from "./simpleQuantitiy";

interface FhirRange {
  id: string;
  low: SimpleQuantity;
  high: SimpleQuantity;
  extension: Array<Extension>;
}

class FhirRange {
  private _data: {
    id: string;
    low: SimpleQuantity;
    high: SimpleQuantity;
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
    return "Range";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      low: this.low && this.low.toJSON(),
      high: this.high && this.high.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { FhirRange };
