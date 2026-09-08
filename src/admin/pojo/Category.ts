import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.Category, including all Java fields
 * and factory methods.
 */
export class Category {
  Id?: string;
  [key: string]: unknown;

  getId(): string | undefined {
    return this.Id;
  }

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
  Currency?: string;
  LargeImageURL?: string;
  Children?: Category[];
  ImageURL?: string;
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
    category.CatAuto_CategoryId_c = testData['CatAuto_CategoryId_c'];
    category.GuidePage = testData['GuidePage'];
    category.LongDescription = testData['LongDescription'];
    if (testData['SearchFilterFields'] !== undefined) category.SearchFilterFields = testData['SearchFilterFields'].split(',');
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
    return [category];
  }

  /** Ports createCategoriesPOJO(List testData) overload. */
  static createCategoriesPOJOBulk(categoriesTestData: Record<string, string>[]): Category[] {
    return categoriesTestData.map((testData) => {
      const category = new Category();
      Category.mapCommonFields(category, testData);
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
