import { base64Binary } from "../types/base64binary"
import { code } from "../types/code"
import { date } from "../types/date"
import { dateTime } from "../types/dateTime"
import { id } from "../types/id"
import { instant } from "../types/instant"
import { oid } from "../types/oid"
import { time } from "../types/time"

interface Extension {
  id: string,
  url: URL,
  valueBase64Binary: base64Binary,
  valueBoolean: boolean,
  valueCanonical: URL,
  valueCode: code,
  valueDate: date,
  valueDateTime: dateTime,
  valueDecimal: number,
  valueId: id,
  valueInstant: instant,
  valueInteger: number,
  valueMarkdown: string,
  valueOid: oid,
  valuePositiveInt: number,
  valueString: string,
  valueTime: time,
  valueUnsignedInt: number,
  valeUri: URL,
  valueUrl: URL,
  valueUuid: string,
  extennsion: Array <Extension>
}
class Extension {

  private _data: {
    id: string,
    url: string,
    _url: URL
    valueBase64Binary: string,
    _valueBase64Binary: base64Binary,
    valueBoolean: boolean,
    valueCanonical: string,
    valueCode: string,
    _valueCode: code,
    valueDate: string,
    _valueDate: date,
    valueDateTime: string,
    _valueDateTime: dateTime,
    valueDecimal: number,
    valueId: string,
    _valueId: id,
    valueInstant: string,
    _valueInstant: instant,
    valueInteger: number,
    valueMarkdown: string,
    valueOid: string,
    _valueOid: oid,
    valuePositiveInt: number,
    valueString: string,
    valueTime: string,
    _valueTime: time,
    valueUnsignedInt: number,
    valueUri: string,
    _valueUri: URL,
    valueUrl: string,
    _valueUrl: URL,
    valueUuid: string,
    extension: Array<Extension>
  }

  constructor(options?) {
    Object.defineProperty(this, '_data', {value: {}})

    Object.defineProperty(this, 'id', {
      enumerable: true,
      get: () => this._data.id,
      set: (value:string) => {
        if (!value) return
        this._data.id = value
      }
    })

    Object.defineProperty(this, 'url', {
      enumerable: true,
      get: () => this._data.url,
      set: (value: URL) => {
        if (!value) return
        this._data.url = value.href
      }
    })

    Object.defineProperty(this, '_url', {
      enumerable: true,
      get: () => this._data._url,
      set: (value: URL) => {
        if (!value) return
        this._data._url = value
      }
    })

    Object.defineProperty(this, 'valueBase64Binary', {
      enumerable: true,
      get: () => this._data.valueBase64Binary,
      set: (value: base64Binary) => {
        if (!value) return
        this._data.valueBase64Binary = value.getValue()
      }
    })

    Object.defineProperty(this, '_valueBase64Binary', {
      enumerable: true,
      get: () => this._data._valueBase64Binary,
      set: (value: base64Binary) => {
        if (!value) return
        this._data._valueBase64Binary = value
      }
    })

    Object.defineProperty(this, 'valueBoolean', {
      enumerable: true,
      get: () => this._data.valueBoolean,
      set: (value:boolean) => {
        if (value === undefined || value === null) return
        this._data.valueBoolean = value
      }
    })

    Object.defineProperty(this, 'valueCanonical', {
      enumerable: true,
      get: () => this._data.valueCanonical,
      set: (value: string) => {
        if (!value) return
        this._data.valueCanonical = value
      }
    })

    Object.defineProperty(this, 'valueCode', {
      enumerable: true,
      get: () => this._data.valueCode,
      set: (code: code) => {
        if (!code) return
        this._data.valueCode = code.getValue()
      }
    })

    Object.defineProperty(this, '_valueCode', {
      enumerable: true,
      get: () => this._data._valueCode,
      set: (value: code) => {
        if (!value) return
        this._data._valueCode = value
      }
    })

    Object.defineProperty(this, 'valueDate', {
      enumerable: true,
      get: () => this._data.valueDate,
      set: (value: date) => {
        if (!value) return
        this._data.valueDate = value.getValue()
      }
    })

    Object.defineProperty(this, '_valueDate', {
      enumerable: true,
      get: () => this._data._valueDate,
      set: (value: date) => {
        if (!value) return
        this._data._valueDate = value
      }
    })

    Object.defineProperty(this, 'valueDateTime', {
      enumerable: true,
      get: () => this._data.valueDateTime,
      set: (value: dateTime) => {
        if (!value) return
        this._data.valueDateTime = value.getValue()
        this._data._valueDateTime = value
      }
    })

    Object.defineProperty(this, '_valueDateTime', {
      enumerable: true,
      get: () => this._data._valueDateTime,
      set: (value: dateTime) => {
        if (!value) return
        this._data._valueDateTime = value
      }
    })

    Object.defineProperty(this, 'valueDecimal', {
      enumerable:true,
      get: () => this._data.valueDecimal,
      set: (value: number) => {
        if (!value) return
        this._data.valueDecimal = value
      }
    })

    Object.defineProperty(this, 'valueId', {
      enumerable: true,
      get: () => this._data.valueId,
      set: (value: id) => {
        if (!value) return
        this._data.valueId = value.getValue()
      }
    })

    Object.defineProperty(this, '_valueId', {
      enumerable: true,
      get: () => this._data._valueId,
      set: (value:id) => {
        if (!value) return
        this._data._valueId = value
      }
    })

    Object.defineProperty(this, 'valueInstant', {
      enumerable: true,
      get: () => this._data.valueInstant,
      set: (value: instant) => {
        if (!value) return
        this._data.valueInstant = value.getValue()
      }
    })

    Object.defineProperty(this, '_valueInstant', {
      enumerable: true,
      get: () => this._data._valueInstant,
      set: (value: instant) => {
        if (!value) return
        this._data._valueInstant = value
      }
    })

    Object.defineProperty(this, 'valueInteger', {
      enumerable: true,
      get: () => this._data.valueInteger,
      set: (value:number) => {
        if (!value) return
        this._data.valueInteger = value
      }
    })

    Object.defineProperty(this, 'valueMarkdown', {
      enumerable: true,
      get: () => this._data.valueMarkdown,
      set: (value:string) => {
        if (!value) return
        this._data.valueMarkdown = value
      }
    })

    Object.defineProperty(this, 'valueOid', {
      enumerable: true,
      get: () => this._data.valueOid,
      set: (value: oid) => {
        if (!value) return
        this._data.valueOid = value.getValue()
      }
    })

    Object.defineProperty(this, '_valueOid', {
      enumerable: true,
      get: () => this._data._valueOid,
      set: (value: oid) => {
        if (!value) return
        this._data._valueOid = value
      }
    })

    Object.defineProperty(this, 'valuePositiveInt', {
      enumerable: true,
      get: () => this._data.valuePositiveInt,
      set: (value: number) => {
        if (!value) return
        this._data.valuePositiveInt = value
      }
    })

    Object.defineProperty(this, 'valueString', {
      enumerable: true,
      get: () => this._data.valueString,
      set: (value: string) => {
        if (!value) return
        this._data.valueString = value
      }
    })

    Object.defineProperty(this, 'valueTime', {
      enumerable: true,
      get: () => this._data.valueTime,
      set: (value: time) => {
        if (!value) return
        this._data.valueTime = value.getValue()
      }
    })

    Object.defineProperty(this, '_valueTime', {
      enumerable: true,
      get: () => this._data._valueTime,
      set: (value: time) => {
        if (!value) return
        this._data._valueTime = value
      }
    })

    Object.defineProperty(this, 'valueUnsignedInt', {
      enumerable: true,
      get: () => this._data.valueUnsignedInt,
      set: (value: number) => {
        if (!value) return
        this._data.valueUnsignedInt = value
      }
    })

    Object.defineProperty(this, 'valueUri', {
      enumerable: true,
      get: () => this._data.valueUri,
      set: (value: URL) => {
        if (!value) return
        this._data.valueUri = value.href
      }
    })

    Object.defineProperty(this, '_valueUri', {
      enumerable: true,
      get: () => this._data._valueUri,
      set: (value: URL) => {
        if (!value) return
        this._data._valueUri = value
      }
    })

    Object.defineProperty(this, 'valueUrl', {
      enumerable: true,
      get: () => this._data.valueUrl,
      set: (value: URL) => {
        if (!value) return
        this._data.valueUrl = value.href
      }
    })

    Object.defineProperty(this, '_valueUrl', {
      enumerable: true,
      get: () => this._data._valueUrl,
      set: (value: URL) => {
        if (!value) return
        this._data._valueUrl = value
      }
    })

    Object.defineProperty(this, 'valueUuid', {
      enumerable: true,
      get: () => this._data.valueUuid,
      set: (value: string) => {
        if (!value) return
        this._data.valueUuid = value
      }
    })

    Object.defineProperty(this, 'extensions', {
      enumerable: true,
      get: () => this._data.extension,
      set: (value: Array<Extension>) => {
        if (!value) return
        this._data.extension = value
      }
    })

    Object.assign(this,options)
  }

  getResourceType():string {
    return "Extension"
  }

  toJSON(): object {
    return {
      id: this._data.id,
      url: this._data.url,
      _url: this._data._url,
      valueBase64Binary: this._data.valueBase64Binary,
      _valueBase64Binary: this._data._valueBase64Binary,
      valueBoolean: this._data.valueBoolean,
      valueCanonical: this._data.valueCanonical,
      valueCode: this._data.valueCode,
      _valueCode: this._data._valueCode,
      valueDate: this._data.valueDate,
      _valueDate: this._data._valueDate,
      valueDateTime: this._data.valueDateTime,
      _valueDateTime: this._data._valueDateTime,
      valueDecimal: this._data.valueDecimal,
      valueId: this._data.valueId,
      _valueId: this._data._valueId,
      valueInstant: this._data.valueInstant,
      _valueInstant: this._data._valueInstant,
      valueInteger: this._data.valueInteger,
      valueMarkdown: this._data.valueMarkdown,
      valueOid: this._data.valueOid,
      _valueOid: this._data._valueOid,
      valuePositiveInt: this._data.valuePositiveInt,
      valueString: this._data.valueString,
      valueTime: this._data.valueTime,
      _valueTime: this._data._valueTime,
      valueUnsignedInt: this._data.valueUnsignedInt,
      valueUri: this._data.valueUri,
      _valueUri: this._data._valueUri,
      valueUrl: this._data.valueUrl,
      _valueUrl: this._data._valueUrl,
      valueUuid: this._data.valueUuid,
      extension: this.extennsion && this.extennsion.map((e) => e.toJSON())
    }
  }
}

export { Extension }