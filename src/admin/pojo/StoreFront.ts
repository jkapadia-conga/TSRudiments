import { AdminPojoBase } from './AdminPojoBase';
import { IdNameContainer } from '../../generic/pojo/IdNameContainer';
import { CurrencyValueContainer } from '../../generic/pojo/CurrencyValueContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.StoreFront, including all Java fields
 * and factory methods.
 */
export class StoreFront extends AdminPojoBase {
  Name?: string;
  ExternalId?: string;
  DefaultAccount?: IdNameContainer;
  DefaultPriceList?: IdNameContainer;
  ImageUrl?: string;
  Channel?: string;
  CreatedDate?: string;
  ModifiedDate?: string;
  AdminAuto_CustomStringField_c?: string;
  AdminAuto_DateTime_CstField_c?: string;
  AdminAuto_CustomFieldPickList_c?: string;
  AdminAuto_Double_CstField_c?: number;
  AdminAuto_Boolean_CstField_c?: boolean;
  AdminAuto_Currency_CstField_c?: string;
  AdminAuto_Int_CstField_c?: number;
  AdminAuto_Multipicklist_CstField_c?: string[];
  DefaultFlow?: string;
  DefaultLocale?: string;
  Currency?: string;
  AutoRevenueAdmin_Boolean_FormulaField_c?: boolean;
  AutoRevenueAdmin_String_FormulaField_c?: string;
  AutoRevenueAdmin_Int_FormulaField_c?: number;
  AutoRevenueAdmin_Currency_FormulaField_c?: CurrencyValueContainer;
  AutoRevenueAdmin_Double_FormulaField_c?: number;
  AutoRevenueAdmin_DateTime_FormulaField_c?: string;
  GuestUser?: IdNameContainer;
  DefaultSalesUser?: IdNameContainer;

  private static mapCommonFields(storefrontpojo: StoreFront, testData: Record<string, string>): void {
    storefrontpojo.Name = testData['Name'];
    storefrontpojo.Channel = testData['Channel'];
    storefrontpojo.ExternalId = testData['ExternalId'];
    if (testData['ImageUrl'] !== undefined) storefrontpojo.ImageUrl = testData['ImageUrl'];
    storefrontpojo.Currency = testData['Currency'];
    if (testData['AdminAuto_CustomStringField_c'] !== undefined) storefrontpojo.AdminAuto_CustomStringField_c = testData['AdminAuto_CustomStringField_c'];
    if (testData['AdminAuto_DateTime_CstField_c'] !== undefined) storefrontpojo.AdminAuto_DateTime_CstField_c = testData['AdminAuto_DateTime_CstField_c'];
    if (testData['AdminAuto_CustomFieldPickList_c'] !== undefined) storefrontpojo.AdminAuto_CustomFieldPickList_c = testData['AdminAuto_CustomFieldPickList_c'];
    if (testData['AdminAuto_Double_CstField_c'] !== undefined) storefrontpojo.AdminAuto_Double_CstField_c = Number(testData['AdminAuto_Double_CstField_c']);
    if (testData['AdminAuto_Boolean_CstField_c'] !== undefined) storefrontpojo.AdminAuto_Boolean_CstField_c = testData['AdminAuto_Boolean_CstField_c'] === 'true';
    if (testData['AdminAuto_Currency_CstField_c'] !== undefined) storefrontpojo.AdminAuto_Currency_CstField_c = testData['AdminAuto_Currency_CstField_c'];
    if (testData['AdminAuto_Int_CstField_c'] !== undefined) storefrontpojo.AdminAuto_Int_CstField_c = Number(testData['AdminAuto_Int_CstField_c']);
    if (testData['AdminAuto_Multipicklist_CstField_c'] !== undefined)
      storefrontpojo.AdminAuto_Multipicklist_CstField_c = testData['AdminAuto_Multipicklist_CstField_c'].split(',');
    if (testData['AutoRevenueAdmin_Boolean_FormulaField_c'] !== undefined)
      storefrontpojo.AutoRevenueAdmin_Boolean_FormulaField_c = testData['AutoRevenueAdmin_Boolean_FormulaField_c'] === 'true';
    if (testData['AutoRevenueAdmin_String_FormulaField_c'] !== undefined)
      storefrontpojo.AutoRevenueAdmin_String_FormulaField_c = testData['AutoRevenueAdmin_String_FormulaField_c'];
    if (testData['AutoRevenueAdmin_Int_FormulaField_c'] !== undefined)
      storefrontpojo.AutoRevenueAdmin_Int_FormulaField_c = Number(testData['AutoRevenueAdmin_Int_FormulaField_c']);
    if (testData['AutoRevenueAdmin_Currency_FormulaField_c'] !== undefined) {
      const currencyValueContainer = new CurrencyValueContainer();
      currencyValueContainer.Value = Number(testData['AutoRevenueAdmin_Currency_FormulaField_c']);
      storefrontpojo.AutoRevenueAdmin_Currency_FormulaField_c = currencyValueContainer;
    }
    if (testData['AutoRevenueAdmin_Double_FormulaField_c'] !== undefined)
      storefrontpojo.AutoRevenueAdmin_Double_FormulaField_c = Number(testData['AutoRevenueAdmin_Double_FormulaField_c']);
    if (testData['AutoRevenueAdmin_DateTime_FormulaField_c'] !== undefined)
      storefrontpojo.AutoRevenueAdmin_DateTime_FormulaField_c = testData['AutoRevenueAdmin_DateTime_FormulaField_c'];
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
