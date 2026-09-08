import { AdminPojoBase } from './AdminPojoBase';
import { IdNameContainer } from '../../generic/pojo/IdNameContainer';
import { CurrencyValueContainer } from '../../generic/pojo/CurrencyValueContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.Product, including all Java fields and
 * factory methods, plus the 3 accessor methods (getId/getName/getEffectiveDate) called directly
 * by the Revenue Admin UI repo.
 */
export class Product extends AdminPojoBase {
  CatAuto_ProductId_c?: string;
  Name?: string;
  ConfigurationType?: string;
  Family?: string;
  Description?: string;
  EffectiveDate?: string;
  ExpirationDate?: string;
  HasAttributes?: boolean;
  HasDefaults?: boolean;
  HasOptions?: boolean;
  HasSearchAttributes?: boolean;
  IsActive?: boolean;
  IsCustomizable?: boolean;
  ProductCode?: string;
  ProductType?: string;
  QuantityUnitOfMeasure?: string;
  Uom?: string;
  Version?: number;
  ImageURL?: string;
  ExcludeFromSitemap?: boolean;
  IsTabViewEnabled?: boolean;
  RenewalLeadTime?: number;
  DisplayUrl?: string;
  ExternalId?: string;
  CatAuto_Double_CstField_c?: number;
  CatAuto_Int_CstField_c?: number;
  CatAuto_String_CstField_c?: string;
  CatAuto_Boolean_CstField_c?: boolean;
  CatAuto_Currency_CstField_c?: string;
  CatAuto_DateTime_CstField_c?: string;
  CatAuto_CustomFieldPickList_c?: string;
  CatAuto_Multipicklist_CstField_c?: string[];
  Prices?: unknown[];
  CatAuto_UniqueProductId_c?: string;
  CatAuto_CustomFieldPickListV2_c?: string;
  Categories?: unknown[];
  ProductGroups?: unknown[];
  Productattributegroups?: unknown[];
  AdminAuto_CustomStringField_c?: string;
  AdminAuto_CustomMultiPicklistField_c?: string[];
  AdminAuto_CustomPicklistField_c?: string;
  AdminAuto_CustomLongStringField_c?: string;
  AdminAuto_CustomBooleanField_c?: boolean;
  AdminAuto_CustomCurrencyField_c?: CurrencyValueContainer;
  AdminAuto_CustomDateTimeField_c?: string;
  AdminAuto_CustomIntField_c?: number;
  AdminAuto_DefaultPicklistField_c?: string;
  AdminAuto_FormulaStringField_c?: string;
  AdminAuto_CustomLookupField_c?: IdNameContainer;
  Options?: unknown[];
  Optiongroups?: unknown[];
  ProductInformation?: unknown[];
  CreatedBy?: IdNameContainer;
  ModifiedBy?: IdNameContainer;
  Account_c?: IdNameContainer;
  AllowVisualization?: boolean;
  Layout?: string;

  getName(): string | undefined {
    return this.Name;
  }

  getEffectiveDate(): string | undefined {
    return this.EffectiveDate;
  }

  private static mapCommonFields(product: Product, testData: Record<string, string>): void {
    if (testData['accountId'] !== undefined) {
      product.Account_c = new IdNameContainer();
      product.Account_c.Id = testData['accountId'];
      product.Account_c.Name = testData['accountName'];
    }
    product.Name = testData['Name'];
    product.ConfigurationType = testData['ConfigurationType'];
    product.Family = testData['Family'];
    product.Description = testData['Description'];
    product.ProductCode = testData['ProductCode'];
    product.EffectiveDate = testData['EffectiveDate'];
    product.ExpirationDate = testData['ExpirationDate'];
    product.HasAttributes = testData['HasAttributes'] === 'true';
    product.HasDefaults = testData['HasDefaults'] === 'true';
    product.HasOptions = testData['HasOptions'] === 'true';
    product.HasSearchAttributes = testData['HasSearchAttributes'] === 'true';
    product.IsActive = testData['IsActive'] === 'true';
    product.IsCustomizable = testData['IsCustomizable'] === 'true';
    product.ProductType = testData['ProductType'];
    product.QuantityUnitOfMeasure = testData['QuantityUnitOfMeasure'];
    product.Uom = testData['Uom'];
    if (testData['Version'] !== undefined) product.Version = Number(testData['Version']);
    product.ImageURL = testData['ImageURL'];
    product.ExcludeFromSitemap = testData['ExcludeFromSitemap'] === 'true';
    product.IsTabViewEnabled = testData['IsTabViewEnabled'] === 'true';
    if (testData['RenewalLeadTime'] !== undefined) product.RenewalLeadTime = Number(testData['RenewalLeadTime']);
    product.DisplayUrl = testData['DisplayUrl'];
    product.CatAuto_ProductId_c = testData['CatAuto_ProductId_c'];
    product.CatAuto_String_CstField_c = testData['CatAuto_String_CstField_c'];
    product.CatAuto_DateTime_CstField_c = testData['CatAuto_DateTime_CstField_c'];
    product.CatAuto_CustomFieldPickList_c = testData['CatAuto_CustomFieldPickList_c'];
    product.CatAuto_CustomFieldPickListV2_c = testData['CatAuto_CustomFieldPickListV2_c'];
    if (testData['CatAuto_Double_CstField_c'] !== undefined) product.CatAuto_Double_CstField_c = Number(testData['CatAuto_Double_CstField_c']);
    product.CatAuto_Boolean_CstField_c = testData['CatAuto_Boolean_CstField_c'] === 'true';
    product.CatAuto_Currency_CstField_c = testData['CatAuto_Currency_CstField_c'];
    if (testData['CatAuto_Int_CstField_c'] !== undefined) product.CatAuto_Int_CstField_c = Number(testData['CatAuto_Int_CstField_c']);
    if (testData['CatAuto_Multipicklist_CstField_c'] !== undefined)
      product.CatAuto_Multipicklist_CstField_c = testData['CatAuto_Multipicklist_CstField_c'].split(',');
    product.CatAuto_UniqueProductId_c = testData['CatAuto_UniqueProductId_c'];
    product.AdminAuto_CustomStringField_c = testData['AdminAuto_CustomStringField_c'];
    if (testData['AdminAuto_CustomMultiPicklistField_c'] !== undefined)
      product.AdminAuto_CustomMultiPicklistField_c = testData['AdminAuto_CustomMultiPicklistField_c'].split(',');
    product.AdminAuto_CustomPicklistField_c = testData['AdminAuto_CustomPicklistField_c'];
    product.AdminAuto_CustomLongStringField_c = testData['AdminAuto_CustomLongStringField_c'];
    if (testData['AdminAuto_CustomBooleanField_c'] !== undefined) product.AdminAuto_CustomBooleanField_c = testData['AdminAuto_CustomBooleanField_c'] === 'true';
    if (testData['AdminAuto_CustomCurrencyField_c'] !== undefined) {
      const currency = new CurrencyValueContainer();
      currency.Value = Number(testData['AdminAuto_CustomCurrencyField_c']);
      product.AdminAuto_CustomCurrencyField_c = currency;
    }
    product.AdminAuto_CustomDateTimeField_c = testData['AdminAuto_CustomDateTimeField_c'];
    if (testData['AdminAuto_CustomIntField_c'] !== undefined) product.AdminAuto_CustomIntField_c = Number(testData['AdminAuto_CustomIntField_c']);
    product.AdminAuto_DefaultPicklistField_c = testData['AdminAuto_DefaultPicklistField_c'];
    product.AdminAuto_FormulaStringField_c = testData['AdminAuto_FormulaStringField_c'];
    if (testData['AdminAuto_CustomLookupField_c'] !== undefined) {
      const lookup = new IdNameContainer();
      lookup.Id = testData['Accountid'];
      lookup.Name = testData['AdminAuto_CustomLookupField_c'];
      product.AdminAuto_CustomLookupField_c = lookup;
    }
    if (testData['AllowVisualization'] !== undefined) product.AllowVisualization = testData['AllowVisualization'] === 'true';
    if (testData['Layout'] !== undefined) product.Layout = testData['Layout'];
  }

  /** Ports createProductPOJO(Map testData) - creates a single-item Product list. */
  static createProductPOJO(testData: Record<string, string>): Product[] {
    const product = new Product();
    Product.mapCommonFields(product, testData);
    return [product];
  }

  /** Ports createProductPOJO(List testData) overload. */
  static createProductPOJOBulk(productListMap: Record<string, string>[]): Product[] {
    return productListMap.map((testData) => {
      const product = new Product();
      Product.mapCommonFields(product, testData);
      return product;
    });
  }

  /** Ports updateProductPOJO(Map testData). */
  static updateProductPOJO(testData: Record<string, string>): Product {
    const product = new Product();
    product.Id = testData['id'];
    Product.mapCommonFields(product, testData);
    return product;
  }

  /** Ports updateProductPOJO(List testData) overload. */
  static updateProductPOJOBulk(productListMap: Record<string, string>[]): Product[] {
    return productListMap.map((testData) => {
      const product = new Product();
      product.Id = testData['id'];
      Product.mapCommonFields(product, testData);
      return product;
    });
  }

  /** Ports createSpecifiedNumberofProductPojo(Map testData). */
  static createSpecifiedNumberOfProductPojo(testData: Record<string, string>): Product[] {
    const count = Number(testData['numberOfProducts']);
    const result: Product[] = [];
    for (let i = 0; i < count; i++) {
      const product = new Product();
      product.ConfigurationType = testData['ConfigurationType'];
      product.ExcludeFromSitemap = testData['ExcludeFromSitemap'] === 'true';
      product.HasAttributes = testData['HasAttributes'] === 'true';
      product.HasDefaults = testData['HasDefaults'] === 'true';
      product.HasOptions = testData['HasOptions'] === 'true';
      product.HasSearchAttributes = testData['HasSearchAttributes'] === 'true';
      product.IsActive = testData['IsActive'] === 'true';
      product.IsCustomizable = testData['IsCustomizable'] === 'true';
      product.IsTabViewEnabled = testData['IsTabViewEnabled'] === 'true';
      product.Uom = testData['Uom'];
      product.Name = `${testData['Name']}${i}`;
      product.ProductType = testData['ProductType'];
      product.ProductCode = testData['ProductCode'];
      product.Description = testData['Description'];
      if (testData['accountId'] !== undefined) {
        product.Account_c = new IdNameContainer();
        product.Account_c.Id = testData['accountId'];
        product.Account_c.Name = testData['accountName'];
      }
      if (testData['AllowVisualization'] !== undefined) product.AllowVisualization = testData['AllowVisualization'] === 'true';
      if (testData['Layout'] !== undefined) product.Layout = testData['Layout'];
      result.push(product);
    }
    return result;
  }
}
