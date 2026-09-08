import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.Product, including all Java fields and
 * factory methods, plus the 3 accessor methods (getId/getName/getEffectiveDate) called directly
 * by the Revenue Admin UI repo.
 */
export class Product {
  Id?: string;
  [key: string]: unknown;

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
  Prices?: unknown[];
  CatAuto_UniqueProductId_c?: string;
  CatAuto_CustomFieldPickListV2_c?: string;
  Categories?: unknown[];
  ProductGroups?: unknown[];
  Productattributegroups?: unknown[];
  Options?: unknown[];
  Optiongroups?: unknown[];
  ProductInformation?: unknown[];
  CreatedBy?: IdNameContainer;
  ModifiedBy?: IdNameContainer;
  AllowVisualization?: boolean;
  Layout?: string;

  getId(): string | undefined {
    return this.Id;
  }

  getName(): string | undefined {
    return this.Name;
  }

  getEffectiveDate(): string | undefined {
    return this.EffectiveDate;
  }

  private static mapCommonFields(product: Product, testData: Record<string, string>): void {
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
    product.CatAuto_CustomFieldPickListV2_c = testData['CatAuto_CustomFieldPickListV2_c'];
    product.CatAuto_UniqueProductId_c = testData['CatAuto_UniqueProductId_c'];
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
      if (testData['AllowVisualization'] !== undefined) product.AllowVisualization = testData['AllowVisualization'] === 'true';
      if (testData['Layout'] !== undefined) product.Layout = testData['Layout'];
      result.push(product);
    }
    return result;
  }
}
