import { AdminPojoBase } from './AdminPojoBase';
import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/** TypeScript port of com.conga.rlp.rudiments.admin.pojo.RuleSet (scoped down to Id/Name, used by PriceRule.getRuleset()). */
export class RuleSet extends AdminPojoBase {}

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.PriceRule, including all Java fields
 * and factory methods.
 */
export class PriceRule extends AdminPojoBase {
  AdjustmentAppliesTo?: string;
  AdjustmentChargeType?: string;
  AllowableAction?: string;
  AllowRemovalOfAdjustment?: boolean;
  BeneficiaryType?: string;
  BenefitType?: string;
  Description?: string;
  Dimension1?: IdNameContainer;
  Dimension1ValueType?: string;
  Dimension2?: IdNameContainer;
  Dimension2ValueType?: string;
  Dimension3?: IdNameContainer;
  Dimension3ValueType?: string;
  Dimension4?: IdNameContainer;
  Dimension4ValueType?: string;
  Dimension5?: IdNameContainer;
  Dimension5ValueType?: string;
  Dimension6?: IdNameContainer;
  Dimension6ValueType?: string;
  EffectiveDate?: string;
  ExpirationDate?: string;
  IsActive?: boolean;
  Ruleset?: RuleSet;
  RuleSubType?: string;
  RuleType?: string;
  Sequence?: number;
  StopProcessing?: boolean;
  TierMetricRollupDuration?: string;
  TierMetricType?: string;
  Name?: string;
  CreatedBy?: IdNameContainer;
  CreatedDate?: string;
  ModifiedBy?: IdNameContainer;
  ModifiedDate?: string;
  ExternalId?: string;
  Entries?: unknown[];

  getRuleset(): RuleSet | undefined {
    return this.Ruleset;
  }

  private static mapDimensions(priceRulePojo: PriceRule, testData: Record<string, string>): void {
    const dims: Array<[keyof PriceRule, keyof PriceRule]> = [
      ['Dimension1', 'Dimension1ValueType'],
      ['Dimension2', 'Dimension2ValueType'],
      ['Dimension3', 'Dimension3ValueType'],
      ['Dimension4', 'Dimension4ValueType'],
      ['Dimension5', 'Dimension5ValueType'],
      ['Dimension6', 'Dimension6ValueType'],
    ];
    dims.forEach(([dimensionKey, valueTypeKey], idx) => {
      const i = idx + 1;
      const idValue = testData[`Dimension${i}Id`];
      if (idValue !== undefined) {
        const dimension = new IdNameContainer();
        dimension.Id = idValue;
        dimension.Name = testData[`Dimension${i}Name`];
        (priceRulePojo as unknown as Record<string, unknown>)[dimensionKey] = dimension;
      } else {
        (priceRulePojo as unknown as Record<string, unknown>)[dimensionKey] = undefined;
      }
      (priceRulePojo as unknown as Record<string, unknown>)[valueTypeKey] = testData[`Dimension${i}ValueType`];
    });
  }

  /** Ports createPriceRulePojo(Map testData) - creates a single-item PriceRule list. */
  static createPriceRulePojo(testData: Record<string, string>): PriceRule[] {
    const priceRulePojo = new PriceRule();
    priceRulePojo.Name = testData['Name'];
    priceRulePojo.Description = testData['Description'];
    priceRulePojo.IsActive = testData['IsActive'] === 'true';
    priceRulePojo.Sequence = testData['Sequence'] !== undefined ? Number(testData['Sequence']) : 0;
    priceRulePojo.EffectiveDate = testData['EffectiveDate'];
    priceRulePojo.ExpirationDate = testData['ExpirationDate'];
    priceRulePojo.AllowRemovalOfAdjustment = testData['AllowRemovalOfAdjustment'] === 'true';
    priceRulePojo.AdjustmentAppliesTo = testData['AdjustmentAppliesTo'];
    priceRulePojo.AdjustmentChargeType = testData['AdjustmentChargeType'];
    priceRulePojo.AllowableAction = testData['AllowableAction'];
    priceRulePojo.StopProcessing = testData['StopProcessing'] === 'true';
    priceRulePojo.RuleType = testData['RuleType'];
    PriceRule.mapDimensions(priceRulePojo, testData);
    return [priceRulePojo];
  }

  /** Ports createMultiplePriceRulePojo(List testData). */
  static createMultiplePriceRulePojo(testData: Record<string, string>[]): PriceRule[] {
    return testData.map((row, i) => {
      const priceRulePojo = new PriceRule();
      priceRulePojo.Name = row['Name'];
      priceRulePojo.Description = row['Description'];
      priceRulePojo.IsActive = row['IsActive'] === 'true';
      priceRulePojo.Sequence = row['Sequence'] !== undefined ? Number(row['Sequence']) : i;
      priceRulePojo.EffectiveDate = row['EffectiveDate'];
      priceRulePojo.ExpirationDate = row['ExpirationDate'];
      priceRulePojo.AllowRemovalOfAdjustment = row['AllowRemovalOfAdjustment'] === 'true';
      priceRulePojo.AdjustmentAppliesTo = row['AdjustmentAppliesTo'];
      priceRulePojo.AdjustmentChargeType = row['AdjustmentChargeType'];
      priceRulePojo.AllowableAction = row['AllowableAction'];
      priceRulePojo.StopProcessing = row['StopProcessing'] === 'true';
      priceRulePojo.RuleType = row['RuleType'];
      PriceRule.mapDimensions(priceRulePojo, row);
      return priceRulePojo;
    });
  }
}
