class positiveInt {
  private integer: number;
  constructor(integer: number) {
    const regex = new RegExp(/+?[1-9][0-9]*/, "gi");
    if (regex.test(integer.toString())) {
      this.integer = integer;
    }
  }

  getValue(): number {
    return this.integer;
  }

  getJSON(): Object {
    return {
      positiveInt: this.integer,
    };
  }
}

export { positiveInt };
