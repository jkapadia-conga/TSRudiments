/** TypeScript port of com.conga.rlp.rudiments.data.pojo.SortPOJO. */
export class SortPOJO {
  FieldName?: string;
  OrderBy?: string;

  /** Ports createSortPOJO(Map testData). */
  static createSortPOJO(testData: Record<string, string>): SortPOJO {
    const sortPOJO = new SortPOJO();
    sortPOJO.FieldName = testData['fieldName'];
    sortPOJO.OrderBy = testData['orderBy'];
    return sortPOJO;
  }
}
