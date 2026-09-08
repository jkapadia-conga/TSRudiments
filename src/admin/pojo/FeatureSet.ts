import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.FeatureSet, including all Java fields
 * and factory methods.
 */
export class FeatureSet {
  Id?: string;
  [key: string]: unknown;

  getId(): string | undefined {
    return this.Id;
  }

  Name?: string;
  Description?: string;
  Sequence?: number;
  CreatedDate?: string;
  ModifiedDate?: string;
  ExternalId?: string;
  Currency?: string;
  CreatedBy?: IdNameContainer;
  ModifiedBy?: IdNameContainer;

  /** Ports createFeatureSetPojo(List testData). */
  static createFeatureSetPojo(lstMapTestData: Record<string, string>[]): FeatureSet[] {
    return lstMapTestData.map((mapTestData) => {
      const pojo = new FeatureSet();
      pojo.Name = mapTestData['Name'];
      pojo.Description = mapTestData['Description'];
      if (mapTestData['Sequence'] !== undefined) pojo.Sequence = Number(mapTestData['Sequence']);
      pojo.CreatedDate = mapTestData['CreatedDate'];
      pojo.Currency = mapTestData['Currency'];
      pojo.ModifiedDate = mapTestData['ModifiedDate'];
      pojo.ExternalId = mapTestData['ExternalId'];
      return pojo;
    });
  }
}
