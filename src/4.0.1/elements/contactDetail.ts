import { ContactPoint } from "./contactPoint";
import { Extension } from "./extension";

interface ContactDetail {
  id: string;
  name: string;
  telecom: Array<ContactPoint>;
  extension: Array<Extension>;
}

class ContactDetail {
  private _data: {
    id: string;
    name: string;
    telecom: Array<ContactPoint>;
    extension: Array<Extension>;
  };
  constructor(options?) {
    Object.defineProperty(this, "_data", { value: {} });

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

    Object.defineProperty(this, "telecom", {
      enumerable: true,
      get: () => this._data.telecom,
      set: (value: Array<ContactPoint>) => {
        if (!value) return;
        this._data.telecom = value;
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
    return "contactDetail";
  }

  toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      telecom: this.telecom && this.telecom.map((t) => t.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ContactDetail };
