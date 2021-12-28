import { code } from "../types/code";
import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";

interface OperationOutcomeIssue {
  id: string;
  severity: code;
  code: code;
  details: CodeableConcept;
  //location is deprecated at FHIR 4.0.1, uncomment to enable it
  //location: Array<string>;
  expression: Array<string>;
  extension: Array<Extension>;
}

class OperationOutcomeIssue {
  private _data: {
    id: string;
    severity: code;
    code: code;
    details: CodeableConcept;
    //location is deprecated at FHIR 4.0.1, uncomment to enable it
    //location: Array<string>;
    expression: Array<string>;
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

    Object.defineProperty(this, "severity", {
      enumerable: true,
      get: () => this._data.severity,
      set: (value: code) => {
        if (!value) return;
        this._data.severity = value;
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

    Object.defineProperty(this, "details", {
      enumerable: true,
      get: () => this._data.details,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.details = value;
      },
    });

    //location is deprecated in FHIR 4.0.1 uncomment to enable it
    // Object.defineProperty(this, "location", {
    //   enumerable: true,
    //   get: () => this._data.location,
    //   set: (value: Array<string>) => {
    //     if (!value) return;
    //     this._data.location = value;
    //   },
    // });

    Object.defineProperty(this, "expression", {
      enumerable: true,
      get: () => this._data.expression,
      set: (value: Array<string>) => {
        if (!value) return;
        this._data.expression = value;
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
    return "OperationOutcome.issue";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      severity: this.severity && this.severity.getValue(),
      code: this.code && this.code.getValue(),
      details: this.details && this.details.toJSON(),
      expression: this.expression,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { OperationOutcomeIssue };
