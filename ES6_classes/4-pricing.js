// Define a Pricing class that represents a price with an amount and currency.
export default class Pricing {
  // Constructor to initialize the 'amount' and 'currency' properties.
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter method for 'amount'.
  get amount() {
    return this._amount;
  }

  // Setter method for 'amount'.
  set amount(newAmount) {
    this._amount = newAmount;
  }
}
  