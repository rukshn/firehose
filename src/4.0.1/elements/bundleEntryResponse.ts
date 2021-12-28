import { Resource } from "../resources/resource";
import { instant } from "../types/instant";
import { Extension } from "./extension";

interface BundleEntryResponse {
  id: string;
  status: string;
  location: URL;
  etag: string;
  lastModified: instant;
  outcome: Resource;
  extension: Array<Extension>;
}

class BundleEntryResponse {
  private _data: {
    id: string;
    status: string;
    location: URL;
    etag: string;
    lastModified: instant;
    outcome: Resource;
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

    Object.defineProperty(this, "status", {
      enumerable: true,
      get: () => this._data.status,
      set: (value: string) => {
        if (!value) return;
        this._data.status = value;
      },
    });

    Object.defineProperty(this, "location", {
      enumerable: true,
      get: () => this._data.location,
      set: (value: URL) => {
        if (!value) return;
        this._data.location = value;
      },
    });

    Object.defineProperty(this, "etag", {
      enumerable: true,
      get: () => this._data.etag,
      set: (value: string) => {
        if (!value) return;
        this._data.etag = value;
      },
    });

    Object.defineProperty(this, "lastModified", {
      enumerable: true,
      get: () => this._data.lastModified,
      set: (value: instant) => {
        if (!value) return;
        this._data.lastModified = value;
      },
    });

    Object.defineProperty(this, "outcome", {
      enumerable: true,
      get: () => this._data.outcome,
      set: (value: Resource) => {
        if (!value) return;
        this._data.outcome = value;
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
    return "Bundle.entry.response";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      status: this.status,
      location: this.location && this.location.href,
      etag: this.etag,
      lastModified: this.lastModified && this.lastModified.getValue(),
      outcome: this.outcome && this.outcome.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { BundleEntryResponse };
