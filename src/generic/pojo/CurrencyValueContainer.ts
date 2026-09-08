/** TypeScript port of com.conga.rlp.rudiments.generic.pojo.CurrencyValueContainer. */
export class CurrencyValueContainer {
  Value?: number;
  CurrencyCode?: string;

  getValue(): number | undefined {
    return this.Value;
  }

  setValue(value: number): void {
    this.Value = value;
  }

  getCurrencyCode(): string | undefined {
    return this.CurrencyCode;
  }

  setCurrencyCode(currencyCode: string): void {
    this.CurrencyCode = currencyCode;
  }
}
