import { CodeableConcept } from "../elements/codeableConcept";
import { CodeSystemConcept } from "../elements/codeSystemConcept";
import { CodeSystemFilter } from "../elements/codesystemFilter";
import { CodeSystemProperty } from "../elements/codeSystemProperty";
import { ContactDetail } from "../elements/contactDetail";
import { Extension } from "../elements/extension";
import { Identifier } from "../elements/identifier";
import { Meta } from "../elements/meta";
import { Narrative } from "../elements/narrative";
import { UseageContext } from "../elements/useageContext";
import { code } from "../types/code";
import { dateTime } from "../types/dateTime";
import { unsignedInt } from "../types/unsignedInt";
import { ValueSet } from "./valueSet";

interface CodeSystem {
  id: string;
  text: Narrative;
  meta: Meta;
  url: string;
  identifier: Array<Identifier>;
  version: string;
  name: string;
  title: string;
  status: code;
  experimental: boolean;
  date: dateTime;
  publisher: string;
  contact: Array<ContactDetail>;
  description: string;
  useContext: Array<UseageContext>;
  jurisdiction: Array<CodeableConcept>;
  purpose: string;
  copyright: string;
  caseSensitive: boolean;
  valueSet: ValueSet;
  hierarchyMeaning: code;
  compositional: boolean;
  versionNeeded: boolean;
  content: code;
  supplements: Array<CodeSystem>;
  count: unsignedInt;
  filter: Array<CodeSystemFilter>;
  property: Array<CodeSystemProperty>;
  concept: Array<CodeSystemConcept>;
  extension: Array<Extension>;
}

class CodeSystem {
  private _data: {
    id: string;
    meta: Meta;
    text: Narrative;
    url: string;
    identifier: Array<Identifier>;
    version: string;
    name: string;
    title: string;
    status: code;
    experimental: boolean;
    date: dateTime;
    publisher: string;
    contact: Array<ContactDetail>;
    description: string;
    useContext: Array<UseageContext>;
    jurisdiction: Array<CodeableConcept>;
    purpose: string;
    copyright: string;
    caseSensitive: boolean;
    valueSet: ValueSet;
    hierarchyMeaning: code;
    compositional: boolean;
    versionNeeded: boolean;
    content: code;
    supplements: Array<CodeSystem>;
    count: unsignedInt;
    filter: Array<CodeSystemFilter>;
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

    Object.defineProperty(this, "meta", {
      enumerable: true,
      get: () => this._data.meta,
      set: (value: Meta) => {
        if (!value) return;
        this._data.meta = value;
      },
    });

    Object.defineProperty(this, "text", {
      enumerable: true,
      get: () => this._data.text,
      set: (value: Narrative) => {
        if (!value) return;
        this._data.text = value;
      },
    });

    Object.defineProperty(this, "url", {
      enumerable: true,
      get: () => true,
      set: (value: string) => {
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
      set: (value: code) => {
        if (!value) return;
        this._data.status = value;
      },
    });

    Object.defineProperty(this, "experimental", {
      enumerable: true,
      get: () => this._data.experimental,
      set: (value: boolean) => {
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

    Object.defineProperty(this, "purpose", {
      enumerable: true,
      get: () => this._data.purpose,
      set: (value: string) => {
        if (!value) return;
        this._data.purpose = value;
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

    Object.defineProperty(this, "caseSensitive", {
      enumerable: true,
      get: () => this._data.caseSensitive,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.caseSensitive = value;
      },
    });

    Object.defineProperty(this, "valueSet", {
      enumerable: true,
      get: () => this._data.valueSet,
      set: (value: ValueSet) => {
        if (!value) return;
        this._data.valueSet = value;
      },
    });

    Object.defineProperty(this, "hierarchyMeaning", {
      enumerable: true,
      get: () => this._data.hierarchyMeaning,
      set: (value: code) => {
        if (!value) return;
        this._data.hierarchyMeaning = value;
      },
    });

    Object.defineProperty(this, "compositional", {
      enumerable: true,
      get: () => this._data.compositional,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.compositional = value;
      },
    });

    Object.defineProperty(this, "versionNeeded", {
      enumerable: true,
      get: () => this._data.versionNeeded,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.versionNeeded = value;
      },
    });

    Object.defineProperty(this, "content", {
      enumerable: true,
      get: () => this._data.content,
      set: (value: code) => {
        if (!value) return;
        this._data.content = value;
      },
    });

    Object.defineProperty(this, "supplements", {
      enumerable: true,
      get: () => this._data.supplements,
      set: (value: Array<CodeSystem>) => {
        if (!value) return;
        this._data.supplements = value;
      },
    });

    Object.defineProperty(this, "count", {
      enumerable: true,
      get: () => this._data.count,
      set: (value: unsignedInt) => {
        if (!value) return;
        this._data.count = value;
      },
    });

    Object.defineProperty(this, "filter", {
      enumerable: true,
      get: () => this._data.filter,
      set: (value: Array<CodeSystemFilter>) => {
        if (!value) return;
        this._data.filter = value;
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
    return "CodeSystem";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      url: this.url,
      identifier: this.identifier && this.identifier.map((i) => i.toJSON()),
      version: this.version,
      name: this.name,
      title: this.title,
      status: this.status && this.status.getValue(),
      experimental: this.experimental,
      date: this.date && this.date.getValue(),
      publisher: this.publisher,
      contact: this.contact && this.concept.map((c) => c.toJSON()),
      description: this.description,
      useContext: this.useContext && this.useContext.map((u) => u.toJSON()),
      jurisdiction:
        this.jurisdiction && this.jurisdiction.map((j) => j.toJSON()),
      purpose: this.purpose,
      copyright: this.copyright,
      caseSensitive: this.caseSensitive,
      valueSet: this.valueSet && this.valueSet.toJSON(),
      hierarchyMeaning:
        this.hierarchyMeaning && this.hierarchyMeaning.getValue(),
      compositional: this.compositional,
      versionNeeded: this.versionNeeded,
      content: this.contact && this.content.getValue(),
      supplements: this.supplements && this.supplements.map((s) => s.toJSON()),
      count: this.count && this.count.getValue(),
      filter: this.filter && this.filter.map((f) => f.toJSON()),
      property: this.property && this.property.map((p) => p.toJSON()),
      concept: this.concept && this.concept.map((c) => c.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { CodeSystem };
