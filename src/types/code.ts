class code {
  private code:string
  constructor(code: string) {
    const regex = new RegExp(/[^\s]+(\s[^\s]+)*/, 'gi')
    if(regex.test(code)) {
      this.code = code
    }
  }

  getValue() {
    return this.code
  }

  toJSON() {
    return {
      code: this.code
    }
  }
}

export { code }