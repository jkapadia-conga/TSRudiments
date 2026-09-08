import { AdminPojoBase } from './AdminPojoBase';
import { IdNameContainer } from '../../generic/pojo/IdNameContainer';
import { CurrencyValueContainer } from '../../generic/pojo/CurrencyValueContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.OptionGroup, including all Java fields
 * and factory methods.
 */
export class OptionGroup extends AdminPojoBase {
  Name?: string;
  Description?: string;
  ExpandedByDefault?: boolean;
  GuidePage?: string;
  HideAllSearchFilters?: boolean;
  IncludeInTotalsView?: boolean;
  IsHidden?: boolean;
  IsLeaf?: boolean;
  IsPicklist?: boolean;
  Label?: string;
  LongDescription?: string;
  MaxOptions?: number;
  MinOptions?: number;
  IsModifiable?: boolean;
  SearchFilterFields?: string[];
  Type?: string;
  Ancestor?: IdNameContainer;
  Hierarchy?: IdNameContainer;
  ExternalId?: string;
  AncestorPath?: string;
  Children?: OptionGroup[];
  AdminAuto_CustomStringField_c?: string;
  ImageURL?: string;
  LargeImageURL?: string;
  DefaultSearchOptionGroup?: boolean;
  CreatedDate?: string;
  ModifiedDate?: string;
  CatAuto_UniqueOptionGroupId_c?: string;
  ModifiableType?: string;
  MaxTotalQuantity?: number;
  MinTotalQuantity?: number;
  MaxTotalQuantityExpression?: string;
  MinTotalQuantityExpression?: string;
  Sequence?: number;
  SourceOptionGroup?: string;
  SourceOptionGroups?: string[];
  Members?: unknown[];
  CatAuto_OGCustomFieldPickList_c?: string;
  CatAuto_OGString_CstField_c?: string;
  CatAuto_OGDouble_CstField_c?: number;
  CatAuto_OGInt_CstField_c?: number;
  CatAuto_OGCurrency_CstField_c?: CurrencyValueContainer;
  CatAuto_OGDateTime_CstField_c?: string;
  CatAuto_OGMultipicklist_CstField_c?: string[];

  private static mapCommonFields(pojo: OptionGroup, testData: Record<string, string>): void {
    if (testData['AncestorId'] !== undefined) {
      pojo.Ancestor = new IdNameContainer();
      pojo.Ancestor.Id = testData['AncestorId'];
      pojo.Ancestor.Name = testData['AncestorName'];
    }
    pojo.Name = testData['Name'];
    pojo.Description = testData['Description'];
    pojo.ExpandedByDefault = testData['ExpandedByDefault'] === 'true';
    pojo.GuidePage = testData['GuidePage'];
    pojo.HideAllSearchFilters = testData['HideAllSearchFilters'] === 'true';
    pojo.IncludeInTotalsView = testData['IncludeInTotalsView'] === 'true';
    pojo.IsHidden = testData['IsHidden'] === 'true';
    if (testData['IsLeaf'] !== undefined) pojo.IsLeaf = testData['IsLeaf'] === 'true';
    pojo.IsPicklist = testData['IsPicklist'] === 'true';
    pojo.Label = testData['Label'];
    pojo.LongDescription = testData['LongDescription'];
    if (testData['MaxOptions'] !== undefined) pojo.MaxOptions = Number(testData['MaxOptions']);
    if (testData['MinOptions'] !== undefined) pojo.MinOptions = Number(testData['MinOptions']);
    pojo.IsModifiable = testData['IsModifiable'] === 'true';
    if (testData['SearchFilterFields'] !== undefined) pojo.SearchFilterFields = [testData['SearchFilterFields']];
    pojo.DefaultSearchOptionGroup = testData['DefaultSearchOptionGroup'] === 'true';
    pojo.ImageURL = testData['ImageURL'];
    pojo.LargeImageURL = testData['LargeImageURL'];
    pojo.AdminAuto_CustomStringField_c = testData['AdminAuto_CustomStringField_c'];
    pojo.Type = testData['Type'];
    pojo.CatAuto_UniqueOptionGroupId_c = testData['CatAuto_UniqueOptionGroupId_c'];
    pojo.ModifiableType = testData['ModifiableType'];
    if (testData['MaxTotalQuantity'] !== undefined) pojo.MaxTotalQuantity = Number(testData['MaxTotalQuantity']);
    if (testData['MinTotalQuantity'] !== undefined) pojo.MinTotalQuantity = Number(testData['MinTotalQuantity']);
    pojo.MaxTotalQuantityExpression = testData['MaxTotalQuantityExpression'];
    pojo.MinTotalQuantityExpression = testData['MinTotalQuantityExpression'];
    if (testData['Sequence'] !== undefined) pojo.Sequence = Number(testData['Sequence']);
    pojo.CatAuto_OGCustomFieldPickList_c = testData['CatAuto_OGCustomFieldPickList_c'];
    pojo.CatAuto_OGString_CstField_c = testData['CatAuto_OGString_CstField_c'];
    if (testData['CatAuto_OGDouble_CstField_c'] !== undefined) pojo.CatAuto_OGDouble_CstField_c = Number(testData['CatAuto_OGDouble_CstField_c']);
    if (testData['CatAuto_OGInt_CstField_c'] !== undefined) pojo.CatAuto_OGInt_CstField_c = Number(testData['CatAuto_OGInt_CstField_c']);
    pojo.CatAuto_OGDateTime_CstField_c = testData['CatAuto_OGDateTime_CstField_c'];
    if (testData['CatAuto_OGMultipicklist_CstField_c'] !== undefined)
      pojo.CatAuto_OGMultipicklist_CstField_c = testData['CatAuto_OGMultipicklist_CstField_c'].split(',');
    if (testData['CatAuto_OGCurrency_CstField_c'] !== undefined) {
      const currency = new CurrencyValueContainer();
      currency.Value = Number(testData['CatAuto_OGCurrency_CstField_c']);
      pojo.CatAuto_OGCurrency_CstField_c = currency;
    }
  }

  /** Ports createOptionGroupPojo(Map testData) - creates a single-item OptionGroup list. */
  static createOptionGroupPojo(testData: Record<string, string>): OptionGroup[] {
    const pojo = new OptionGroup();
    OptionGroup.mapCommonFields(pojo, testData);
    return [pojo];
  }

  /** Ports createoptionGroupPojowithDefaultValues(Map testData). */
  static createOptionGroupPojoWithDefaultValues(testData: Record<string, string>): OptionGroup[] {
    const pojo = new OptionGroup();
    pojo.Name = testData['Name'];
    return [pojo];
  }

  /** Ports createMultipleOptionGroupPojo(List testData). */
  static createMultipleOptionGroupPojo(testData: Record<string, string>[]): OptionGroup[] {
    return testData.map((row) => {
      const pojo = new OptionGroup();
      OptionGroup.mapCommonFields(pojo, row);
      return pojo;
    });
  }

  /** Ports createSpecifiedNumberOfOptionGroupPojo(Map testData). */
  static createSpecifiedNumberOfOptionGroupPojo(testData: Record<string, string>): OptionGroup[] {
    const count = Number(testData['NumberOfRecords']);
    const result: OptionGroup[] = [];
    for (let i = 0; i < count; i++) {
      const pojo = new OptionGroup();
      OptionGroup.mapCommonFields(pojo, testData);
      pojo.Name = `${testData['Name']}${i}`;
      result.push(pojo);
    }
    return result;
  }

  /** Ports addExistingOptionGroupPojo(Map testData). */
  static addExistingOptionGroupPojo(testData: Record<string, string>): OptionGroup {
    const pojo = new OptionGroup();
    pojo.SourceOptionGroups = (testData['SourceOptionGroups'] ?? '').split(',');
    return pojo;
  }
}
