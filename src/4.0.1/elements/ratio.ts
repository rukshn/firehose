import { Extension } from "./extension";
import { Quantity } from "./quantity";

interface Ratio {
  id: string;
  numerator: Quantity;
  denominator: Quantity;
  extension: Array<Extension>;
}

class Ratio {
  private _data: {
    id: string;
    numerator: Quantity;
    denominator: Quantity;
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

    Object.defineProperty(this, "numerator", {
      enumerable: true,
      get: () => this._data.numerator,
      set: (value: Quantity) => {
        if (!value) return;
        this._data.numerator = value;
      },
    });

    Object.defineProperty(this, "denminator", {
      enumerable: true,
      get: () => this._data.denominator,
      set: (value: Quantity) => {
        if (!value) return;
        this._data.denominator = value;
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
    return "Ratio";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      numerator: this.numerator && this.numerator.toJSON(),
      denominator: this.denominator && this.denominator.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Ratio };
