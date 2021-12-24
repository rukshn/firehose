import { code } from "../types/code";
import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";
import { Period } from "./period";
import { Reference } from "./reference";

interface Identifier {
  id: string;
  use: code;
  type: CodeableConcept;
  system: URL;
  value: string;
  period: Period;
  assigner: Reference;
  extension: Array<Extension>;
}

class Identifier {
  private _data: {
    id: string;
    use: string;
    _use: code;
    type: object;
    _type: CodeableConcept;
    system: string;
    _system: URL;
    value: string;
    period: object;
    _period: Period;
    assigner: object;
    _assigner: Reference;
    extension: Array<Extension>;
  };
  constructor(options?) {
    Object.defineProperty(this, "_data", {
      value: {},
    });

    Object.defineProperty(this, "id", {
      enumerable: true,
      get: () => this._data.id,
      set: (value: string) => {
        if (!value) return;
        this._data.id = value;
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

    Object.defineProperty(this, "type", {
      enumerable: true,
      get: () => this._data.type,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.type = value.toJSON();
      },
    });

    Object.defineProperty(this, "_type", {
      enumerable: true,
      get: () => this._data._type,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data._type = value;
      },
    });

    Object.defineProperty(this, "system", {
      enumerable: true,
      get: () => this._data.system,
      set: (value: URL) => {
        if (!value) return;
        this._data.system = value.href;
      },
    });

    Object.defineProperty(this, "_system", {
      enumerable: true,
      get: () => this._data._system,
      set: (value: URL) => {
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

    Object.defineProperty(this, "period", {
      enumerable: true,
      get: () => this._data.period,
      set: (value: Period) => {
        if (!value) return;
        this._data.period = value.toJSON();
      },
    });

    Object.defineProperty(this, "_period", {
      enumerable: true,
      get: () => this._data._period,
      set: (value: Period) => {
        if (!value) return;
        this._data._period = value;
      },
    });

    Object.defineProperty(this, "assigner", {
      enumerable: true,
      get: () => this._data.assigner,
      set: (value: Reference) => {
        if (!value) return;
        this._data.assigner = value.toJSON();
      },
    });

    Object.defineProperty(this, "_assigner", {
      enumerable: true,
      get: () => this._data._assigner,
      set: (value: Reference) => {
        this._data._assigner = value;
      },
    });

    Object.defineProperty(this, "extension", {
      get: () => this._data.extension,
      set: (value: Array<Extension>) => {
        if (!value) return;
        this._data.extension = value;
      },
    });

    Object.assign(this, options);
  }

  getResourceType(): string {
    return "Identifier";
  }

  toJSON(): object {
    return {
      id: this._data.id,
      use: this._data.use,
      _use: this._data._use,
      type: this._data.type,
      _type: this._data._type,
      system: this._data.system,
      _system: this._data._system,
      value: this._data.value,
      period: this._data.period,
      _period: this._data._period,
      assigner: this._data.assigner,
      _assigner: this._data._assigner,
      extension:
        this._data.extension && this._data.extension.map((e) => e.toJSON()),
    };
  }
}

export { Identifier };
