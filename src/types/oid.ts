class oid {
  private oid: string
  constructor(oid: string) {
    const regex = new RegExp(/urn:oid:[0-2](\.(0|[1-9][0-9]*))+/, 'gi')
    if (regex.test(oid)) {
      this.oid = oid
    }
  }

  getValue() {
    return this.oid
  }

  getJSON() {
    return {
      oid: this.oid
    }
  }
}

export { oid }