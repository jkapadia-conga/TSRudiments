import { SortPOJO } from './SortPOJO';

/** TypeScript port of com.conga.rlp.rudiments.data.pojo.QueryEditor. */
export class QueryEditor {
  ObjectName?: string;
  criteria?: string;
  Select?: string[];
  Distinct?: boolean;
  Limit?: number;
  Skip?: number;
  Sort?: SortPOJO;

  /** Ports performQuerySearch(Map testData, List selectList). */
  static performQuerySearch(testData: Record<string, string>, selectList: string[]): QueryEditor {
    const queryEditor = new QueryEditor();
    queryEditor.ObjectName = testData['objectName'];
    queryEditor.criteria = testData['criteria'];
    queryEditor.Select = selectList;
    queryEditor.Distinct = testData['distinct'] === 'true';
    if (testData['limit'] !== undefined) queryEditor.Limit = Number(testData['limit']);
    if (testData['skip'] !== undefined) queryEditor.Skip = Number(testData['skip']);
    if (testData['fieldName'] !== undefined && testData['orderBy'] !== undefined) {
      queryEditor.Sort = SortPOJO.createSortPOJO(testData);
    }
    return queryEditor;
  }
}
