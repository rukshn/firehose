import { code } from "../types/code";
import { Extension } from "./extension";

interface BundleEntrySearch {
  id: string;
  mode: code;
  score: number;
  extension: Array<Extension>;
}

class BundleEntrySearch {
  private _data: {
    id: string;
    mode: code;
    score: number;
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

    Object.defineProperty(this, "mode", {
      enumerable: true,
      get: () => this._data.mode,
      set: (value: code) => {
        if (!value) return;
        this._data.mode = value;
      },
    });

    Object.defineProperty(this, "score", {
      enumerable: true,
      get: () => this._data.score,
      set: (value: number) => {
        if (!value) return;
        this._data.score = value;
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
    return "Bundle.search";
  }

  toJSON(): object {
    return {
      resourceType: this.getResourceType(),
      id: this.id,
      mode: this.mode && this.mode.getValue(),
      score: this.score,
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { BundleEntrySearch };
