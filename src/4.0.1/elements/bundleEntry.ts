import { Resource } from "../resources/resource";
import { BundleEntryRequest } from "./bundleEntryRequest";
import { BundleEntryResponse } from "./bundleEntryResponse";
import { BundleEntrySearch } from "./bundleEntrySearch";
import { BundleLink } from "./bundleLink";
import { Extension } from "./extension";

interface BundleEntry {
  id: string;
  link: Array<BundleLink>;
  fullUrl: URL;
  resource: Resource;
  search: BundleEntrySearch;
  request: BundleEntryRequest;
  resposne: BundleEntryResponse;
  extension: Array<Extension>;
}

class BundleEntry {
  private _data: {
    id: string;
    link: Array<BundleLink>;
    fullUrl: URL;
    resource: Resource;
    search: BundleEntrySearch;
    request: BundleEntryRequest;
    response: BundleEntryResponse;
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

    Object.defineProperty(this, "link", {
      enumerable: true,
      get: () => this._data.link,
      set: (value: Array<BundleLink>) => {
        if (!value) return;
        this._data.link = value;
      },
    });

    Object.defineProperty(this, "fullUrl", {
      enumerable: true,
      get: () => this._data.fullUrl,
      set: (value: URL) => {
        if (!value) return;
        this._data.fullUrl = value;
      },
    });

    Object.defineProperty(this, "resource", {
      enumerable: true,
      get: () => this._data.resource,
      set: (value: Resource) => {
        if (!value) return;
        this._data.resource = value;
      },
    });

    Object.defineProperty(this, "search", {
      enumerable: true,
      get: () => this._data.search,
      set: (value: BundleEntrySearch) => {
        if (!value) return;
        this._data.search = value;
      },
    });

    Object.defineProperty(this, "request", {
      enumerable: true,
      get: () => this._data.request,
      set: (value: BundleEntryRequest) => {
        if (!value) return;
        this._data.request = value;
      },
    });

    Object.defineProperty(this, "response", {
      enumerable: true,
      get: () => this._data.response,
      set: (value: BundleEntryResponse) => {
        if (!value) return;
        this._data.response = value;
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
    return "Bundle.entry";
  }

  toJSON(): object {
    return {
      id: this.id,
      link: this.link && this.link.map((l) => l.toJSON()),
      fullUrl: this.fullUrl && this.fullUrl.href,
      resource: this.resource && this.resource.toJSON(),
      search: this.search && this.search.toJSON(),
      request: this.request && this.request.toJSON(),
      response: this.resposne && this.resposne.toJSON(),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { BundleEntry };
