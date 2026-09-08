import { AdminPojoBase } from './AdminPojoBase';
import { IdNameContainer } from '../../generic/pojo/IdNameContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.FeatureSet, including all Java fields
 * and factory methods.
 */
export class FeatureSet extends AdminPojoBase {
  Name?: string;
  Description?: string;
  Sequence?: number;
  CreatedDate?: string;
  ModifiedDate?: string;
  ExternalId?: string;
  Currency?: string;
  CreatedBy?: IdNameContainer;
  ModifiedBy?: IdNameContainer;
  AdminAuto_CustomFieldPickList_c?: string;
  AdminAuto_CustomStringField_c?: string;
  AdminAuto_Double_CstField_c?: number;
  AdminAuto_Int_CstField_c?: number;
  AdminAuto_Boolean_CstField_c?: boolean;
  AdminAuto_DateTime_CstField_c?: string;
  AdminAuto_Multipicklist_CstField_c?: string[];

  /** Ports createFeatureSetPojo(List testData). */
  static createFeatureSetPojo(lstMapTestData: Record<string, string>[]): FeatureSet[] {
    return lstMapTestData.map((mapTestData) => {
      const pojo = new FeatureSet();
      pojo.Name = mapTestData['Name'];
      pojo.Description = mapTestData['Description'];
      if (mapTestData['Sequence'] !== undefined) pojo.Sequence = Number(mapTestData['Sequence']);
      pojo.CreatedDate = mapTestData['CreatedDate'];
      pojo.Currency = mapTestData['Currency'];
      pojo.ModifiedDate = mapTestData['ModifiedDate'];
      pojo.ExternalId = mapTestData['ExternalId'];
      if (mapTestData['AdminAuto_CustomStringField_c'] !== undefined) pojo.AdminAuto_CustomStringField_c = mapTestData['AdminAuto_CustomStringField_c'];
      if (mapTestData['AdminAuto_CustomFieldPickList_c'] !== undefined) pojo.AdminAuto_CustomFieldPickList_c = mapTestData['AdminAuto_CustomFieldPickList_c'];
      if (mapTestData['AdminAuto_Double_CstField_c'] !== undefined) pojo.AdminAuto_Double_CstField_c = Number(mapTestData['AdminAuto_Double_CstField_c']);
      if (mapTestData['AdminAuto_Int_CstField_c'] !== undefined) pojo.AdminAuto_Int_CstField_c = Number(mapTestData['AdminAuto_Int_CstField_c']);
      if (mapTestData['AdminAuto_Boolean_CstField_c'] !== undefined) pojo.AdminAuto_Boolean_CstField_c = mapTestData['AdminAuto_Boolean_CstField_c'] === 'true';
      if (mapTestData['AdminAuto_DateTime_CstField_c'] !== undefined) pojo.AdminAuto_DateTime_CstField_c = mapTestData['AdminAuto_DateTime_CstField_c'];
      if (mapTestData['AdminAuto_Multipicklist_CstField_c'] !== undefined)
        pojo.AdminAuto_Multipicklist_CstField_c = mapTestData['AdminAuto_Multipicklist_CstField_c'].split(',');
      return pojo;
    });
  }
}
