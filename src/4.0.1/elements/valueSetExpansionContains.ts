import { code } from "../types/code";
import { Extension } from "./extension";
import { ValueSetComposeIncludeConceptDesignation } from "./valueSetComposeIncludeConceptDesignation";

interface ValueSetExpansionContains {
  id: string;
  system: URL;
  abstract: boolean;
  inactive: boolean;
  version: string;
  code: code;
  display: string;
  designation: Array<ValueSetComposeIncludeConceptDesignation>;
  contains: Array<ValueSetExpansionContains>;
  extension: Array<Extension>;
}

class ValueSetExpansionContains {
  private _data: {
    id: string;
    system: URL;
    abstract: boolean;
    inactive: boolean;
    version: string;
    code: code;
    display: string;
    designation: Array<ValueSetComposeIncludeConceptDesignation>;
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

    Object.defineProperty(this, "system", {
      enumerable: true,
      get: () => this._data.system,
      set: (value: URL) => {
        if (!value) return;
        this._data.system = value;
      },
    });

    Object.defineProperty(this, "abstract", {
      enumerable: true,
      get: () => this._data.abstract,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.abstract = value;
      },
    });

    Object.defineProperty(this, "inactive", {
      enumerable: true,
      get: () => this._data.inactive,
      set: (value: boolean) => {
        if (!value) return;
        this._data.inactive = value;
      },
    });

    Object.defineProperty(this, "version", {
      enumerable: true,
      get: () => this._data.version,
      set: (value: string) => {
        if (!value) return;
        this._data.version = value;
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
    return "ValueSet.expansion.contains";
  }

  toJSON(): object {
    return {
      id: this.id,
      system: this.system.href,
      abstrct: this.abstract,
      inactive: this.inactive,
      verions: this.version,
      code: this.code && this.code.getValue(),
      display: this.display,
      designation: this.designation && this.designation.map((d) => d.toJSON()),
      contains: this.contains && this.contains.map((c) => c.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ValueSetExpansionContains };
