export class Price {
  private _currency: string | undefined = '';
  private _amount: number | undefined = 0;
  private _decimals: number | undefined = 0;

  constructor (currency?: string, amount?: number, decimals?: number) {
    this._amount = amount;
    this._currency = currency;
    this._decimals = decimals;
  }

  currencyUSD (): (string) {
    const amount = (this._amount !== undefined) ? this._amount : 0;
    return `US$ ${amount}`;
  }

  currencyCOP (): (string) {
    const amount = (this._amount !== undefined) ? this._amount : 0;
    return `COP$ ${amount}`;
  }

  currencyEUR (): (string) {
    const amount = (this._amount !== undefined) ? this._amount : 0;
    return `€ ${amount}`;
  }

  set currency (currency: string) {
    this._currency = currency;
  }

  get currency (): (string | undefined) {
    return this._currency;
  }

  set amount (amount: number) {
    this._amount = amount;
  }

  get amount (): (number | undefined) {
    return this._amount;
  }

  set decimals (decimals: number) {
    this._decimals = decimals;
  }

  get decimals (): (number | undefined) {
    return this._decimals;
  }
}
