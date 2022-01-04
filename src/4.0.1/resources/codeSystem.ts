/**
 * This class represents the CodeSystem resouce of FHIR.
 * All the manipulation of a CodeSystem resouce will be handled by this class
 */
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

//Define the interface
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
  valueSet: string;
  hierarchyMeaning: code;
  compositional: boolean;
  versionNeeded: boolean;
  content: code;
  supplements: string;
  count: number;
  filter: Array<CodeSystemFilter>;
  property: Array<CodeSystemProperty>;
  concept: Array<CodeSystemConcept>;
  extension: Array<Extension>;
}

// Initiate class
class CodeSystem {
  // Define the map which stores key value pairs
  private _map: Map<string, any>;
  /// Define the keys and their respected value types
  // These are taken from the FHIR resource structure.
  // They will help later to remove unwanted values and values in invalid format
  private _keys: object = {
    id: "string",
    url: "string",
    identifier: "object",
    version: "string",
    name: "string",
    title: "string",
    status: "string",
    experimental: "boolean",
    date: "string",
    publisher: "string",
    contact: "object",
    description: "string",
    useContext: "object",
    jurisdiction: "object",
    purpose: "string",
    copyright: "string",
    caseSensitive: "string",
    valueSet: "string",
    hierarchyMeaning: "string",
    compositional: "boolean",
    versionNeeded: "boolean",
    content: "string",
    supplements: "string",
    filter: "object",
    property: "object",
    extension: "object",
    modiferExtension: "object",
  };

  /**
   *
   * @param options {object} - This can take a FHIR CodeSystem resource as a JSON format
   * The value passed will be used by the constructore to populate child elements
   */
  constructor(options?) {
    // Set this to _map
    Object.defineProperty(this, "_map", { value: {}, writable: true });

    // If parameter is passed then set that to the map or create a new empty map
    if (options) {
      this._map = new Map(Object.entries(options));
    } else {
      this._map = new Map();
    }

    // Concert the keys into a map
    const keyGuard = new Map(Object.entries(this._keys));

    // Match the defined strcutre at the _key and delete any unknown keys or keys which have values in incorrect format
    this._map.forEach((value: any, key: string) => {
      if (typeof value !== keyGuard.get(key)) {
        this._map.delete(key);
      }
    });

    // Define getters and setters
    Object.defineProperty(this, "id", {
      enumerable: true,
      get: () => this._map.get("id"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("id", value);
      },
    });

    Object.defineProperty(this, "text", {
      enumerable: true,
      get: () => this._map.get("text"),
      set: (value: Narrative) => {
        if (!value) return;
        this._map.set("text", value.toJSON());
        this._map.set("_text", value);
      },
    });

    Object.defineProperty(this, "_text", {
      enumerable: true,
      get: () => this._map.get("_text"),
    });

    Object.defineProperty(this, "meta", {
      enumerable: true,
      get: () => this._map.get("meta"),
      set: (value: Meta) => {
        if (!value) return;
        this._map.set("meta", value.toJSON());
        this._map.set("_meta", value);
      },
    });

    Object.defineProperty(this, "_meta", {
      enumerable: true,
      get: () => this._map.get("_meta"),
    });

    Object.defineProperty(this, "url", {
      enumerable: true,
      get: () => true,
      set: (value: string) => {
        if (!value) return;
        this._map.set("url", value);
      },
    });

    Object.defineProperty(this, "identifier", {
      enumerable: true,
      get: () => this._map.get("identifier"),
      set: (value: Array<Identifier>) => {
        if (!value) return;
        this._map.set(
          "identifier",
          value.map((i) => i.toJSON())
        );
        this._map.set("_identifier", value);
      },
    });

    Object.defineProperty(this, "_identifier", {
      enumerable: true,
      get: () => this._map.get("_identifier"),
    });

    // Loop thourgh all the array elements in the resouce (cardinality one to many or zero to many)
    // and map them and populate child elements
    if (this._map.has("identifier")) {
      // If value is an object and not an array, convert it to array
      // typeOf array won't work, because array is an object in javascript
      if (!Array.isArray(this._map.get("identifier")))
        this._map.set("identifier", [this._map.get("identifier")]);
      let identifier = this._map.get("identifier") as Array<object>;
      let array: Array<Identifier> = [];
      let jsonArray: Array<object> = [];

      identifier.map((i) => {
        let temp = new Identifier(i);
        array.push(temp);
        jsonArray.push(temp.toJSON());
      });

      this._map.set("_identifier", array);
      this._map.set("identifier", jsonArray);
    }

    Object.defineProperty(this, "version", {
      enumerable: true,
      get: () => this._map.get("version"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("version", value);
      },
    });

    Object.defineProperty(this, "name", {
      enumerable: true,
      get: () => this._map.get("name"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("name", value);
      },
    });

    Object.defineProperty(this, "title", {
      enumerable: true,
      get: () => this._map.get("title"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("title", value);
      },
    });

    Object.defineProperty(this, "status", {
      enumerable: true,
      get: () => this._map.get("status"),
      set: (value: code) => {
        if (!value) return;
        this._map.set("_status", value);
        this._map.set("status", value.getValue());
      },
    });

    Object.defineProperty(this, "_status", {
      enumerable: true,
      get: () => this._map.get("_status"),
    });

    Object.defineProperty(this, "experimental", {
      enumerable: true,
      get: () => this._map.get("experimental"),
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._map.set("experimental", value);
      },
    });

    Object.defineProperty(this, "date", {
      enumerable: true,
      get: () => this._map.get("date"),
      set: (value: dateTime) => {
        if (!value) return;
        this._map.set("date", value.getValue());
        this._map.set("_date", value);
      },
    });

    Object.defineProperty(this, "_date", {
      enumerable: true,
      get: () => this._map.get("_date"),
    });

    Object.defineProperty(this, "publisher", {
      enumerable: true,
      get: () => this._map.get("publisher"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("publisher", value);
      },
    });

    Object.defineProperty(this, "contact", {
      enumerable: true,
      get: () => this._map.get("contact"),
      set: (value: Array<ContactDetail>) => {
        if (!value) return;
        this._map.set(
          "contact",
          value.map((v) => v.toJSON())
        );
        this._map.set("_contact", value);
      },
    });

    Object.defineProperty(this, "_contact", {
      enumerable: true,
      get: () => this._map.get("_contact"),
    });

    if (this._map.has("contact")) {
      if (!Array.isArray(this._map.get("contact")))
        this._map.set("contact", [this._map.get("contact")]);
      let contact = this._map.get("contact") as Array<object>;
      let array: Array<ContactDetail>;
      let jsonArray: Array<object> = [];

      contact.map((i) => {
        let temp = new ContactDetail(i);
        array.push(temp);
        jsonArray.push(temp.toJSON());
      });

      this._map.set("_contact", array);
      this._map.set("contact", jsonArray);
    }

    Object.defineProperty(this, "description", {
      enumerable: true,
      get: () => this._map.get("description"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("description", value);
      },
    });

    Object.defineProperty(this, "useContext", {
      enumerable: true,
      get: () => this._map.get("useContext"),
      set: (value: Array<UseageContext>) => {
        if (!value) return;
        this._map.set(
          "useContext",
          value.map((v) => v.toJSON())
        );
        this._map.set("_useContext", value);
      },
    });

    Object.defineProperty(this, "_useContext", {
      enumerable: true,
      get: () => this._map.get("_useContext"),
    });

    if (this._map.has("useContext")) {
      if (!Array.isArray(this._map.get("useContext")))
        this._map.set("useContext", [this._map.get("useContext")]);
      let contact = this._map.get("useContext") as Array<object>;
      let array: Array<UseageContext>;
      let jsonArray: Array<object> = [];

      contact.map((i) => {
        let temp = new UseageContext(i);
        array.push(temp);
        jsonArray.push(temp.toJSON());
      });

      this._map.set("_useContext", array);
      this._map.set("usecontext", jsonArray);
    }

    Object.defineProperty(this, "jurisdiction", {
      enumerable: true,
      get: () => this._map.get("jurisdiction"),
      set: (value: Array<CodeableConcept>) => {
        if (!value) return;
        this._map.set(
          "jurisdiction",
          value.map((v) => v.toJSON())
        );
        this._map.set("_jurisdiction", value);
      },
    });

    Object.defineProperty(this, "_jurisdiction", {
      enumerable: true,
      get: () => this._map.get("_jurisdiction"),
    });

    if (this._map.has("jurisdiction")) {
      if (!Array.isArray(this._map.get("jurisdiction")))
        this._map.set("jurisdiction", [this._map.get("jurisdiction")]);
      let contact = this._map.get("jurisdiction") as Array<object>;
      let array: Array<CodeSystemConcept>;
      let jsonArray: Array<object> = [];

      contact.map((i) => {
        let temp = new CodeSystemConcept(i);
        array.push(temp);
        jsonArray.push(temp.toJSON());
      });

      this._map.set("_jurisdiction", array);
      this._map.set("jurisdiction", jsonArray);
    }

    Object.defineProperty(this, "purpose", {
      enumerable: true,
      get: () => this._map.get("purpose"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("purpose", value);
      },
    });

    Object.defineProperty(this, "copyright", {
      enumerable: true,
      get: () => this._map.get("copyright"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("copyright", value);
      },
    });

    Object.defineProperty(this, "caseSensitive", {
      enumerable: true,
      get: () => this._map.get("caseSensitive"),
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._map.set("caseSensitive", value);
      },
    });

    Object.defineProperty(this, "valueSet", {
      enumerable: true,
      get: () => this._map.get("valueSet"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("valueSet", value);
      },
    });

    Object.defineProperty(this, "hierarchyMeaning", {
      enumerable: true,
      get: () => this._map.get("hierarchyMeaning"),
      set: (value: code) => {
        if (!value) return;
        this._map.set("_hierarchyMeaning", value);
        this._map.set("hierarchyMeaning", value.getValue());
      },
    });

    Object.defineProperty(this, "_hierarchyMeaning", {
      enumerable: true,
      get: () => this._map.get("_hierarchyMeaning"),
    });

    Object.defineProperty(this, "compositional", {
      enumerable: true,
      get: () => this._map.get("compositional"),
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._map.set("compositional", value);
      },
    });

    Object.defineProperty(this, "versionNeeded", {
      enumerable: true,
      get: () => this._map.get("versionNeeded"),
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._map.set("versionNeeded", value);
      },
    });

    Object.defineProperty(this, "content", {
      enumerable: true,
      get: () => this._map.get("content"),
      set: (value: code) => {
        if (!value) return;
        this._map.set("_content", value);
        this._map.set("content", value.getValue());
      },
    });

    Object.defineProperty(this, "_content", {
      enumerable: true,
      get: () => this._map.get("_content"),
    });

    Object.defineProperty(this, "supplements", {
      enumerable: true,
      get: () => this._map.get("supplements"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("supplements", value);
      },
    });

    Object.defineProperty(this, "count", {
      enumerable: true,
      get: () => this._map.get("count"),
      set: (value: number) => {
        if (!value) return;
        this._map.set("count", value);
      },
    });

    Object.defineProperty(this, "filter", {
      enumerable: true,
      get: () => this._map.get("filter"),
      set: (value: Array<CodeSystemFilter>) => {
        if (!value) return;
        this._map.set(
          "filter",
          value.map((v) => v.toJSON())
        );
        this._map.set("_filter", value);
      },
    });

    Object.defineProperty(this, "_filter", {
      enumerable: true,
      get: () => this._map.get("_filter"),
    });

    if (this._map.has("filter")) {
      if (!Array.isArray(this._map.get("filter")))
        this._map.set("filter", [this._map.get("filter")]);
      let contact = this._map.get("filter") as Array<object>;
      let array: Array<CodeSystemFilter>;
      let jsonArray: Array<object> = [];

      contact.map((i) => {
        let temp = new CodeSystemFilter(i);
        array.push(temp);
        jsonArray.push(temp.toJSON());
      });

      this._map.set("_filter", array);
      this._map.set("filter", jsonArray);
    }

    Object.defineProperty(this, "property", {
      enumerable: true,
      get: () => this._map.get("property"),
      set: (value: Array<CodeSystemProperty>) => {
        if (!value) return;
        this._map.set(
          "property",
          value.map((v) => v.toJSON())
        );
        this._map.set("_property", value);
      },
    });

    Object.defineProperty(this, "_property", {
      enumerable: true,
      get: () => this._map.get("_property"),
    });

    if (this._map.has("property")) {
      if (!Array.isArray(this._map.get("property")))
        this._map.set("property", [this._map.get("property")]);
      let contact = this._map.get("propery") as Array<object>;
      let array: Array<CodeSystemProperty>;
      let jsonArray: Array<object> = [];

      contact.map((i) => {
        let temp = new CodeSystemProperty(i);
        array.push(temp);
        jsonArray.push(temp.toJSON());
      });

      this._map.set("_property", array);
      this._map.set("property", jsonArray);
    }

    Object.defineProperty(this, "extension", {
      enumerable: true,
      get: () => this._map.get("extension"),
      set: (value: Array<Extension>) => {
        if (!value) return;
        this._map.set(
          "extension",
          value.map((v) => v.toJSON())
        );
        this._map.set("_extension", value);
      },
    });

    Object.defineProperty(this, "_extension", {
      enumerable: true,
      get: () => this._map.get("_extension"),
    });

    if (this._map.has("extension")) {
      if (!Array.isArray(this._map.get("extension")))
        this._map.set("extension", [this._map.get("extension")]);
      let contact = this._map.get("extension") as Array<object>;
      let array: Array<Extension>;
      let jsonArray: Array<object> = [];

      contact.map((i) => {
        let temp = new Extension(i);
        array.push(temp);
        jsonArray.push(temp.toJSON());
      });

      this._map.set("_extension", array);
      this._map.set("extension", jsonArray);
    }

    Object.defineProperty(this, "modifierExtension", {
      enumerable: true,
      get: () => this._map.get("modifierExtension"),
      set: (value: Array<Extension>) => {
        if (!value) return;
        this._map.set(
          "modifierExtension",
          value.map((v) => v.toJSON())
        );
        this._map.set("_modifierExtension", value);
      },
    });

    Object.defineProperty(this, "_modifierExtension", {
      enumerable: true,
      get: () => this._map.get("_modifierExtension"),
    });

    if (this._map.has("modifierExtension")) {
      if (Array.isArray(this._map.get("modifierExtension")))
        this._map.set("modifierExtension", [
          this._map.get("modifierExtension"),
        ]);
      let contact = this._map.get("modifierExtension") as Array<object>;
      let array: Array<Extension>;
      let jsonArray: Array<object> = [];

      contact.map((i) => {
        let temp = new Extension(i);
        array.push(temp);
        jsonArray.push(temp.toJSON());
      });

      this._map.set("_modifierExtension", array);
      this._map.set("modifierExtension", jsonArray);
    }
  }

  getResourceType(): string {
    return "CodeSystem";
  }

  toJSON(): object {
    // This is only to maintain the stucture of a defacult FHIR resource,
    // even without these steps the class will still return a valid resource
    let wrapper = {
      resourceType: this.getResourceType(),
      id: undefined,
      meta: undefined,
      url: undefined,
      identifier: undefined,
      version: undefined,
      name: undefined,
      title: undefined,
      status: undefined,
      experimental: undefined,
      date: undefined,
      contact: undefined,
      description: undefined,
      useContext: undefined,
      jurisdiction: undefined,
      purpose: undefined,
      copyright: undefined,
      caseSensitive: undefined,
      valueSet: undefined,
      hierarchyMeaning: undefined,
      compositional: undefined,
      versionNeeded: undefined,
      content: undefined,
      supplements: undefined,
      count: undefined,
      filter: undefined,
      property: undefined,
      concept: undefined,
      extension: undefined,
    };
    let content = Object.fromEntries(this._map);
    return Object.assign({}, wrapper, content);
  }
}

export { CodeSystem };
