import { code } from "../types/code";
import { Extension } from "./extension";

interface Coding {
    id: string,
    system: URL,
    version: string,
    code: code,
    display: string,
    userSelected: boolean,
    extension: Array<Extension>
}

class Coding {
    private _data: {id: string, system: string, _system: URL, version: string, code: string, _code: code, display: string, userSelected: boolean, extension: Array<Extension>}
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
            set: (value: URL) => {
                if (!value) return
                this._data.system = value.href
            }
        })
        
        Object.defineProperty(this, '_system', {
            enumerable: true,
            get: () => this._data._system,
            set: (value: URL) => {
                if (!value) return
                this._data._system = value
            } 
        })

        Object.defineProperty(this, 'version', {
            enumerable: true,
            get: () => this._data.version,
            set: (value: string) => {
                if (!value) return
                this._data.version = value 
            }
        })

        Object.defineProperty(this, 'code', {
            enumerable: true,
            get: () => this._data.code,
            set: (value: code) => {
                if (!value) return
                this._data.code = value.getValue()
            }
        })

        Object.defineProperty(this, '_code', {
            enumerable: true,
            get: () => this._data._code,
            set: (value: code) => {
                if (!value) return
                this._data._code = value
            }
        })

        Object.defineProperty(this, 'display', {
            enumerable: true,
            get: () => this._data.display,
            set: (value: string) => {
                if (!value) return
                this._data.display = value
            }
        })

        Object.defineProperty(this, 'userSelected', {
            enumerable: true,
            get: () => this._data.userSelected,
            set: (value: boolean) => {
                if (value === undefined || value === null) return
                this._data.userSelected = value 
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
        return "Coding"
    }

    toJSON(): object {
        return {
            id: this._data.id,
            system: this._data.system,
            _system: this._data._system,
            version: this.version,
            code: this._data.code,
            _code: this._data._code,
            display: this._data.display,
            userSelected: this._data.userSelected,
            extension: this._data.extension && this._data.extension.map((e) => e.toJSON())
        }
    }
}

export {Coding}