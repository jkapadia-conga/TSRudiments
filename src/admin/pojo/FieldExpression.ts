import { AdminPojoBase } from './AdminPojoBase';
import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.FieldExpression, including all Java
 * fields and factory methods.
 */
export class FieldExpression extends AdminPojoBase {
  Name?: string;
  ExternalId?: string;
  ETag?: string;
  ConditionScope?: string;
  ConditionExpression?: string;
  EvaluationContext?: string;
  ExpressionType?: string;
  Expression?: string;
  GroupByField?: string;
  IsModifiable?: boolean;
  Operation?: string;
  ParentField?: string;
  SourceObject?: string;
  UpdateField?: string;
  UpdateObject?: string;
  ProductGroup?: IdNameContainer;
  Product?: IdNameContainer;
  IsActive?: boolean;

  /** Ports createFieldExpressionPojo(List testData). */
  static createFieldExpressionPojo(lstFieldExpression: Record<string, string>[]): FieldExpression[] {
    return lstFieldExpression.map((fieldExpression) => {
      const pojo = new FieldExpression();
      pojo.Name = fieldExpression['Name'];
      pojo.Id = fieldExpression['Id'];
      pojo.ExternalId = fieldExpression['ExternalId'];
      pojo.ConditionExpression = fieldExpression['ConditionExpression'];
      pojo.IsActive = fieldExpression['IsActive'] === 'true';
      pojo.Expression = fieldExpression['Expression'];
      pojo.ExpressionType = fieldExpression['ExpressionType'];
      pojo.GroupByField = fieldExpression['GroupByField'];
      pojo.IsModifiable = fieldExpression['IsModifiable'] === 'true';
      pojo.ParentField = fieldExpression['ParentField'];
      pojo.UpdateField = fieldExpression['UpdateField'];
      pojo.ConditionScope = fieldExpression['ConditionScope'];
      pojo.ETag = fieldExpression['ETag'];
      pojo.Operation = fieldExpression['Operation'];
      pojo.EvaluationContext = fieldExpression['EvaluationContext'];
      pojo.SourceObject = fieldExpression['SourceObject'];
      pojo.UpdateObject = fieldExpression['UpdateObject'];
      if (fieldExpression['productId'] !== undefined) {
        pojo.Product = new IdNameContainer();
        pojo.Product.Id = fieldExpression['productId'];
        pojo.Product.Name = fieldExpression['productName'];
      }
      if (fieldExpression['productGroupId'] !== undefined) {
        pojo.ProductGroup = new IdNameContainer();
        pojo.ProductGroup.Id = fieldExpression['productGroupId'];
        pojo.ProductGroup.Name = fieldExpression['productGroupName'];
      }
      return pojo;
    });
  }
}
