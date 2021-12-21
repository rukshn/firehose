import {
    base64Binary
} from "../types/base64binary";
import {
    code
} from "../types/code";
import {
    dateTime
} from "../types/dateTime";
import {
    Extension
} from "./extension";

interface Attachment {
    id: string,
        contentType: code,
        language: code,
        data: base64Binary,
        url: URL,
        size: number,
        hash: base64Binary,
        title: string,
        creation: dateTime
    extension: Array < Extension >
}

class Attachment {
    private _data: {
        id: string,
        contentType: string,
        _contentType: code,
        language: string,
        _language: code,
        data: string,
        __data: base64Binary,
        url: string,
        _url: URL,
        size: number,
        hash: string,
        _hash: base64Binary,
        title: string,
        creation: string,
        _creation: dateTime,
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

        Object.defineProperty(this, 'contentType', {
            enumerable: true,
            get: () => this._data.contentType,
            set: (value: code) => {
                if (!value) return
                this._data.contentType = value.getValue()
            }
        })

        Object.defineProperty(this, '_contentType', {
            enumerable: true,
            get: () => this._data._contentType,
            set: (value: code) => {
                if (!value) return
                this._data._contentType = value
            }
        })

        Object.defineProperty(this, 'language', {
            enumerable: true,
            get: () => this._data.language,
            set: (value: code) => {
                if (!value) return
                this._data.language = value.getValue()
            }
        })

        Object.defineProperty(this, '_language', {
            enumerable: true,
            get: () => this._data._language,
            set: (value: code) => {
                if (!value) return 
                this._data._language = value
            }
        })

        Object.defineProperty(this, 'data', {
            enumerable: true,
            get: () => this._data.data,
            set: (value: base64Binary) => {
                if (!value) return 
                this._data.data = value.getValue()
            }
        })

        Object.defineProperty(this, '__data', {
            enumerable: true,
            get: () => this._data.__data,
            set: (value: base64Binary) => {
                if (!value) return 
                this._data.__data = value
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

        Object.defineProperty(this, 'size', {
            enumerable: true,
            get: () => this._data.size,
            set: (value: number) => {
                if (!value) return 
                this._data.size = value
            }
        })

        Object.defineProperty(this, 'hash', {
            enumerable: true,
            get: () => this._data.hash,
            set: (value: base64Binary) => {
                if (!value) return
                this._data.hash = value.getValue()
            }
        })

        Object.defineProperty(this, '_hash', {
            enumerable: true,
            get: () => this._data._hash,
            set: (value: base64Binary) => {
                if (!value) return
                this._data._hash = value
            }
        })

        Object.defineProperty(this, 'title', {
            enumerable: true,
            get: () => this._data.title,
            set: (value: string) => {
                if (!value) return
                this._data.title = value
            }
        })

        Object.defineProperty(this, 'creation', {
            enumerable: true,
            get: () => this._data.creation,
            set: (value: dateTime) => {
                if (!value) return
                this._data.creation = value.getValue()
            }
        })

        Object.defineProperty(this, '_creation', {
            enumerable: true,
            get: () => this._data._creation,
            set: (value: dateTime) => {
                if (!value) return
                this._data._creation = value
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
        return "Attachment"
    }

    toJSON(): object {
        return {
            id: this._data.id,
            contentType: this._data.contentType,
            _contentType: this._data._contentType,
            language: this._data.language,
            _language: this._data._language,
            data: this._data.data,
            _data: this._data.__data,
            url: this._data.url,
            _url: this._data._url,
            size: this._data.size,
            hash: this._data.hash,
            _hash: this._data._hash,
            title: this._data.title,
            creation: this._data.creation,
            _creation: this._data._creation,
            extension: this._data.extension && this._data.extension.map((e) => e.toJSON())
        }
    }
}

export {
    Attachment
}