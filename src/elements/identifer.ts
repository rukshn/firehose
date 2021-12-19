import { code } from "../types/code"
import { Period } from "./period"

interface Identifier {

}

class Identifier {
  private _data: {use: string, _use: code, system: string, _system: URL, value: string, period: string, _period: Period}
  constructor(options) {
    Object.defineProperty(this, '_data', {value: {}})

    Object.defineProperty(this, 'use', {
      enumerable: true,
      get: () => this._data.use,
      set: (value: code) => {
        if (!value) return
        this._data.use = value.getValue()
      }
    })

  }
}

export { Identifier }