import { base64Binary } from "../types/base64binary";
import { code } from "../types/code";
import { instant } from "../types/instant";
import { Coding } from "./coding";
import { Extension } from "./extension";
import { Reference } from "./reference";

interface Signature {
  id: string;
  type: Coding;
  when: instant;
  who: Reference;
  onBehalfOf: Reference;
  targetFormat: code;
  sigFormat: code;
  data: base64Binary;
  extension: Array<Extension>;
}

class Signature {
  private _data: {
    id: string;
    type: Coding;
    when: instant;
    who: Reference;
    onBehalfOf: Reference;
    targetFormat: code;
    sigFormat: code;
    data: base64Binary;
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

    Object.defineProperty(this, "type", {
      enumerable: true,
      get: () => this._data.type,
      set: (value: Coding) => {
        if (!value) return;
        this._data.type = value;
      },
    });

    Object.defineProperty(this, "when", {
      enumerable: true,
      get: () => this._data.when,
      set: (value: instant) => {
        if (!value) return;
        this._data.when = value;
      },
    });

    Object.defineProperty(this, "who", {
      enumerable: true,
      get: () => this._data.who,
      set: (value: Reference) => {
        if (!value) return;
        this._data.who = value;
      },
    });

    Object.defineProperty(this, "onBehalfOf", {
      enumerable: true,
      get: () => this._data.onBehalfOf,
      set: (value: Reference) => {
        if (!value) return;
        this._data.onBehalfOf = value;
      },
    });

    Object.defineProperty(this, "targetFormat", {
      enumerable: true,
      get: () => this._data.targetFormat,
      set: (value: code) => {
        if (!value) return;
        this._data.targetFormat = value;
      },
    });

    Object.defineProperty(this, "sigFormat", {
      enumerable: true,
      get: () => this._data.sigFormat,
      set: (value: code) => {
        if (!value) return;
        this._data.sigFormat = value;
      },
    });

    Object.defineProperty(this, "data", {
      enumerable: true,
      get: () => this._data.data,
      set: (value: base64Binary) => {
        if (!value) return;
        this._data.data = value;
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
    return "Signature";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      type: this.type && this.type.toJSON(),
      when: this.when && this.when.getValue(),
      who: this.who && this.who.toJSON(),
      onBehalfOf: this.onBehalfOf && this.onBehalfOf.toJSON(),
      targetFormat: this.targetFormat && this.targetFormat.getValue(),
      sigFormat: this.sigFormat && this.sigFormat.getValue(),
      data: this.data && this.data.getValue(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Signature };
