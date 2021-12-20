class id {
  private id
  constructor(id: string) {
    const regex = new RegExp(/[A-Za-z0-9\-\.]{1,64}/, 'gi')
    if (regex.test(id)) {
      this.id = id
    }
  }

  getValue(): string {
    return this.id
  }

  getJSON(): Object {
    return {
      id: this.id
    }
  }
}

export { id }