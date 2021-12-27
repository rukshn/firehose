import { code } from "../types/code";
import { Extension } from "./extension";
import { ValueSetComposeIncludeConceptDesignation } from "./valueSetComposeIncludeConceptDesignation";

interface ValueSetComposeIncludeConcept {
  id: string;
  code: code;
  display: string;
  designation: Array<ValueSetComposeIncludeConceptDesignation>;
  extension: Array<Extension>;
}

class ValueSetComposeIncludeConcept {
  private _data: {
    id: string;
    code: code;
    display: string;
    designation: Array<ValueSetComposeIncludeConceptDesignation>;
    extension: Array<Extension>;
  };

  constructor(options) {
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

    Object.defineProperty(this, "display", {
      enumerable: true,
      get: () => this._data.display,
      set: (value: string) => {
        if (!value) return;
        this._data.display = value;
      },
    });

    Object.defineProperty(this, "designation", {
      enumerable: true,
      get: () => this._data.designation,
      set: (value: Array<ValueSetComposeIncludeConceptDesignation>) => {
        if (!value) return;
        this._data.designation = value;
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

  getResourceType() {
    return "ValueSet.compose.include.concept";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      code: this.code && this.code.getValue(),
      display: this.display,
      designation: this.designation && this.designation.map((d) => d.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ValueSetComposeIncludeConcept };
