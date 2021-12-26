import { id } from "../types/id";
import { instant } from "../types/instant";
import { Coding } from "./coding";
import { Extension } from "./extension";
import { Reference } from "./reference";

interface Meta {
  versionId: id;
  lastUpdated: instant;
  source: URL;
  profile: Array<Reference>;
  security: Array<Coding>;
  tag: Array<Coding>;
  extension: Array<Extension>;
}

class Meta {
  private _data: {
    versionId: id;
    lastUpdated: instant;
    source: URL;
    profile: Array<Reference>;
    secutiy: Array<Reference>;
    tag: Array<Coding>;
    extension: Array<Extension>;
  };
  constructor(options?) {
    Object.defineProperty(this, "_data", { value: { ...options } });

    Object.defineProperty(this, "versionId", {
      enumerable: true,
      get: () => this._data.versionId,
      set: (value: id) => {
        if (!value) return;
        this._data.versionId = value;
      },
    });

    Object.defineProperty(this, "lastUpdated", {
      enumerable: true,
      get: () => this._data.lastUpdated,
      set: (value: instant) => {
        if (!value) return;
        this._data.lastUpdated = value;
      },
    });

    Object.defineProperty(this, "source", {
      enumerable: true,
      get: () => this._data.source,
      set: (value: URL) => {
        if (!value) return;
        this._data.source = value;
      },
    });

    Object.defineProperty(this, "profile", {
      enumerable: true,
      get: () => this._data.profile,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.profile = value;
      },
    });

    Object.defineProperty(this, "security", {
      enumerable: true,
      get: () => this._data.secutiy,
      set: (value: Array<Reference>) => {
        if (!value) return;
        this._data.secutiy = value;
      },
    });

    Object.defineProperty(this, "tag", {
      enumerable: true,
      get: () => this._data.tag,
      set: (value: Array<Coding>) => {
        if (!value) return;
        this._data.tag = value;
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
    return "Meta";
  }

  toJSON(): object {
    return {
      versionId: this.versionId && this.versionId.getValue(),
      lastUpdated: this.lastUpdated && this.lastUpdated.getValue(),
      source: this.source && this.source.href,
      profile: this.profile && this.profile.map((p) => p.toJSON()),
      security: this.security && this.security.map((s) => s.toJSON()),
      tag: this.tag && this.tag.map((t) => t.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { Meta };
