import { code } from "../types/code";
import { dateTime } from "../types/dateTime";
import { Extension } from "./extension";

interface ValueSetExpansionParameter {
  id: string;
  name: string;
  valueString: string;
  valueBoolean: boolean;
  valueInteger: number;
  valueDecimal: number;
  valueUri: URL;
  valueCode: code;
  valueDateTime: dateTime;
  extension: Array<Extension>;
}

class ValueSetExpansionParameter {
  private _data: {
    id: string;
    name: String;
    vlaueString: string;
    valueBoolean: boolean;
    valueInteger: number;
    valueDecimal: number;
    valueUri: URL;
    valueCode: code;
    valueDateTime: dateTime;
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

    Object.defineProperty(this, "name", {
      enumerable: true,
      get: () => this._data.name,
      set: (value: string) => {
        if (!value) return;
        this._data.name = value;
      },
    });

    Object.defineProperty(this, "valueString", {
      enumerable: true,
      get: () => this._data.vlaueString,
      set: (value: string) => {
        if (!value) return;
        this._data.vlaueString = value;
      },
    });

    Object.defineProperty(this, "valueBoolean", {
      enumerable: true,
      get: () => this._data.valueBoolean,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.valueBoolean = value;
      },
    });

    Object.defineProperty(this, "valueInteger", {
      enumerable: true,
      get: () => this._data.valueInteger,
      set: (value: number) => {
        if (!value) return;
        this._data.valueInteger = value;
      },
    });

    Object.defineProperty(this, "valueDecimal", {
      enumerable: true,
      get: () => this._data.valueDecimal,
      set: (value: number) => {
        if (!value) return;
        this._data.valueDecimal = value;
      },
    });

    Object.defineProperty(this, "valueUri", {
      enumerable: true,
      get: () => this._data.valueUri,
      set: (value: URL) => {
        if (!value) return;
        this._data.valueUri = value;
      },
    });

    Object.defineProperty(this, "valueCode", {
      enumerable: true,
      get: () => this._data.valueCode,
      set: (value: code) => {
        if (!value) return;
        this._data.valueCode = value;
      },
    });

    Object.defineProperty(this, "valueDataTime", {
      enumerable: true,
      get: () => this._data.valueCode,
      set: (value: code) => {
        if (!value) true;
        this._data.valueCode = value;
      },
    });

    Object.defineProperty(this, "valueDatetime", {
      enumerable: true,
      get: () => this._data.valueDateTime,
      set: (value: dateTime) => {
        if (!value) return;
        this._data.valueDateTime = value;
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
    return "ValueSet.expansion.parameter";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      name: this.name,
      valueString: this.valueString,
      valueBoolean: this.valueBoolean,
      valueInteger: this.valueInteger,
      valueDecimal: this.valueDecimal,
      valueUri: this.valueUri,
      valueCode: this.valueCode && this.valueCode.getValue(),
      valueDateTime: this.valueDateTime && this.valueDateTime.getValue(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ValueSetExpansionParameter };
