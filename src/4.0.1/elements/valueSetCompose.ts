import { date } from "../types/date";
import { Extension } from "./extension";
import { ValueSetComposeInclude } from "./valueSetComposeInclude";

interface ValueSetCompose {
  id: string;
  lockedDate: date;
  inactive: boolean;
  include: Array<ValueSetComposeInclude>;
  exclude: Array<ValueSetComposeInclude>;
  extension: Array<Extension>;
}

class ValueSetCompose {
  private _data: {
    id: string;
    lockedDate: date;
    inactive: boolean;
    include: Array<ValueSetComposeInclude>;
    exclude: Array<ValueSetComposeInclude>;
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

    Object.defineProperty(this, "lockedDate", {
      enumerable: true,
      get: () => this._data.lockedDate,
      set: (value: date) => {
        if (!value) return;
        this._data.lockedDate = value;
      },
    });

    Object.defineProperty(this, "inactive", {
      enumerable: true,
      get: () => this._data.inactive,
      set: (value: boolean) => {
        if (value === undefined || value === null) return;
        this._data.inactive = value;
      },
    });

    Object.defineProperty(this, "include", {
      enumerable: true,
      get: () => this._data.include,
      set: (value: Array<ValueSetComposeInclude>) => {
        if (!value) return;
        this._data.include = value;
      },
    });

    Object.defineProperty(this, "exclude", {
      enumerable: true,
      get: () => this._data.exclude,
      set: (value: Array<ValueSetComposeInclude>) => {
        if (!value) return;
        this._data.exclude = value;
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
    return "ValueSet.compose";
  }

  toJSON(): object {
    return {
      id: this.id,
      lockedDate: this.lockedDate && this.lockedDate.getValue(),
      inactive: this.inactive,
      include: this.include && this.include.map((i) => i.toJSON()),
      exclude: this.exclude && this.exclude.map((e) => e.toJSON()),
      extension: this.extension && this.extension.map((e) => e.toJSON()),
    };
  }
}

export { ValueSetCompose };
