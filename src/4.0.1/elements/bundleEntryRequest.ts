import { code } from "../types/code";
import { Extension } from "./extension";

interface BundleEntryRequest {
  id: string;
  method: code;
  url: URL;
  ifNoneMatch: string;
  ifModifiedSince: string;
  ifMatch: string;
  ifNoneExist: string;
  extension: Array<Extension>;
}

class BundleEntryRequest {
  private _data: {
    id: string;
    method: code;
    url: URL;
    ifNoneMatch: string;
    ifModifiedSince: string;
    ifMatch: string;
    ifNoneExist: string;
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

    Object.defineProperty(this, "method", {
      enumerable: true,
      get: () => this._data.method,
      set: (value: code) => {
        if (!value) return;
        this._data.method = value;
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

    Object.defineProperty(this, "ifNoneMatch", {
      enumerable: true,
      get: () => this._data.ifNoneMatch,
      set: (value: string) => {
        if (!value) return;
        this._data.ifNoneMatch = value;
      },
    });

    Object.defineProperty(this, "ifModifiedSince", {
      enumerable: true,
      get: () => this._data.ifModifiedSince,
      set: (value: string) => {
        if (!value) return;
        this._data.ifModifiedSince = value;
      },
    });

    Object.defineProperty(this, "ifMatch", {
      enumerable: true,
      get: () => this._data.ifMatch,
      set: (value: string) => {
        if (!value) return;
        this._data.ifMatch = value;
      },
    });

    Object.defineProperty(this, "ifNoneExist", {
      enumerable: true,
      get: () => this._data.ifNoneExist,
      set: (value: string) => {
        if (!value) return;
        this._data.ifNoneExist = value;
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
    return "Bundle.entry.request";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      method: this.method && this.method.getValue(),
      ifNoneMatch: this.ifNoneMatch,
      ifModifiedSince: this.ifModifiedSince,
      ifMatch: this.ifMatch,
      ifNoneExist: this.ifNoneExist,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { BundleEntryRequest };
