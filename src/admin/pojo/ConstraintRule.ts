/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.ConstraintRule, including all
 * fields and factory methods.
 */
export class ConstraintRule {
  Id?: string;
  [key: string]: unknown;

  getId(): string | undefined {
    return this.Id;
  }

  Name?: string;
  ExternalId?: string;
  IsActive?: boolean;
  ConditionAssociation?: string;
  Description?: string;
  StartDate?: string;
  EndDate?: string;
  IsBundleContext?: boolean;
  Sequence?: number;
  Conditions?: unknown[];
  Actions?: unknown[];
  Type?: string;
  UpdateView?: string;
  RuleCategory?: string;
  IsPointOfSale?: boolean;
  IsPostSale?: boolean;

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
    constraintRule.RuleCategory = testData['RuleCategory'];
    constraintRule.IsPostSale = testData['IsPostSale'] === 'true';
    constraintRule.IsPointOfSale = testData['IsPointOfSale'] === 'true';
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
      constraintRule.RuleCategory = row['RuleCategory'];
      constraintRule.IsPostSale = row['IsPostSale'] === 'true';
      constraintRule.IsPointOfSale = row['IsPointOfSale'] === 'true';
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
      constraintRule.RuleCategory = row['RuleCategory'];
      constraintRule.IsPostSale = row['IsPostSale'] === 'true';
      constraintRule.IsPointOfSale = row['IsPointOfSale'] === 'true';
      return constraintRule;
    });
  }
}
