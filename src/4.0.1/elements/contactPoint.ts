import { code } from "../types/code";
import { positiveInt } from "../types/positiveInt";
import { Element } from "./element";
import { Extension } from "./extension";
import { Period } from "./period";

interface ContactPoint {
  id: string;
  system: code;
  value: string;
  use: code;
  rank: number;
  period: Period;
  extension: Array<Extension>;
}

class ContactPoint {
  private _data: {
    id: string;
    system: string;
    _system: code;
    value: string;
    use: string;
    _use: code;
    rank: number;
    _rank: Element;
    period: object;
    _period: Element;
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
        this._data.system = value.getValue();
      },
    });

    Object.defineProperty(this, "_system", {
      enumerable: true,
      get: () => this._data._system,
      set: (value: code) => {
        if (!value) return;
        this._data._system = value;
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
        this._data.use = value.getValue();
      },
    });

    Object.defineProperty(this, "_use", {
      enumerable: true,
      get: () => this._data._use,
      set: (value: code) => {
        if (!value) return;
        this._data._use = value;
      },
    });

    Object.defineProperty(this, "rank", {
      enumerable: true,
      get: () => this._data.rank,
      set: (value: positiveInt) => {
        if (!value) return;
        this._data.rank = value.getValue();
      },
    });

    Object.defineProperty(this, "_rank", {
      enumerable: true,
      get: () => this._data._rank,
      set: (value: positiveInt) => {
        if (!value) return;
        this._data._rank = new Element(value);
      },
    });

    Object.defineProperty(this, "period", {
      enumerable: true,
      get: () => this._data.period,
      set: (value: Period) => {
        if (!value) return;
        this._data.period = value.toJSON();
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
      system: this.system,
      _system: this._data._system,
      value: this.value,
      use: this.use,
      _use: this._data._use,
      rank: this.rank,
      _rank: this._data._rank && this._data._rank.toJSON(),
      period: this.period,
      _period: this._data._period,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ContactPoint };
