import { Quantity } from "./quantity";

class QuantityDuration extends Quantity {
  constructor(options?) {
    super(options);
  }

  valueExists(): boolean {
    if (this.value) return true;
    return false;
  }

  codeExists(): boolean {
    if (this.code) return true;
    return false;
  }

  toJSON(): object {
    if (this.valueExists === this.codeExists) {
      return this.toJSON();
    } else {
      return {
        error:
          "There SHALL be a code if there is a value and it SHALL be an expression of time.",
      };
    }
  }
}

export { QuantityDuration };
