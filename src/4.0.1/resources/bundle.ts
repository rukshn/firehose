/**
 * This class represents the bundle resource of FHIR 4.0.1
 * http://hl7.org/fhir/R4/bundle.html
 */

// load dependancies
import { BundleEntry } from "../elements/bundleEntry";
import { BundleLink } from "../elements/bundleLink";
import { Extension } from "../elements/extension";
import { Identifier } from "../elements/identifier";
import { Meta } from "../elements/meta";
import { Signature } from "../elements/signature";
import { code } from "../types/code";
import { instant } from "../types/instant";
import { unsignedInt } from "../types/unsignedInt";

// interface
interface Bundle {
  id: string;
  meta: Meta;
  identifier: Identifier;
  type: code;
  timestamp: instant;
  total: unsignedInt;
  link: Array<BundleLink>;
  entry: Array<BundleEntry>;
  signature: Signature;
  extension: Array<Extension>;
}

// class
class Bundle {
  // empty varaible to match interface
  private _data: {
    id: string;
    meta: Meta;
    identifier: Identifier;
    type: code;
    timestamp: instant;
    total: unsignedInt;
    link: Array<BundleLink>;
    entry: Array<BundleEntry>;
    signature: Signature;
    extension: Array<Extension>;
  };
  //constrctor with optional parameters
  constructor(options?) {
    // map this to _data and pass parameters
    Object.defineProperty(this, "_data", { value: { ...options } });

    // set getters and setters for the inferface elements
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
      set: (value: Identifier) => {
        if (!value) return;
        this._data.identifier = value;
      },
    });

    Object.defineProperty(this, "type", {
      enumerable: true,
      get: () => this._data.type,
      set: (value: code) => {
        if (!value) return;
        this._data.type = value;
      },
    });

    Object.defineProperty(this, "timestamp", {
      enumerable: true,
      get: () => this._data.timestamp,
      set: (value: instant) => {
        if (!value) return;
        this._data.timestamp = value;
      },
    });

    Object.defineProperty(this, "total", {
      enumerable: true,
      get: () => this._data.total,
      set: (value: unsignedInt) => {
        if (!value) return;
        this._data.total = value;
      },
    });

    Object.defineProperty(this, "link", {
      enumerable: true,
      get: () => this._data.link,
      set: (value: Array<BundleLink>) => {
        if (!value) return;
        this._data.link = value;
      },
    });

    Object.defineProperty(this, "entry", {
      enumerable: true,
      get: () => this._data.entry,
      set: (value: Array<BundleEntry>) => {
        if (!value) return;
        this._data.entry = value;
      },
    });

    Object.defineProperty(this, "signature", {
      enumerable: true,
      get: () => this._data.signature,
      set: (value: Signature) => {
        if (!value) return;
        this._data.signature = value;
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
    return "Bundle";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      identifier: this.identifier && this.identifier.toJSON(),
      type: this.type && this.type.getValue(),
      timestamp: this.timestamp && this.timestamp.getValue(),
      total: this.total && this.total.getValue(),
      link: this.link && this.link.map((l) => l.toJSON()),
      entry: this.entry && this.entry.map((e) => e.toJSON()),
      signature: this.signature && this.signature.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}
