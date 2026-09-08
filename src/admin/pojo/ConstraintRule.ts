import { AdminPojoBase } from './AdminPojoBase';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.ConstraintRule, including all Java
 * fields and factory methods.
 */
export class ConstraintRule extends AdminPojoBase {
  Name?: string;
  ExternalId?: string;
  IsActive?: boolean;
  ConditionAssociation?: string;
  Description?: string;
  StartDate?: string;
  EndDate?: string;
  IsBundleContext?: boolean;
  Sequence?: number;
  AdminAuto_CustomStringField_c?: string;
  Conditions?: unknown[];
  Actions?: unknown[];
  Type?: string;
  UpdateView?: string;
  RuleCategory?: string;
  IsPointOfSale?: boolean;
  IsPostSale?: boolean;
  CatAuto_UniqueConstraintRuleId_c?: string;

  /** Ports createConstraintRulePojo(Map testData) - creates a single-item ConstraintRule list. */
  static createConstraintRulePojo(testData: Record<string, string>): ConstraintRule[] {
    const constraintRule = new ConstraintRule();
    constraintRule.Name = testData['Name'];
    constraintRule.ExternalId = testData['ExternalId'];
    constraintRule.IsActive = testData['IsActive'] === 'true';
    constraintRule.Description = testData['Description'];
    constraintRule.StartDate = testData['StartDate'];
    constraintRule.EndDate = testData['EndDate'];
    constraintRule.Type = testData['Type'];
    if (testData['Sequence'] !== undefined) constraintRule.Sequence = Number(testData['Sequence']);
    constraintRule.ConditionAssociation = testData['ConditionAssociation'];
    constraintRule.IsBundleContext = testData['IsBundleContext'] === 'true';
    constraintRule.AdminAuto_CustomStringField_c = testData['AdminAuto_CustomStringField_c'];
    constraintRule.RuleCategory = testData['RuleCategory'];
    constraintRule.IsPostSale = testData['IsPostSale'] === 'true';
    constraintRule.IsPointOfSale = testData['IsPointOfSale'] === 'true';
    constraintRule.CatAuto_UniqueConstraintRuleId_c = testData['CatAuto_UniqueConstraintRuleId_c'];
    return [constraintRule];
  }

  /** Ports createSpecifiedNumberofConstraintRule(Map testData). */
  static createSpecifiedNumberOfConstraintRulePojo(testData: Record<string, string>): ConstraintRule[] {
    const count = Number(testData['numberOfConstraintRules']);
    const result: ConstraintRule[] = [];
    for (let i = 0; i < count; i++) {
      const constraintRule = new ConstraintRule();
      constraintRule.Name = `${testData['Name']}${i}`;
      constraintRule.ExternalId = testData['ExternalId'];
      constraintRule.IsActive = testData['IsActive'] === 'true';
      constraintRule.Description = testData['Description'];
      constraintRule.StartDate = testData['StartDate'];
      constraintRule.EndDate = testData['EndDate'];
      constraintRule.Sequence = i;
      constraintRule.Type = testData['Type'];
      constraintRule.ConditionAssociation = testData['ConditionAssociation'];
      constraintRule.IsBundleContext = testData['IsBundleContext'] === 'true';
      constraintRule.RuleCategory = testData['RuleCategory'];
      constraintRule.IsPostSale = testData['IsPostSale'] === 'true';
      constraintRule.IsPointOfSale = testData['IsPointOfSale'] === 'true';
      constraintRule.CatAuto_UniqueConstraintRuleId_c = testData['CatAuto_UniqueConstraintRuleId_c'];
      result.push(constraintRule);
    }
    return result;
  }

  /** Ports createMultipleConstraintRulePojo(List testData). */
  static createMultipleConstraintRulePojo(testData: Record<string, string>[]): ConstraintRule[] {
    return testData.map((row, i) => {
      const constraintRule = new ConstraintRule();
      constraintRule.Name = row['Name'];
      constraintRule.ExternalId = row['ExternalId'];
      constraintRule.IsActive = row['IsActive'] === 'true';
      constraintRule.Description = row['Description'];
      constraintRule.StartDate = row['StartDate'];
      constraintRule.EndDate = row['EndDate'];
      constraintRule.Type = row['Type'];
      constraintRule.Sequence = row['Sequence'] !== undefined ? Number(row['Sequence']) : i;
      constraintRule.ConditionAssociation = row['ConditionAssociation'];
      constraintRule.IsBundleContext = row['IsBundleContext'] === 'true';
      constraintRule.AdminAuto_CustomStringField_c = row['AdminAuto_CustomStringField_c'];
      constraintRule.RuleCategory = row['RuleCategory'];
      constraintRule.IsPostSale = row['IsPostSale'] === 'true';
      constraintRule.IsPointOfSale = row['IsPointOfSale'] === 'true';
      constraintRule.CatAuto_UniqueConstraintRuleId_c = row['CatAuto_UniqueConstraintRuleId_c'];
      return constraintRule;
    });
  }

  /** Ports updateConstraintRulePojo(List testData). */
  static updateConstraintRulePojo(testData: Record<string, string>[]): ConstraintRule[] {
    return testData.map((row) => {
      const constraintRule = new ConstraintRule();
      constraintRule.Id = row['Id'];
      constraintRule.Name = row['Name'];
      constraintRule.ExternalId = row['ExternalId'];
      constraintRule.IsActive = row['IsActive'] === 'true';
      constraintRule.Description = row['Description'];
      constraintRule.StartDate = row['StartDate'];
      constraintRule.EndDate = row['EndDate'];
      if (row['Sequence'] !== undefined) constraintRule.Sequence = Number(row['Sequence']);
      constraintRule.ConditionAssociation = row['ConditionAssociation'];
      constraintRule.IsBundleContext = row['IsBundleContext'] === 'true';
      constraintRule.UpdateView = row['UpdateView'];
      constraintRule.AdminAuto_CustomStringField_c = row['AdminAuto_CustomStringField_c'];
      constraintRule.RuleCategory = row['RuleCategory'];
      constraintRule.IsPostSale = row['IsPostSale'] === 'true';
      constraintRule.IsPointOfSale = row['IsPointOfSale'] === 'true';
      constraintRule.CatAuto_UniqueConstraintRuleId_c = row['CatAuto_UniqueConstraintRuleId_c'];
      return constraintRule;
    });
  }
}
