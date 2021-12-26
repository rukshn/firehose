import { Address } from "./address";
import { CodeableConcept } from "./codeableConcept";
import { ContactPoint } from "./contactPoint";
import { Extension } from "./extension";

interface OrganizationContact {
  id: string;
  pourpose: CodeableConcept;
  telecom: Array<ContactPoint>;
  address: Address;
  extension: Array<Extension>;
}

class OrganizationContact {
  private _data: {
    id: string;
    pourpose: CodeableConcept;
    telecom: Array<ContactPoint>;
    address: Address;
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

    Object.defineProperty(this, "pourpose", {
      enumerable: true,
      get: () => this._data.pourpose,
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._data.pourpose = value;
      },
    });

    Object.defineProperty(this, "telecom", {
      enumerable: true,
      get: () => this._data.telecom,
      set: (value: Array<ContactPoint>) => {
        if (!value) return;
        this._data.telecom = value;
      },
    });

    Object.defineProperty(this, "address", {
      enumerable: true,
      get: () => this._data.address,
      set: (value: Address) => {
        if (!value) return;
        this._data.address = value;
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
    return "OrganizationContact";
  }

  toJSON(): object {
    return {
      id: this.id,
      pourpose: this.pourpose && this.pourpose.toJSON(),
      telecom: this.telecom && this.telecom.map((t) => t.toJSON()),
      address: this.address && this.address.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { OrganizationContact };
