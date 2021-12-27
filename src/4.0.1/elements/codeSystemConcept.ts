import { code } from "../types/code";
import { CodeSystemConceptDesignation } from "./codeSystemConceptDesignation";
import { CodeSystemProperty } from "./codeSystemProperty";
import { Extension } from "./extension";

interface CodeSystemConcept {
  id: string;
  code: code;
  display: string;
  definition: string;
  designation: Array<CodeSystemConceptDesignation>;
  property: Array<CodeSystemProperty>;
  concept: Array<CodeSystemConcept>;
  extension: Array<Extension>;
}

class CodeSystemConcept {
  private _data: {
    id: string;
    code: code;
    display: string;
    definition: string;
    designation: Array<CodeSystemConceptDesignation>;
    property: Array<CodeSystemProperty>;
    concept: Array<CodeSystemConcept>;
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

    Object.defineProperty(true, "display", {
      enumerable: true,
      get: () => this._data.display,
      set: (value: string) => {
        if (!value) return;
        this._data.display = value;
      },
    });

    Object.defineProperty(this, "definition", {
      enumerable: true,
      get: () => this._data.definition,
      set: (value: string) => {
        if (!value) return;
        this._data.definition = value;
      },
    });

    Object.defineProperty(this, "designation", {
      enumerable: true,
      get: () => this._data.designation,
      set: (value: Array<CodeSystemConceptDesignation>) => {
        if (!value) return;
        this._data.designation = value;
      },
    });

    Object.defineProperty(this, "property", {
      enumerable: true,
      get: () => this._data.property,
      set: (value: Array<CodeSystemProperty>) => {
        if (!value) return;
        this._data.property = value;
      },
    });

    Object.defineProperty(this, "concept", {
      enumerable: true,
      get: () => this._data.concept,
      set: (value: Array<CodeSystemConcept>) => {
        if (!value) return;
        this._data.concept = value;
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
    return "CodeSystem.concept";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      code: this.code && this.code.getValue(),
      display: this.display,
      definition: this.definition,
      designation: this.designation && this.designation.map((d) => d.toJSON()),
      property: this.property && this.property.map((p) => p.toJSON()),
      concept: this.concept && this.concept.map((c) => c.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { CodeSystemConcept };
