import { AdminPojoBase } from './AdminPojoBase';
import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.VisibilityRule, including all Java
 * fields and factory methods.
 */
export class VisibilityRule extends AdminPojoBase {
  Name?: string;
  Sequence?: number;
  Description?: string;
  Criteria?: string;
  BusinessObject?: string;
  IsActive?: boolean;
  PriceList?: IdNameContainer;
  CreatedDate?: string;
  Users?: string[];
  Roles?: string[];
  InclusionCriteria?: string;
  ExternalId?: string;

  /** Ports createVisibiltyRulePOJO(List testData) (Java's original method name, incl. its typo, preserved). */
  static createVisibiltyRulePOJO(testData: Record<string, string>[]): VisibilityRule[] {
    return testData.map((visibilityRuleMap) => {
      const visibilityRule = new VisibilityRule();
      visibilityRule.Name = visibilityRuleMap['Name'];
      visibilityRule.Sequence = Number(visibilityRuleMap['Sequence']);
      visibilityRule.Description = visibilityRuleMap['Description'];
      visibilityRule.Criteria = visibilityRuleMap['Criteria'];
      visibilityRule.BusinessObject = visibilityRuleMap['BusinessObject'];
      visibilityRule.IsActive = visibilityRuleMap['IsActive'] === 'true';
      visibilityRule.ExternalId = visibilityRuleMap['ExternalId'];
      if (visibilityRuleMap['priceListId'] !== undefined) {
        visibilityRule.PriceList = new IdNameContainer();
        visibilityRule.PriceList.Id = visibilityRuleMap['priceListId'];
        visibilityRule.PriceList.Name = visibilityRuleMap['priceListName'];
      }
      if (visibilityRuleMap['Users'] !== undefined) visibilityRule.Users = visibilityRuleMap['Users'].split(',');
      if (visibilityRuleMap['Roles'] !== undefined) visibilityRule.Roles = visibilityRuleMap['Roles'].split(',');
      if (visibilityRuleMap['InclusionCriteria'] !== undefined) visibilityRule.InclusionCriteria = visibilityRuleMap['InclusionCriteria'];
      return visibilityRule;
    });
  }
}
