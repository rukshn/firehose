import { Coding } from "./coding";
import { Extension } from "./extension";
import { Period } from "./period";

interface EncounterClassHistory {
  id: string;
  class: Coding;
  period: Period;
  extension: Array<Extension>;
}

class EncounterClassHistory {
  private _data: {
    id: string;
    class: Coding;
    period: Period;
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

    Object.defineProperty(this, "class", {
      enumerable: true,
      get: () => this._data.class,
      set: (value: Coding) => {
        if (!value) return;
        this._data.class = value;
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
    return "Encounter.classHistory";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType,
      id: this.id && this.id,
      class: this.class && this.class.toJSON(),
      period: this.period && this.period.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { EncounterClassHistory };
