import {
    code
} from "../types/code";
import {
    Extension
} from "./extension";
import {
    Period
} from "./period";

interface Address {
    id: string,
        use: code,
        type: code,
        text: string,
        line: Array < string > ,
        city: string,
        district: string,
        state: string,
        postalCode: string,
        country: string,
        period: Period,
        extension: Array < Extension >
}

class Address {
    private _data: {
        id: string,
        use: string,
        _use: code,
        type: string,
        _type: code,
        text: string,
        line: Array < string > ,
        city: string,
        district: string,
        state: string,
        postalCode: string,
        country: string,
        period: object,
        _period: Period,
        extension: Array < Extension >
    }

    constructor(options ? ) {
        Object.defineProperty(this, '_data', {
            value: {}
        })

        Object.defineProperty(this, 'id', {
            enumerable: true,
            get: () => this._data.id,
            set: (value: string) => {
                if (!value) return
                this._data.id = value
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

        Object.defineProperty(this, 'type', {
            enumerable: true,
            get: () => this._data.type,
            set: (value: code) => {
                if (!value) return
                this._data.type = value.getValue()
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

        Object.defineProperty(this, 'line', {
            enumerable: true,
            get: () => this._data.line,
            set: (value: Array < string > ) => {
                if (!value) return
                this._data.line = value
            }
        })

        Object.defineProperty(this, 'city', {
            enumerable: true,
            get: () => this._data.city,
            set: (value: string) => {
                if (!value) return
                this._data.city = value
            }
        })

        Object.defineProperty(this, 'district', {
            enumerable: true,
            get: () => this._data.district,
            set: (value: string) => {
                if (!value) return
                this._data.district = value
            }
        })

        Object.defineProperty(this, 'state', {
            enumerable: true,
            get: () => this._data.state,
            set: (value: string) => {
                if (!value) return
                this._data.state = value
            }
        })

        Object.defineProperty(this, 'postalCode', {
            enumerable: true,
            get: () => this._data.postalCode,
            set: (value: string) => {
                if (!value) return
                this._data.postalCode = value
            }
        })

        Object.defineProperty(this, 'country', {
            enumerable: true,
            get: () => this._data.country,
            set: (value: string) => {
                if (!value) return
                this._data.country = value
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
            set: (value: Array < Extension > ) => {
                if (!value) return
                this._data.extension = value
            }
        })

        Object.assign(this, options)
    }

    getResourceType(): string {
        return "Address"
    }

    toJSON(): object {
        return {
            id: this._data.id,
            use: this._data.use,
            _use: this._data._use,
            type: this._data.type,
            _type: this._data._type,
            line: this._data.line,
            city: this._data.city,
            district: this._data.district,
            state: this._data.state,
            postalCode: this._data.postalCode,
            country: this._data.country,
            period: this._data.period,
            _period: this._data._period,
            extension: this._data.extension && this._data.extension.map((e) => e.toJSON())
        }
    }
}

export {
    Address
}