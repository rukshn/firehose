class base64Binary {
  private base64String: string
  constructor(base64String: string) {
    const regex = new RegExp(/(\s*([0-9a-zA-Z\+\=]){4}\s*)+/, 'gi')
    if (regex.test(base64String)) {
      this.base64String = base64String
    }
  }

  getValue(): string {
    return this.base64String
  }

  getJSON(): Object {
    return {
      base64Binary: this.base64String
    }
  }
}

export { base64Binary }