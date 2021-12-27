/*****
 *  This class represents the ValueSet resource of FHIR 4.0.1
 *  http://hl7.org/fhir/R4/valueset.html
 */

// Import external classes
import { CodeableConcept } from "../elements/codeableConcept";
import { ContactDetail } from "../elements/contactDetail";
import { Extension } from "../elements/extension";
import { Identifier } from "../elements/identifier";
import { Meta } from "../elements/meta";
import { UseageContext } from "../elements/useageContext";
import { ValueSetCompose } from "../elements/valueSetCompose";
import { code } from "../types/code";
import { dateTime } from "../types/dateTime";

//define interface
interface ValueSet {
  id: string;
  meta: Meta;
  url: URL;
  identifier: Array<Identifier>;
  version: string;
  name: string;
  title: string;
  status: Array<code>;
  experimental: boolean;
  date: dateTime;
  publisher: string;
  contact: Array<ContactDetail>;
  description: string;
  useContext: Array<UseageContext>;
  jurisdiction: Array<CodeableConcept>;
  immutable: boolean;
  purpose: string;
  markdown: string;
  copyright: string;
  compose: ValueSetCompose;
  extension: Array<Extension>;
}

// define ValueSet class
class ValueSet {
  //internal variable to match interface
  private _data: {
    id: string;
    meta: Meta;
    url: URL;
    identifier: Array<Identifier>;
    version: string;
    name: string;
    title: string;
    status: Array<code>;
    experimental: boolean;
    date: dateTime;
    publisher: string;
    contact: Array<ContactDetail>;
    description: string;
    useContext: Array<UseageContext>;
    jurisdiction: Array<CodeableConcept>;
    immutable: boolean;
    purpose: string;
    markdown: string;
    copyright: string;
    compose: ValueSetCompose;
    extension: Array<Extension>;
  };

  //contructor
  constructor(options?) {
    //set this to blank and set any parameters passed
    Object.defineProperty(this, "_data", { value: { ...options } });

    // define getters and setters to each elelemt in interface
    Object.defineProperty(this, "id", {
      enumerable: true,
      get: () => this._data.id,
      set: (value: string) => {
        // this if calsue is needed to prevent value being set to undefined
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

    Object.defineProperty(this, "url", {
      enumerable: true,
      get: () => this._data.url,
      set: (value: URL) => {
        if (!value) return;
        this._data.url = value;
      },
    });

    Object.defineProperty(this, "identifier", {
      enumerable: true,
      get: () => this._data.identifier,
      set: (value: Array<Identifier>) => {
        if (!value) return;
        this._data.identifier = value;
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

    Object.defineProperty(this, "name", {
      enumerable: true,
      get: () => this._data.name,
      set: (value: string) => {
        if (!value) return;
        this._data.name = value;
      },
    });

    Object.defineProperty(this, "title", {
      enumerable: true,
      get: () => this._data.title,
      set: (value: string) => {
        if (!value) return;
        this._data.title = value;
      },
    });

    Object.defineProperty(this, "status", {
      enumerable: true,
      get: () => this._data.status,
      set: (value: Array<code>) => {
        if (!value) return;
        this._data.status = value;
      },
    });

    Object.defineProperty(this, "experimental", {
      enumerable: true,
      get: () => this._data.experimental,
      set: (value: boolean) => {
        // this is different from other setters because (!value) == false will also return blank where the expected output is false
        if (value === undefined || value === null) return;
        this._data.experimental = value;
      },
    });

    Object.defineProperty(this, "date", {
      enumerable: true,
      get: () => this._data.date,
      set: (value: dateTime) => {
        if (!value) return;
        this._data.date = value;
      },
    });

    Object.defineProperty(this, "publisher", {
      enumerable: true,
      get: () => this._data.publisher,
      set: (value: string) => {
        if (!value) return;
        this._data.publisher = value;
      },
    });

    Object.defineProperty(this, "contact", {
      enumerable: true,
      get: () => this._data.contact,
      set: (value: Array<ContactDetail>) => {
        if (!value) return;
        this._data.contact = value;
      },
    });

    Object.defineProperty(this, "description", {
      enumerable: true,
      get: () => this._data.description,
      set: (value: string) => {
        if (!value) return;
        this._data.description = value;
      },
    });

    Object.defineProperty(this, "useContext", {
      enumerable: true,
      get: () => this._data.useContext,
      set: (value: Array<UseageContext>) => {
        if (!value) return;
        this._data.useContext = value;
      },
    });

    Object.defineProperty(this, "jurisdiction", {
      enumerable: true,
      get: () => this._data.jurisdiction,
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._data.jurisdiction = value;
      },
    });

    Object.defineProperty(this, "immutable", {
      enumerable: true,
      get: () => this._data.immutable,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.immutable = value;
      },
    });

    Object.defineProperty(this, "purpose", {
      enumerable: true,
      get: () => this._data.purpose,
      set: (value: string) => {
        if (!value) return;
        this._data.purpose = value;
      },
    });

    Object.defineProperty(this, "markdown", {
      enumerable: true,
      get: () => this._data.markdown,
      set: (value: string) => {
        if (!value) return;
        this._data.markdown = value;
      },
    });

    Object.defineProperty(this, "copyright", {
      enumerable: true,
      get: () => this._data.copyright,
      set: (value: string) => {
        if (!value) return;
        this._data.copyright = value;
      },
    });

    Object.defineProperty(this, "compose", {
      enumerable: true,
      get: () => this._data.compose,
      set: (value: ValueSetCompose) => {
        if (!value) return;
        this._data.compose = value;
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

  // get resouse type
  getResourceType(): string {
    return "ValueSet";
  }

  // get resource as a fhir json
  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      url: this.url && this.url.href,
      identifier: this.identifier && this.identifier.map((i) => i.toJSON()),
      version: this.version,
      name: this.name,
      title: this.title,
      status: this.status && this.status.map((s) => s.getValue()),
      experimental: this.experimental,
      date: this.date && this.date.getValue(),
      publisher: this.publisher,
      contact: this.contact && this.contact.map((c) => c.toJSON()),
      description: this.description,
      useContext: this.useContext && this.useContext.map((u) => u.toJSON()),
      jurisdiction:
        this.jurisdiction && this.jurisdiction.map((j) => j.toJSON()),
      immutable: this.immutable,
      purpose: this.purpose,
      markdown: this.markdown,
      copyright: this.copyright,
      compose: this.compose && this.compose.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

// export class
export { ValueSet };
