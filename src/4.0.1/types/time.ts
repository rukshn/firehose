class time {
  private time: string;
  constructor(time: string) {
    const regex = new RegExp(
      /([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?/,
      "gi"
    );
    if (regex.test(time)) {
      this.time = time;
    }
  }

  getValue() {
    return this.time;
  }

  getJSON() {
    return {
      time: this.time,
    };
  }
}

export { time };
