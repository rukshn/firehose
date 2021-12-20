import {
    code
} from "../types/code";
import { Extension } from "./extension";
import {
    Period
} from "./period";

interface HumanName {
    use: code,
        id: string,
        text: string,
        family: string,
        given: Array < string > ,
        prefix: Array < string > ,
        suffix: Array < string > ,
        period: Period,
        extension: Array<Extension>
}

class HumanName {
    private _data: {
        id: string,
        use: string,
        _use: code,
        text: string,
        family: string,
        given: Array < string > ,
        prefix: Array < string > ,
        suffix: Array < string > ,
        period: object,
        _period: Period
        extension: Array<Extension>
    }

    constructor(options?) {
        Object.defineProperty(this, '_data', {value: {}})

        Object.defineProperty(this, 'id', {
            enumerable: true,
            get: () => this._data.id,
            set: (value: string) => {
                if (!value) return 
                this._data.id
            }
        })

        Object.defineProperty(this, 'use', {
            enumerable: true,
            get: () => this._data.use, 
            set: (value: code) => {
                if (!value) return
                this._data.use = value.getValue()
            }
        })

        Object.defineProperty(this, '_use', {
            enumerable: true,
            get: () => this._data._use,
            set: (value: code) => {
                if (!value) return 
                this._data._use = value
            }
        })

        Object.defineProperty(this, 'text', {
            enumerable: true,
            get: () => this._data.text,
            set: (value: string) => {
                if (!value) return
                this._data.text = value
            }
        })

        Object.defineProperty(this, 'family', {
            enumerable: true,
            get: () => this._data.family,
            set: (value: string) => {
                if (!value) return
                this._data.family = value
            }
        })

        Object.defineProperty(this, 'given', {
            enumerable: true,
            get: () => this._data.given,
            set: (value: Array<string>) => {
                if (!value) return
                this._data.given = value
            }
        })

        Object.defineProperty(this, 'prefix', {
            enumerable: true,
            get: () => this._data.prefix,
            set: (value: Array<string>) => {
                if (!value) return
                this._data.prefix = value
            }
        })

        Object.defineProperty(this, 'suffix', {
            enumerable: true,
            get: () => this._data.suffix,
            set: (value: Array<string>) => {
                if (!value) return
                this._data.suffix = value
            }
        })

        Object.defineProperty(this, 'period', {
            enumerable: true,
            get: () => this._data.period,
            set: (value: Period) => {
                if (!value) return 
                this._data.period = value.toJSON()
            }
        })

        Object.defineProperty(this, '_period', {
            enumerable: true, 
            get: () => this._data._period,
            set: (value: Period) => {
                if (!value) return 
                this._data._period = value
            }
        })

        Object.defineProperty(this, 'extension', {
            enumerable: true,
            get: () => this._data.extension,
            set: (value: Array<Extension>) => {
                if (!value) return
                this._data.extension = value
            }
        })

        Object.assign(this, options)
    }

    getResourceType(): string {
        return "HumanName"
    }

    toJSON(): object {
        return {
            id: this._data.id,
            use: this._data.use,
            _use: this._data._use,
            text: this._data.text,
            family: this._data.family,
            given: this._data.given,
            prefix: this._data.prefix,
            suffix: this._data.suffix,
            period: this._data.period,
            _period: this._data._period,
            extension: this._data.extension && this._data.extension.map((e) => e.toJSON())
        }
    }
}

export {HumanName}