import { code } from "../types/code";
import { Extension } from "./extension";
import { Period } from "./period";

interface EncounterStatusHistory {
  id: string;
  status: code;
  period: Period;
  extension: Array<Extension>;
}

class EncounterStatusHistory {
  private _data: {
    id: string;
    status: code;
    period: Period;
    extension: Array<Extension>;
  };
  constructor(options?) {
    Object.defineProperty(this, "_data", { value: { ...options } });

    Object.defineProperty(this, "id", {
      enumerable: true,
      get: () => this._data.id,
      set: (value: string) => {
        if (!value) this;
        this._data.id = value;
      },
    });

    Object.defineProperty(this._data, "_status", {
      enumerable: true,
      get: () => this._data.status,
      set: (value: code) => {
        if (!value) return;
        this._data.status = value;
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
  }

  getResourceType(): string {
    return "Encounter.statusHisory";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id && this.id,
      status: this.status && this.status.toJSON(),
      period: this.period && this.period.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { EncounterStatusHistory };
