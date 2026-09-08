/** Simplified port of the Java DisplaySettings column shape used inside View's column lists. */
export interface ViewColumn {
  FieldName?: string;
  Sequence?: number;
}

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.View, including all Java fields and
 * factory methods. Filter/Sort are kept as passthrough shapes (their pojo classes are out of
 * scope for this migration).
 */
export class View {
  Id?: string;
  [key: string]: unknown;

  getId(): string | undefined {
    return this.Id;
  }

  Name?: string;
  GroupBy?: string[];
  IsDefault?: boolean;
  LeftColumns?: ViewColumn[];
  MiddleColumns?: ViewColumn[];
  RightColumns?: ViewColumn[];
  Filter?: unknown[];
  Message?: string;
  Status?: string;
  Type?: string;
  For?: string;
  Sort?: unknown;
  FilterExpression?: string;
  Users?: string[];
  Roles?: string[];

  /** Ports createViewPOJO(List testData). */
  static createViewPOJO(lstMapTestData: Record<string, string>[]): View[] {
    return lstMapTestData.map((viewMap) => {
      const view = new View();
      view.Name = viewMap['Name'];
      if (viewMap['GroupBy'] !== undefined) view.GroupBy = viewMap['GroupBy'].split(',');
      view.IsDefault = viewMap['IsDefault'] === 'true';
      view.Type = viewMap['Type'];
      view.FilterExpression = viewMap['FilterExpression'];
      if (viewMap['Users'] !== undefined) view.Users = viewMap['Users'].split(',');
      if (viewMap['Roles'] !== undefined) view.Roles = viewMap['Roles'].split(',');
      return view;
    });
  }

  /** Ports createViewPOJO(List testData, List left, List middle, List right) overload. */
  static createViewPOJOWithColumns(
    lstMapTestData: Record<string, string>[],
    lstLeftColumn: Record<string, string>[],
    lstMiddleColumn: Record<string, string>[],
    lstRightColumn: Record<string, string>[],
  ): View[] {
    const toColumns = (rows: Record<string, string>[]): ViewColumn[] =>
      rows.map((row) => ({ FieldName: row['FieldName'], Sequence: Number(row['Sequence']) }));

    return lstMapTestData.map((viewMap) => {
      const view = new View();
      view.Name = viewMap['Name'];
      view.GroupBy = viewMap['GroupBy'] ? viewMap['GroupBy'].split(',') : undefined;
      view.IsDefault = viewMap['IsDefault'] === 'true';
      view.Type = viewMap['Type'];
      view.FilterExpression = viewMap['FilterExpression'];
      if (viewMap['LeftColumns'] !== undefined) view.LeftColumns = toColumns(lstLeftColumn);
      if (viewMap['MiddleColumns'] !== undefined) view.MiddleColumns = toColumns(lstMiddleColumn);
      if (viewMap['RightColumns'] !== undefined) view.RightColumns = toColumns(lstRightColumn);
      if (viewMap['Users'] !== undefined) view.Users = viewMap['Users'].split(',');
      if (viewMap['Roles'] !== undefined) view.Roles = viewMap['Roles'].split(',');
      return view;
    });
  }
}
