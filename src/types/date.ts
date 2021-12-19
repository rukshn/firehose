class date {
  private date
  constructor(date: string) {
    const regex = new RegExp(/([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?/, 'gi')
    if (regex.test(date)) {
      this.date = date
    }
  }

  getValue(): string {
    return this.date
  }

  toJSON() {
    return {
      date: this.date
    }
  }
}

export { date }