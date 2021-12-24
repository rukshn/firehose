import { Quantity } from "./quantity";

class SimpleQuantity extends Quantity {
  constructor(options?) {
    super(options);
    delete this.comparator;
  }
}

export { SimpleQuantity };
