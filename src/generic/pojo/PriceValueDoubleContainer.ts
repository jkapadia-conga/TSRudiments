/** TypeScript port of com.conga.rlp.rudiments.generic.pojo.PriceValueDoubleContainer. */
export class PriceValueDoubleContainer {
  Value?: number;
  DisplayValue?: number;
  CurrencyCode?: string;
  CurrencySymbol?: string;

  getValue(): number | undefined {
    return this.Value;
  }

  setValue(value: number): void {
    this.Value = value;
  }

  getDisplayValue(): number | undefined {
    return this.DisplayValue;
  }

  setDisplayValue(displayValue: number): void {
    this.DisplayValue = displayValue;
  }

  getCurrencyCode(): string | undefined {
    return this.CurrencyCode;
  }

  setCurrencyCode(currencyCode: string): void {
    this.CurrencyCode = currencyCode;
  }

  getCurrencySymbol(): string | undefined {
    return this.CurrencySymbol;
  }

  setCurrencySymbol(currencySymbol: string): void {
    this.CurrencySymbol = currencySymbol;
  }
}
