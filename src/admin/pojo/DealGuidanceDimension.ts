import { AdminPojoBase } from './AdminPojoBase';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.DealGuidanceDimension, including all
 * Java fields and factory methods.
 */
export class DealGuidanceDimension extends AdminPojoBase {
  Name?: string;
  Description?: string;
  DimensionType?: string;
  Datasource?: string;
  ExternalId?: string;
  BusinessObject?: string;
  additionalProp1?: string;
  additionalProp2?: string;
  additionalProp3?: string;
  CreatedDate?: string;
  ModifiedDate?: string;

  /** Ports createDealGuidanceDimensionsPojo(List testData). */
  static createDealGuidanceDimensionsPojo(lstDealGuidanceDimensions: Record<string, string>[]): DealGuidanceDimension[] {
    return lstDealGuidanceDimensions.map((row) => {
      const pojo = new DealGuidanceDimension();
      pojo.Name = row['Name'];
      pojo.Id = row['Id'];
      pojo.Description = row['Description'];
      pojo.BusinessObject = row['BusinessObject'];
      pojo.Datasource = row['Datasource'];
      pojo.DimensionType = row['DimensionType'];
      pojo.ExternalId = row['ExternalId'];
      pojo.additionalProp1 = row['additionalProp1'];
      pojo.additionalProp2 = row['additionalProp2'];
      pojo.additionalProp3 = row['additionalProp3'];
      // NOTE: Java sets CreatedDate twice (the 2nd call with ModifiedDate looks like a bug that
      // overwrites CreatedDate instead of setting ModifiedDate) - faithfully replicated below.
      pojo.CreatedDate = row['ModifiedDate'];
      return pojo;
    });
  }
}
