/**
 * This class represents the operation outcome FHIR resource 4.0.1
 * http://hl7.org/fhir/R4/operationoutcome.html
 */

import { Extension } from "../elements/extension";
import { Meta } from "../elements/meta";
import { OperationOutcomeIssue } from "../elements/operationOutcomeIssue";

interface OperationOutcome {
  id: string;
  meta: Meta;
  issue: Array<OperationOutcomeIssue>;
  extension: Array<Extension>;
}

class OperationOutcome {
  private _data: {
    id: string;
    meta: Meta;
    issue: Array<OperationOutcomeIssue>;
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

    Object.defineProperty(this, "meta", {
      enumerable: true,
      get: () => this._data.meta,
      set: (value: Meta) => {
        if (!value) return;
        this._data.meta = value;
      },
    });

    Object.defineProperty(this, "issue", {
      enumerable: true,
      get: () => this._data.issue,
      set: (value: Array<OperationOutcomeIssue>) => {
        if (!value) return;
        this._data.issue = value;
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
    return "OperationOutcome";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      issue: this.issue && this.issue.map((i) => i.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { OperationOutcome };
