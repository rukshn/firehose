import { code } from "../types/code";
import { dateTime } from "../types/dateTime";
import { Coding } from "./coding";
import { Extension } from "./extension";

interface CodeSystemConceptProperty {
  id: string;
  code: code;
  valueCode: code;
  valueCoding: Coding;
  valueString: string;
  valueInteger: number;
  valueBoolean: boolean;
  valueDateTime: dateTime;
  valueDecimal: number;
  extension: Array<Extension>;
}

class CodeSystemConceptProperty {
  private _data: {
    id: string;
    code: code;
    valueCode: code;
    valueCoding: Coding;
    valueString: string;
    valueInteger: number;
    valueBoolean: boolean;
    valueDateTime: dateTime;
    valueDecimal: number;
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

    Object.defineProperty(this, "code", {
      enumerable: true,
      get: () => this._data.code,
      set: (value: code) => {
        if (!value) return;
        this._data.code = value;
      },
    });

    Object.defineProperty(this, "valueCoding", {
      enumerable: true,
      get: () => this._data.valueCoding,
      set: (value: Coding) => {
        if (!value) return;
        this._data.valueCoding = value;
      },
    });

    Object.defineProperty(this, "valueString", {
      enumerable: true,
      get: () => this._data.valueString,
      set: (value: string) => {
        if (!value) return;
        this._data.valueString = value;
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

    Object.defineProperty(this, "valueBoolean", {
      enumerable: true,
      get: () => this._data.valueBoolean,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.valueBoolean = value;
      },
    });

    Object.defineProperty(this, "valueDateTime", {
      enumerable: true,
      get: () => this._data.valueDateTime,
      set: (value: dateTime) => {
        if (!value) return;
        this._data.valueDateTime = value;
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
    return "CodeSystem.concept.property";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      code: this.code && this.code.getValue(),
      valueCode: this.valueCode && this.valueCode.getValue(),
      valueCoding: this.valueCoding && this.valueCoding.toJSON(),
      valueString: this.valueString,
      valueInteger: this.valueInteger,
      valueBoolean: this.valueBoolean,
      valueDateTime: this.valueDateTime,
      valueDecimal: this.valueDecimal,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { CodeSystemConceptProperty };
