import { AdminPojoBase } from './AdminPojoBase';
import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.Category, including all Java fields
 * and factory methods.
 */
export class Category extends AdminPojoBase {
  Name?: string;
  DefaultSearchCategory?: boolean;
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
  SearchFilterFields?: string[];
  Ancestor?: IdNameContainer;
  Hierarchy?: IdNameContainer;
  CatAuto_CategoryId_c?: string;
  ExternalId?: string;
  AncestorPath?: string;
  Type?: string;
  Sequence?: number;
  CatAuto_CustomFieldPickList_c?: string;
  CatAuto_Double_CstField_c?: number;
  CatAuto_Int_CstField_c?: number;
  CatAuto_String_CstField_c?: string;
  CatAuto_Boolean_CstField_c?: boolean;
  CatAuto_Currency_CstField_c?: string;
  CatAuto_DateTime_CstField_c?: string;
  CatAuto_Multipicklist_CstField_c?: string[];
  CatAuto_UniqueCategoryId_c?: string;
  Currency?: string;
  LargeImageURL?: string;
  Children?: Category[];
  ImageURL?: string;
  AdminAuto_CustomStringField_c?: string;
  CreatedDate?: string;
  CreatedBy?: IdNameContainer;
  ModifiedBy?: IdNameContainer;
  Account_c?: IdNameContainer;
  Products?: unknown[];

  private static mapCommonFields(category: Category, testData: Record<string, string>): void {
    category.Name = testData['Name'];
    category.DefaultSearchCategory = testData['DefaultSearchCategory'] === 'true';
    category.Description = testData['Description'];
    category.ExpandedByDefault = testData['ExpandedByDefault'] === 'true';
    category.HideAllSearchFilters = testData['HideAllSearchFilters'] === 'true';
    category.IncludeInTotalsView = testData['IncludeInTotalsView'] === 'true';
    category.IsHidden = testData['IsHidden'] === 'true';
    category.IsLeaf = testData['IsLeaf'] === 'true';
    category.IsPicklist = testData['IsPicklist'] === 'true';
    category.Label = testData['Label'];
    category.Type = testData['Type'];
    category.CatAuto_CustomFieldPickList_c = testData['CatAuto_CustomFieldPickList_c'];
    category.CatAuto_CategoryId_c = testData['CatAuto_CategoryId_c'];
    category.GuidePage = testData['GuidePage'];
    category.LongDescription = testData['LongDescription'];
    if (testData['SearchFilterFields'] !== undefined) category.SearchFilterFields = testData['SearchFilterFields'].split(',');
    if (testData['CatAuto_Double_CstField_c'] !== undefined) category.CatAuto_Double_CstField_c = Number(testData['CatAuto_Double_CstField_c']);
    if (testData['CatAuto_Int_CstField_c'] !== undefined) category.CatAuto_Int_CstField_c = Number(testData['CatAuto_Int_CstField_c']);
    category.CatAuto_Boolean_CstField_c = testData['CatAuto_Boolean_CstField_c'] === 'true';
    category.CatAuto_String_CstField_c = testData['CatAuto_String_CstField_c'];
    category.CatAuto_Currency_CstField_c = testData['CatAuto_Currency_CstField_c'];
    category.CatAuto_DateTime_CstField_c = testData['CatAuto_DateTime_CstField_c'];
    category.CatAuto_UniqueCategoryId_c = testData['CatAuto_UniqueCategoryId_c'];
    if (testData['CatAuto_Multipicklist_CstField_c'] !== undefined)
      category.CatAuto_Multipicklist_CstField_c = testData['CatAuto_Multipicklist_CstField_c'].split(',');
    category.Currency = testData['Currency'];
    category.LargeImageURL = testData['LargeImageURL'];
    category.ImageURL = testData['ImageURL'];
    if (testData['Sequence'] !== undefined) category.Sequence = Number(testData['Sequence']);
    if (testData['ancestorId'] !== undefined) {
      category.Ancestor = new IdNameContainer();
      category.Ancestor.Id = testData['ancestorId'];
      category.Ancestor.Name = testData['ancestorName'];
    }
    if (testData['accountId'] !== undefined) {
      category.Account_c = new IdNameContainer();
      category.Account_c.Id = testData['accountId'];
      category.Account_c.Name = testData['accountName'];
    }
  }

  /** Ports createCategoriesPOJO(Map testData) - creates a single-item Category list. */
  static createCategoriesPOJO(testData: Record<string, string>): Category[] {
    const category = new Category();
    Category.mapCommonFields(category, testData);
    category.AdminAuto_CustomStringField_c = 'AdminAuto_CustomStringField_c';
    return [category];
  }

  /** Ports createCategoriesPOJO(List testData) overload. */
  static createCategoriesPOJOBulk(categoriesTestData: Record<string, string>[]): Category[] {
    return categoriesTestData.map((testData) => {
      const category = new Category();
      Category.mapCommonFields(category, testData);
      category.AdminAuto_CustomStringField_c = testData['AdminAuto_CustomStringField_c'];
      return category;
    });
  }

  /** Simplified port of UpdateCategory().updateCategoriesPOJO(Map testData) - single Category update payload. */
  static updateCategoryPOJO(testData: Record<string, string>): Category {
    const category = new Category();
    Category.mapCommonFields(category, testData);
    return category;
  }
}
