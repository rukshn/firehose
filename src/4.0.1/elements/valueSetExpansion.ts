import { dateTime } from "../types/dateTime";
import { Extension } from "./extension";
import { ValueSetExpansionContains } from "./valueSetExpansionContains";
import { ValueSetExpansionParameter } from "./valueSetExpansionParameter";

interface ValueSetExpansion {
  id: string;
  identifier: URL;
  timestamp: dateTime;
  total: number;
  offset: number;
  parameter: Array<ValueSetExpansionParameter>;
  contains: Array<ValueSetExpansionContains>;
  extension: Array<Extension>;
}

class ValueSetExpansion {
  private _data: {
    id: string;
    identifier: URL;
    timestamp: dateTime;
    total: number;
    offset: number;
    parameter: Array<ValueSetExpansionParameter>;
    contains: Array<ValueSetExpansionContains>;
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

    Object.defineProperty(this, "identifier", {
      enumerable: true,
      get: () => this._data.identifier,
      set: (value: URL) => {
        if (!value) return;
        this._data.identifier = value;
      },
    });

    Object.defineProperty(this, "timestamp", {
      enumerable: true,
      get: () => this._data.timestamp,
      set: (value: dateTime) => {
        if (!value) return;
        this._data.timestamp = value;
      },
    });

    Object.defineProperty(this, "total", {
      enumerable: true,
      get: () => this._data.total,
      set: (value: number) => {
        if (!value) return;
        this._data.total = value;
      },
    });

    Object.defineProperty(this, "offet", {
      enumerable: true,
      get: () => this._data.offset,
      set: (value: number) => {
        if (!value) return;
        this._data.offset = value;
      },
    });

    Object.defineProperty(this, "parameter", {
      enumerable: true,
      get: () => this._data.parameter,
      set: (value: Array<ValueSetExpansionParameter>) => {
        if (!value) return;
        this._data.parameter = value;
      },
    });

    Object.defineProperty(this, "contains", {
      enumerable: true,
      get: () => this._data.contains,
      set: (value: Array<ValueSetExpansionContains>) => {
        if (!value) return;
        this._data.contains = value;
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
    return "ValueSet.expansion";
  }

  toJSON(): object {
    return {
      id: this.id,
      identifier: this.identifier && this.identifier.href,
      timestamp: this.timestamp && this.timestamp.getValue(),
      total: this.total,
      offset: this.offset,
      parameter: this.parameter && this.parameter.map((p) => p.toJSON()),
      contains: this.contains && this.contains.map((c) => c.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ValueSetExpansion };
