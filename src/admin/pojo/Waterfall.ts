import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.Waterfall, including all Java fields
 * and its factory method. PricePoints is kept as a passthrough array (the Java original
 * delegates to a separate PricePoints pojo which is out of scope for this migration).
 */
export class Waterfall {
  Id?: string;
  [key: string]: unknown;

  getId(): string | undefined {
    return this.Id;
  }

  Name?: string;
  Description?: string;
  IsActive?: boolean;
  EffectiveDate?: string;
  ExpirationDate?: string;
  Criteria?: string;
  CreatedBy?: IdNameContainer;
  ModifiedBy?: IdNameContainer;
  CreatedDate?: string;
  ModifiedDate?: string;
  ExternalId?: string;
  Sequence?: number;
  PricePoints?: unknown[];

  /** Ports createWaterfallPojo(List testData). */
  static createWaterfallPojo(lstWaterfallTestData: Record<string, string>[]): Waterfall[] {
    return lstWaterfallTestData.map((mapTestData) => {
      const waterfall = new Waterfall();
      waterfall.Name = mapTestData['Name'];
      waterfall.Description = mapTestData['Description'];
      waterfall.IsActive = mapTestData['IsActive'] === 'true';
      waterfall.EffectiveDate = mapTestData['EffectiveDate'];
      waterfall.ExpirationDate = mapTestData['ExpirationDate'];
      waterfall.Criteria = mapTestData['Criteria'];
      waterfall.ExternalId = mapTestData['ExternalId'];
      if (mapTestData['Sequence'] !== undefined) waterfall.Sequence = Number(mapTestData['Sequence']);
      if (mapTestData['PricePoints'] !== undefined) waterfall.PricePoints = JSON.parse(mapTestData['PricePoints']);
      return waterfall;
    });
  }
}
