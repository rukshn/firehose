import { Extension } from "./extension";
import { Identifier } from "./identifer";

interface Reference {
    id: string,
    reference: string,
    type: URL,
    identifier: Identifier,
    display: string,
    extension: Array<Extension>
}

class Reference {
    private _data: {id: string, reference: string, type: string, _type: URL, identifier: object, _identifier: Identifier, display: string, extension: Array<Extension>}
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
        
        Object.defineProperty(this, 'reference', {
            enumerable: true,
            get: () => this._data.reference,
            set: (value: string) => {
                if (!value) return 
                this._data.reference = value
            }
        })

        Object.defineProperty(this, 'type', {
            enumerable: true,
            get: () => this._data.type,
            set: (value: URL) => {
                if (!value) return
                this._data.type = value.href
            }
        })

        Object.defineProperty(this, '_type', {
            enumerable: true,
            get: () => this._data._type,
            set: (value: URL) => {
                if (!value) return
                this._data._type = value
            }
        })

        Object.defineProperty(this, 'identifier', {
            enumerable: true,
            get: () => this._data.identifier,
            set: (value: Identifier) => {
                if (!value) return
                this._data.identifier = value.toJSON()
            }
        })

        Object.defineProperty(this, '_identifier', {
            enumerable: true,
            get: () => this._data._identifier,
            set: (value: Identifier) => {
                if (!value) return 
                this._data._identifier = value
            }
        })

        Object.defineProperty(this, 'display', {
            enumerable: true,
            get: () => this._data.display,
            set: (value: string) => {
                if (!value) true
                this._data.display = value
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

    getResourceType():string {
        return "Reference"
    }

    toJSON(): object {
        return {
            id: this._data.id,
            reference: this._data.reference,
            type: this._data.type,
            _type: this._data._type,
            identifier: this._data.identifier,
            _identifier: this._data._identifier,
            display: this._data.display,
            extension: this._data.extension && this._data.extension.map((e) => e.toJSON())
        }
    }
}

export {Reference}