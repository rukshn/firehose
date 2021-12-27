import { Extension } from "./extension";

interface BundleLink {
  id: string;
  relation: string;
  uri: URL;
  extension: Array<Extension>;
}

class BundleLink {
  private _data: {
    id: string;
    relation: string;
    uri: URL;
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

    Object.defineProperty(this, "relation", {
      enumerable: true,
      get: () => this._data.relation,
      set: (value: string) => {
        if (!value) return;
        this._data.relation = value;
      },
    });

    Object.defineProperty(this, "uri", {
      enumerable: true,
      get: () => this._data.uri,
      set: (value: URL) => {
        if (!value) return;
        this._data.uri = value;
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
    return "Bundle.link";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      relation: this.relation,
      uri: this.uri && this.uri.href,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { BundleLink };
