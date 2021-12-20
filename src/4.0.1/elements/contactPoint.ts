import {
    code
} from "../types/code";
import {
    Extension
} from "./extension";
import {
    Period
} from "./period";

interface ContactPoint {
    id: string,
        system: code,
        value: string,
        use: code,
        rank: number,
        period: Period,
        extension: Array < Extension >
}

class ContactPoint {
    private _data: {
        id: string,
        system: string,
        _system: code,
        value: string,
        use: string,
        _use: code,
        rank: number,
        period: object,
        _period: Period,
        extension: Array < Extension >
    }

    constructor(options?) {
        Object.defineProperty(this, '_data', {value: {}})

        Object.defineProperty(this, 'id', {
            enumerable: true,
            get: () => this._data.id,
            set: (value: string) => {
                if (!value) return
                this._data.id = value
            }
        })

        Object.defineProperty(this, 'system', {
            enumerable: true,
            get: () => this._data.system,
            set: (value: code) => {
                if (!value) return
                this._data.system = value.getValue()
            }
        })

        Object.defineProperty(this, '_system', {
            enumerable: true,
            get: () => this._data._system,
            set: (value: code) => {
                if (!value) return
                this._data._system = value
            }
        })

        Object.defineProperty(this, 'value', {
            enumerable: true,
            get: () => this._data.value,
            set: (value: string) => {
                if (!value) return
                this._data.value = value
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

        Object.defineProperty(this, 'rank', {
            get: () => this._data.rank,
            set: (value: number) => {
                if (!value) return
                this._data.rank = value
            }
        })

        Object.defineProperty(this, 'period', {
            get: () => this._data.period,
            set: (value: Period) => {
                if (!value) return 
                this._data.period = value.toJSON()
            }
        })

        Object.defineProperty(this, '_period', {
            get: () => this._data._period,
            set: (value: Period) => {
                if (!value) return
                this._data._period = value
            }
        })

        Object.defineProperty(this, 'extension', {
            get: () => this._data.extension,
            set: (value: Array<Extension>) => {
                if (!value) return
                this._data.extension = value
            }
        })

        Object.assign(this, options)
    }

    getResourceType(): string {
        return "ContactPoint"
    }

    toJSON(): object {
        return {
            id: this._data.id,
            system: this._data.system,
            _system: this._data._system,
            value: this._data.value,
            use: this._data.use,
            _use: this._data._use,
            rank: this._data.rank,
            period: this._data.period,
            _period: this._data._period,
            extension: this._data.extension && this._data.extension.map((e) => e.toJSON())
        }
    }
}

export {
    ContactPoint
}