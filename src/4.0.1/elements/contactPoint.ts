import { code } from "../types/code";
import { positiveInt } from "../types/positiveInt";
import { Extension } from "./extension";
import { Period } from "./period";

interface ContactPoint {
  id: string;
  system: code;
  value: string;
  use: code;
  rank: positiveInt;
  period: Period;
  extension: Array<Extension>;
}

class ContactPoint {
  private _data: {
    id: string;
    system: code;
    value: string;
    use: code;
    rank: positiveInt;
    period: Period;
    extension: Array<Extension>;
  };

  constructor(options?) {
    Object.defineProperty(this, "_data", { value: {} });

    Object.defineProperty(this, "id", {
      enumerable: true,
      get: () => this._data.id,
      set: (value: string) => {
        if (!value) return;
        this._data.id = value;
      },
    });

    Object.defineProperty(this, "system", {
      enumerable: true,
      get: () => this._data.system,
      set: (value: code) => {
        if (!value) return;
        this._data.system = value;
      },
    });

    Object.defineProperty(this, "value", {
      enumerable: true,
      get: () => this._data.value,
      set: (value: string) => {
        if (!value) return;
        this._data.value = value;
      },
    });

    Object.defineProperty(this, "use", {
      enumerable: true,
      get: () => this._data.use,
      set: (value: code) => {
        if (!value) return;
        this._data.use = value;
      },
    });

    Object.defineProperty(this, "rank", {
      enumerable: true,
      get: () => this._data.rank,
      set: (value: positiveInt) => {
        if (!value) return;
        this._data.rank = value;
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

    Object.defineProperty(this, "extension", {
      enumerable: true,
      get: () => this._data.extension,
      set: (value: Array<Extension>) => {
        if (!value) return;
        this._data.extension = value;
      },
    });

    Object.assign(this, options);
  }

  getResourceType(): string {
    return "ContactPoint";
  }

  toJSON(): object {
    return {
      id: this.id,
      system: this.system && this.system.getValue(),
      value: this.value,
      use: this.use && this.use.getValue(),
      rank: this.rank && this.rank.getValue(),
      period: this.period && this.period.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ContactPoint };
