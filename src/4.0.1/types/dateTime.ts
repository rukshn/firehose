class dateTime {
  private dateTime;
  constructor(dateTime: string) {
    const regex = new RegExp(
      /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/,
      "gi"
    );
    if (regex.test(dateTime)) {
      this.dateTime = dateTime;
    }
  }

  getValue() {
    return this.dateTime;
  }

  toJSON() {
    return {
      dateTime: this.dateTime,
    };
  }
}

export { dateTime };
