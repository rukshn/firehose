import { positiveInt } from "../types/positiveInt";
import { Extension } from "./extension";
import { Period } from "./period";
import { SimpleQuantity } from "./simpleQuantitiy";

interface SampledData {
  id: string;
  origin: SimpleQuantity;
  period: number;
  factor: number;
  lowerLimit: number;
  upperLimit: number;
  dimensions: positiveInt;
  data: string;
  extension: Array<Extension>;
}

class SampledData {
  private _data: {
    id: string;
    origin: SimpleQuantity;
    period: number;
    factor: number;
    lowerLimit: number;
    upperLimit: number;
    dimensions: positiveInt;
    data: string;
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

    Object.defineProperty(this, "origin", {
      enumerable: true,
      get: () => this._data.origin,
      set: (value: SimpleQuantity) => {
        if (!value) return;
        this._data.origin = value;
      },
    });

    Object.defineProperty(this, "period", {
      enumerable: true,
      get: () => this._data.period,
      set: (value: number) => {
        if (!value) return;
        this._data.period = value;
      },
    });

    Object.defineProperty(this, "factor", {
      enumerable: true,
      get: () => this._data.factor,
      set: (value: number) => {
        if (!value) return;
        this._data.factor = value;
      },
    });

    Object.defineProperty(this, "lowerLimit", {
      enumerable: true,
      get: () => this._data.lowerLimit,
      set: (value: number) => {
        if (!value) return;
        this._data.lowerLimit = value;
      },
    });

    Object.defineProperty(this, "upperLimit", {
      enumerable: true,
      get: () => this._data.upperLimit,
      set: (value: number) => {
        if (!value) return;
        this._data.upperLimit = value;
      },
    });

    Object.defineProperty(this, "dimensions", {
      enumerable: true,
      get: () => this._data.dimensions,
      set: (value: positiveInt) => {
        if (!value) return;
        this._data.dimensions = value;
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
    return "SampledData";
  }

  toJSON(): object {
    return {
      resuorceType: this.getResourceType(),
      id: this.id,
      origin: this.origin && this.origin.toJSON(),
      period: this.period,
      factor: this.factor,
      lowerLimit: this.lowerLimit,
      upperLimit: this.upperLimit,
      dimensions: this.dimensions && this.dimensions.getValue(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { SampledData };
