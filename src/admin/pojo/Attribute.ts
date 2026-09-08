import { PickListValue } from '../../generic/pojo/PickListValue';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.Attribute, including all Java fields
 * and factory methods.
 */
export class Attribute {
  Id?: string;
  [key: string]: unknown;

  getId(): string | undefined {
    return this.Id;
  }

  Name?: string;
  ExternalId?: string;
  Type?: string;
  DefaultValue?: string;
  PickListValue?: PickListValue[];
  LookupObjectName?: string;
  DisplayName?: string;
  Description?: string;
  IsRequired?: boolean;
  CreatedDate?: string;
  Scale?: number;
  Precision?: number;
  HelpText?: string;
  Length?: number;

  private static mapCommonFields(pojo: Attribute, testData: Record<string, string>): void {
    pojo.Name = testData['Name'];
    pojo.ExternalId = testData['ExternalId'];
    pojo.Type = testData['Type'];
    pojo.DefaultValue = testData['DefaultValue'];
    pojo.LookupObjectName = testData['LookupObjectName'];
    pojo.DisplayName = testData['DisplayName'];
    pojo.Description = testData['Description'];
    pojo.IsRequired = testData['IsRequired'] === 'true';
    if (testData['Scale'] !== undefined) pojo.Scale = Number(testData['Scale']);
    if (testData['Precision'] !== undefined) pojo.Precision = Number(testData['Precision']);
    if (testData['Length'] !== undefined) pojo.Length = Number(testData['Length']);
    pojo.HelpText = testData['HelpText'];
  }

  private static toPickListValues(pickListValueTestData: Record<string, string>[]): PickListValue[] {
    return pickListValueTestData.map((row) => {
      const value = new PickListValue();
      value.Key = row['Key'];
      value.Value = row['Value'];
      value.Sequence = Number(row['Sequence']);
      value.ImageURL = row['ImageURL'];
      return value;
    });
  }

  /** Ports createAttributePojo(Map testData) - creates a single-item Attribute list. */
  static createAttributePojo(testData: Record<string, string>): Attribute[] {
    const pojo = new Attribute();
    Attribute.mapCommonFields(pojo, testData);
    return [pojo];
  }

  /** Ports createAllDataTypeAttributePojo(List testData, List pickListValueTestData). */
  static createAllDataTypeAttributePojo(
    testData: Record<string, string>[],
    pickListValueTestData: Record<string, string>[],
  ): Attribute[] {
    return testData.map((row) => {
      const pojo = new Attribute();
      Attribute.mapCommonFields(pojo, row);
      const type = row['Type'] ?? '';
      if (type.toLowerCase() === 'multipicklist' || type.toLowerCase() === 'picklist') {
        pojo.PickListValue = Attribute.toPickListValues(pickListValueTestData);
      }
      return pojo;
    });
  }

  /** Ports createSpecificNumberOfAttributePojo(Map testData). */
  static createSpecificNumberOfAttributePojo(testData: Record<string, string>): Attribute[] {
    const count = Number(testData['NumberOfAttribute']);
    const result: Attribute[] = [];
    for (let i = 0; i < count; i++) {
      const pojo = new Attribute();
      Attribute.mapCommonFields(pojo, testData);
      pojo.Name = `${testData['Name']}_${i}`;
      result.push(pojo);
    }
    return result;
  }

  /** Ports createAttributeTypePicklistPojo(Map testData, List pickListValueTestData). */
  static createAttributeTypePicklistPojo(testData: Record<string, string>, pickListValueTestData: Record<string, string>[]): Attribute[] {
    const pojo = new Attribute();
    Attribute.mapCommonFields(pojo, testData);
    pojo.PickListValue = Attribute.toPickListValues(pickListValueTestData);
    return [pojo];
  }

  /** Ports createMultipleAttributePojo(List testData). */
  static createMultipleAttributePojo(testData: Record<string, string>[]): Attribute[] {
    return testData.map((row) => {
      const pojo = new Attribute();
      Attribute.mapCommonFields(pojo, row);
      return pojo;
    });
  }

  /** Ports createMultipleAttributeTypePicklistPojo(List pickListValueAttributeTestData). */
  static createMultipleAttributeTypePicklistPojo(pickListValueAttributeTestData: Record<string, string>[]): Attribute[] {
    return pickListValueAttributeTestData.map((testData) => {
      const pojo = new Attribute();
      Attribute.mapCommonFields(pojo, testData);
      const pickListValueTestData: Record<string, string>[] = testData['PickListValue'] ? JSON.parse(testData['PickListValue']) : [];
      pojo.PickListValue = Attribute.toPickListValues(pickListValueTestData);
      return pojo;
    });
  }
}
