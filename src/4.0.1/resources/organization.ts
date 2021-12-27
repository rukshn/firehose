import { Address } from "../elements/address";
import { CodeableConcept } from "../elements/codeableConcept";
import { ContactPoint } from "../elements/contactPoint";
import { Extension } from "../elements/extension";
import { Identifier } from "../elements/identifier";
import { Meta } from "../elements/meta";
import { OrganizationContact } from "../elements/onganizationContact";
import { Reference } from "../elements/reference";

interface Organization {
  id: string;
  meta: Meta;
  identifier: Array<Identifier>;
  active: boolean;
  type: Array<CodeableConcept>;
  name: string;
  alias: Array<string>;
  telecom: Array<ContactPoint>;
  address: Array<Address>;
  partOf: Reference;
  contact: Array<OrganizationContact>;
  endpoint: Array<Reference>;
  extension: Array<Extension>;
}

class Organization {
  private _data: {
    id: string;
    meta: Meta;
    identifier: Array<Identifier>;
    active: boolean;
    type: Array<CodeableConcept>;
    name: string;
    alias: Array<String>;
    telecom: Array<ContactPoint>;
    address: Array<Address>;
    partOf: Reference;
    contact: Array<OrganizationContact>;
    endpoint: Array<Reference>;
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

    Object.defineProperty(this, "identifier", {
      enumerable: true,
      get: () => this._data.identifier,
      set: (value: Array<Identifier>) => {
        if (!value) return;
        this._data.identifier;
      },
    });

    Object.defineProperty(this, "active", {
      enumerable: true,
      get: () => this._data.active,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.active;
      },
    });

    Object.defineProperty(this, "type", {
      enumerable: true,
      get: () => this._data.type,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.type = value;
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

    Object.defineProperty(this, "alias", {
      enumerable: true,
      get: () => this._data.alias,
      set: (value: Array<string>) => {
        if (!value) return;
        this._data.alias = value;
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
      set: (value: Array<Address>) => {
        if (!value) return;
        this._data.address = value;
      },
    });

    Object.defineProperty(this, "partOf", {
      enumerable: true,
      get: () => this._data.partOf,
      set: (value: Reference) => {
        this._data.partOf = value;
      },
    });

    Object.defineProperty(this, "contact", {
      enumerable: true,
      get: () => this._data.contact,
      set: (value: Array<OrganizationContact>) => {
        if (!value) return;
        this._data.contact = value;
      },
    });

    Object.defineProperty(this, "endpoint", {
      enumerable: true,
      get: () => this._data.endpoint,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.endpoint = value;
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
    return "Organization";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      identifier: this.identifier && this.identifier.map((i) => i.toJSON()),
      active: this.active,
      type: this.type && this.type.map((t) => t.toJSON()),
      name: this.name,
      alias: this.alias,
      telecom: this.telecom && this.telecom.map((t) => t.toJSON()),
      address: this.address && this.address.map((a) => a.toJSON()),
      partOf: this.partOf && this.partOf.toJSON(),
      contact: this.contact && this.contact.map((c) => c.toJSON()),
      endpoint: this.endpoint && this.endpoint.map((e) => e.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Organization };
