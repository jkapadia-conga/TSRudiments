import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.StoreFront, including all Java fields
 * and factory methods.
 */
export class StoreFront {
  Id?: string;
  [key: string]: unknown;

  getId(): string | undefined {
    return this.Id;
  }

  Name?: string;
  ExternalId?: string;
  DefaultAccount?: IdNameContainer;
  DefaultPriceList?: IdNameContainer;
  ImageUrl?: string;
  Channel?: string;
  CreatedDate?: string;
  ModifiedDate?: string;
  DefaultFlow?: string;
  DefaultLocale?: string;
  Currency?: string;
  GuestUser?: IdNameContainer;
  DefaultSalesUser?: IdNameContainer;

  private static mapCommonFields(storefrontpojo: StoreFront, testData: Record<string, string>): void {
    storefrontpojo.Name = testData['Name'];
    storefrontpojo.Channel = testData['Channel'];
    storefrontpojo.ExternalId = testData['ExternalId'];
    if (testData['ImageUrl'] !== undefined) storefrontpojo.ImageUrl = testData['ImageUrl'];
    storefrontpojo.Currency = testData['Currency'];
    if (testData['AccountId'] !== undefined) {
      storefrontpojo.DefaultAccount = new IdNameContainer();
      storefrontpojo.DefaultAccount.Id = testData['AccountId'];
      storefrontpojo.DefaultAccount.Name = testData['AccountName'];
    }
    if (testData['PriceListId'] !== undefined) {
      storefrontpojo.DefaultPriceList = new IdNameContainer();
      storefrontpojo.DefaultPriceList.Id = testData['PriceListId'];
      storefrontpojo.DefaultPriceList.Name = testData['PriceListName'];
    }
    if (testData['GuestUserId'] !== undefined) {
      storefrontpojo.GuestUser = new IdNameContainer();
      storefrontpojo.GuestUser.Id = testData['GuestUserId'];
      storefrontpojo.GuestUser.Name = testData['GuestUserName'];
    }
    if (testData['defaultSalesUserId'] !== undefined) {
      storefrontpojo.DefaultSalesUser = new IdNameContainer();
      storefrontpojo.DefaultSalesUser.Id = testData['defaultSalesUserId'];
      storefrontpojo.DefaultSalesUser.Name = testData['defaultSalesUserName'];
    }
  }

  /** Ports createStoreFront(Map testData) - creates a single-item StoreFront list. */
  static createStoreFront(testData: Record<string, string>): StoreFront[] {
    const storefrontpojo = new StoreFront();
    StoreFront.mapCommonFields(storefrontpojo, testData);
    return [storefrontpojo];
  }

  /** Ports createStoreFront(List testData) overload. */
  static createStoreFrontBulk(testData: Record<string, string>[]): StoreFront[] {
    return testData.map((row) => {
      const storefrontpojo = new StoreFront();
      StoreFront.mapCommonFields(storefrontpojo, row);
      return storefrontpojo;
    });
  }

  /** Ports createSpecifiedNumberOfStoreFront(Map testData). */
  static createSpecifiedNumberOfStoreFront(testData: Record<string, string>): StoreFront[] {
    const count = Number(testData['NumberOfStorefront']);
    const result: StoreFront[] = [];
    for (let i = 0; i < count; i++) {
      const storefrontpojo = new StoreFront();
      StoreFront.mapCommonFields(storefrontpojo, testData);
      result.push(storefrontpojo);
    }
    return result;
  }
}
