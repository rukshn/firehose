/**
 * This class represents the idenfier element of FHIR
 * All modificatins of Idenfitier element will happen in this class
 */
import { code } from "../types/code";
import { CodeableConcept } from "./codeableConcept";
import { Extension } from "./extension";
import { Period } from "./period";
import { Reference } from "./reference";

// Define interface
interface Identifier {
  id: string;
  use: code;
  type: CodeableConcept;
  system: string;
  value: string;
  period: Period;
  assigner: Reference;
  extension: Array<Extension>;
}

// Define class
class Identifier {
  private _map: Map<string, any>;
  private _keys: object = {
    id: "string",
    use: "string",
    type: "object",
    system: "string",
    value: "string",
    period: "object",
    assigner: "object",
    extension: "object",
  };

  // Construct class
  constructor(options?) {
    Object.defineProperty(this, "_map", {
      value: {},
      writable: true,
    });
    // Convert the passed parameter object in to a map
    // the parameter will accept an onject of an identifier
    if (options) {
      this._map = new Map(Object.entries(options));
    } else {
      this._map = new Map();
    }

    // Conver the _key to map
    // To type check the incoming elements as a parameter
    const keyGuard = new Map(Object.entries(this._keys));

    this._map.forEach((value: any, key: string) => {
      if (typeof value !== keyGuard.get(key)) {
        this._map.delete(key);
      }
    });

    // Set gettrs and setters

    Object.defineProperty(this, "id", {
      enumerable: true,
      get: () => this._map.get("id"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("id", value);
      },
    });

    Object.defineProperty(this, "use", {
      enumerable: true,
      get: () => this._map.get("use"),
      set: (value: code) => {
        if (!value) return;
        this._map.set("use", value.getValue());
        this._map.set("_use", value);
      },
    });

    Object.defineProperty(this, "_use", {
      enumerable: true,
      get: () => this._map.get("_use"),
    });

    Object.defineProperty(this, "type", {
      enumerable: true,
      get: () => this._map.get("type"),
      set: (value: CodeableConcept) => {
        if (!value) return;
        this._map.set("type", value.toJSON());
        this._map.set("_type", value);
      },
    });

    Object.defineProperty(this, "_type", {
      enumerable: true,
      get: () => this._map.get("_type"),
    });

    if (this._map.has("type")) {
      let tempType = new CodeableConcept(this._map.get("type"));
      this._map.set("type", tempType.toJSON());
      this._map.set("_type", tempType);
    }

    Object.defineProperty(this, "system", {
      enumerable: true,
      get: () => this._map.get("system"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("system", value);
      },
    });

    Object.defineProperty(this, "value", {
      enumerable: true,
      get: () => this._map.get("value"),
      set: (value: string) => {
        if (!value) return;
        this._map.set("value", value);
      },
    });

    Object.defineProperty(this, "period", {
      enumerable: true,
      get: () => this._map.get("period"),
      set: (value: Period) => {
        if (!value) return;
        this._map.set("period", value.toJSON());
        this._map.set("_period", value);
      },
    });

    Object.defineProperty(this, "_period", {
      enumerable: true,
      get: () => this._map.get("_period"),
    });

    if (this._map.has("period")) {
      let tempPeriod = new Period(this._map.get("period"));
      this._map.set("period", tempPeriod.toJSON());
      this._map.set("_period", tempPeriod);
    }

    Object.defineProperty(this, "assigner", {
      enumerable: true,
      get: () => this._map.get("assigner"),
      set: (value: Reference) => {
        if (!value) return;
        this._map.set("assigner", value.toJSON());
        this._map.set("_assigner", value);
      },
    });

    Object.defineProperty(this, "_assigner", {
      enumerable: true,
      get: () => this._map.get("_assigner"),
    });

    if (this._map.has("assigner")) {
      let tempRef = new Reference(this._map.get("assigner"));
      this._map.set("assigner", tempRef.toJSON());
      this._map.set("_assigner", tempRef);
    }

    Object.defineProperty(this, "extension", {
      get: () => this._map.get("extension"),
      set: (value: Array<Extension>) => {
        if (!value) return;
        this._map.set("_extension", value);
        this._map.set(
          "extension",
          value.map((v) => v.toJSON())
        );
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
  }

  getResourceType(): string {
    return "Identifier";
  }

  toJSON(): object {
    // The wrapper is set to prettify the output as described in FHIR documentation
    // Even without the wrapper it will return a valid FHIE element
    let wrapper = {
      id: undefined,
      use: undefined,
      _use: undefined,
      type: undefined,
      _type: undefined,
      system: undefined,
      value: undefined,
      period: undefined,
      _period: undefined,
      assigner: undefined,
      _assigner: undefined,
      extension: undefined,
      _extension: undefined,
    };

    return Object.assign({}, wrapper, Object.fromEntries(this._map));
  }
}

export { Identifier };
