import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.PriceList, including all Java fields
 * and factory methods.
 */
export class PriceList {
  Id?: string;
  [key: string]: unknown;

  getId(): string | undefined {
    return this.Id;
  }

  Name?: string;
  Description?: string;
  IsActive?: boolean;
  BasedOnAdjustmentAmount?: number;
  ContractNumber?: string;
  DisableCurrencyAdjustment?: boolean;
  Type?: string;
  BasedOnAdjustmentType?: string;
  CostModel?: string;
  EffectiveDate?: string;
  ExpirationDate?: string;
  ExternalId?: string;
  Currency?: string;
  Account?: IdNameContainer;
  CatAuto_PriceListId_c?: string;
  BasedOnPriceList?: IdNameContainer;
  Message?: string;
  Status?: string;
  CreatedBy?: IdNameContainer;
  ModifiedBy?: IdNameContainer;

  private static mapCommonFields(priceList: PriceList, testData: Record<string, string>): void {
    priceList.Name = testData['Name'];
    priceList.Description = testData['Description'];
    priceList.IsActive = testData['IsActive'] === 'true';
    if (testData['BasedOnAdjustmentAmount'] !== undefined) priceList.BasedOnAdjustmentAmount = Number(testData['BasedOnAdjustmentAmount']);
    priceList.ContractNumber = testData['ContractNumber'];
    priceList.DisableCurrencyAdjustment = testData['DisableCurrencyAdjustment'] === 'true';
    priceList.Type = testData['Type'];
    priceList.BasedOnAdjustmentType = testData['BasedOnAdjustmentType'];
    priceList.CostModel = testData['CostModel'];
    priceList.EffectiveDate = testData['EffectiveDate'];
    priceList.ExpirationDate = testData['ExpirationDate'];
    priceList.ExternalId = testData['ExternalId'];
    priceList.Currency = testData['Currency'];
    priceList.CatAuto_PriceListId_c = testData['CatAuto_PriceListId_c'];
    if (testData['AccountId'] !== undefined) {
      priceList.Account = new IdNameContainer();
      priceList.Account.Id = testData['AccountId'];
      priceList.Account.Name = testData['AccountName'];
    }
    if (testData['basedOnPriceListId'] !== undefined) {
      priceList.BasedOnPriceList = new IdNameContainer();
      priceList.BasedOnPriceList.Id = testData['basedOnPriceListId'];
      priceList.BasedOnPriceList.Name = testData['basedOnPriceListname'];
    }
  }

  /** Ports createPricelistPOJO(Map testData) - creates a single-item PriceList list. */
  static createPricelistPOJO(testData: Record<string, string>): PriceList[] {
    const priceList = new PriceList();
    PriceList.mapCommonFields(priceList, testData);
    return [priceList];
  }

  /** Ports updatePriceListPOJO(Map testData). */
  static updatePriceListPOJO(testData: Record<string, string>): PriceList {
    const priceList = new PriceList();
    priceList.Name = testData['Name'];
    priceList.Description = testData['Description'];
    priceList.IsActive = testData['IsActive'] === 'true';
    if (testData['BasedOnAdjustmentAmount'] !== undefined) priceList.BasedOnAdjustmentAmount = Number(testData['BasedOnAdjustmentAmount']);
    priceList.ContractNumber = testData['ContractNumber'];
    priceList.DisableCurrencyAdjustment = testData['DisableCurrencyAdjustment'] === 'true';
    priceList.Type = testData['Type'];
    priceList.BasedOnAdjustmentType = testData['BasedOnAdjustmentType'];
    priceList.CostModel = testData['CostModel'];
    priceList.EffectiveDate = testData['EffectiveDate'];
    priceList.ExpirationDate = testData['ExpirationDate'];
    priceList.ExternalId = testData['ExternalId'];
    priceList.CatAuto_PriceListId_c = testData['CatAuto_PriceListId_c'];
    priceList.Currency = testData['Currency'];
    if (testData['AccountId'] !== undefined) {
      priceList.Account = new IdNameContainer();
      priceList.Account.Id = testData['AccountId'];
      priceList.Account.Name = testData['AccountName'];
    }
    return priceList;
  }

  /** Ports createPricelistPOJO(List testData) overload. */
  static createPricelistPOJOBulk(testDataAsMapList: Record<string, string>[]): PriceList[] {
    return testDataAsMapList.map((testData) => {
      const priceList = new PriceList();
      PriceList.mapCommonFields(priceList, testData);
      return priceList;
    });
  }

  /** Ports updatePricelistPOJO(List testData) overload (note the Java original's lowercase-"l" name). */
  static updatePricelistPOJOBulk(testDataAsMapList: Record<string, string>[]): PriceList[] {
    return testDataAsMapList.map((testData) => {
      const priceList = new PriceList();
      priceList.Id = testData['id'];
      PriceList.mapCommonFields(priceList, testData);
      return priceList;
    });
  }

  /** Ports createSinglePricelistPOJO(Map testData). */
  static createSinglePricelistPOJO(testData: Record<string, string>): PriceList {
    const priceList = new PriceList();
    PriceList.mapCommonFields(priceList, testData);
    return priceList;
  }
}
