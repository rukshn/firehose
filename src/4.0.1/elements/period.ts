import { date } from "../types/date";
import { Extension } from "./extension";

interface Period {
  start: date,
  end: date,
  extension: Array<Extension>
}
class Period {
  private _data: {id: string, start: string, _start: date, end: string, _end: date, extension: Array<Extension>}

  constructor(options?) {
    Object.defineProperty(this, '_data', {value: {}})

    Object.defineProperty(this, 'id', {
      enumerable: true,
      get: () => this._data.id,
    })

    Object.defineProperty(this, '_start', {
      enumerable: true,
      get: () => this._data._start,
      set: (start: date) => {
        if (!start) {
          return
        }
        this._data._start = start
      }
    })

    Object.defineProperty(this, 'start', {
      enumerable: true,
      get: () => this._data.start,
      set: (start: date) => {
        if (!start) {
          return
        }
        this._data.start = start.getValue()
      }
    })

    Object.defineProperty(this, 'end', {
      enumerable: true,
      get: () => this._data.end,
      set: (end: date) => {
        if (!end) {
          return
        }
        this._data.end = end.getValue()
      }
    })

    Object.defineProperty(this, '_end', {
      enumerable: true,
      get: () => this._data._end,
      set: (end: date) => {
        if (!end) {
          return
        }
        this._data._end = end
      }
    })

    Object.defineProperty(this, 'extension', {
      enumerable: true,
      get: () => this.extension,
      set: (extension: Array<Extension>) => {
        if (!extension) return
        this._data.extension = extension
      }
    })

    Object.assign(this, options)
  }

  getResourceType(): string {
    return "Period"
  }

  toJSON(): Object {
    return {
      _start: this._data._start && this._data._start.toJSON(),
      _end: this._data._end && this._data._end.toJSON(),
      start: this._data.start,
      end: this._data.end,
      id: this._data.id,
      extension: this._data.extension && this._data.extension.map((v) => v.toJSON())
    }
  }
}

export { Period }