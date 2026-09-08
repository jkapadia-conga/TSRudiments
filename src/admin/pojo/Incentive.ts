import { AdminPojoBase } from './AdminPojoBase';
import { IdNameContainer } from '../../generic/pojo/IdNameContainer';
import { CurrencyValueContainer } from '../../generic/pojo/CurrencyValueContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.admin.pojo.Incentive (IncentiveAdmin PricePrograms
 * family), including all Java fields and factory methods.
 */
export class Incentive extends AdminPojoBase {
  Name?: string;
  IsActive?: boolean;
  ApplicationMethod?: string;
  BenefitUom?: string;
  ContextType?: string;
  Description?: string;
  EffectiveDate?: string;
  ExpirationDate?: string;
  IncentiveCode?: string;
  IncentiveGroup?: IdNameContainer;
  Sequence?: number;
  ExternalId?: string;
  CombineWithOtherIncentives?: boolean;
  AutoApply?: boolean;
  AccountScope?: string[];
  AccountScopeOper?: string;
  AccountTypeScope?: string[];
  AccountTypeScopeOper?: string;
  CountryScope?: string[];
  CountryScopeOper?: string;
  PriceListScope?: string[];
  PriceListScopeOper?: string;
  ProductFamilyScope?: string[];
  ProductFamilyScopeOper?: string;
  ProductGroupScope?: string[];
  ProductGroupScopeOper?: string;
  ProductScope?: string[];
  ProductScopeOper?: string;
  RegionScope?: string[];
  RegionScopeOper?: string;
  Criteria?: string;
  StopProcessingMoreIncentives?: boolean;
  SubUseType?: string;
  UseType?: string;
  RebateAuto_PickList_CstField_c?: string;
  RebateAuto_String_CstField_c?: string;
  RebateAuto_Double_CstField_c?: number;
  RebateAuto_Int_CstField_c?: number;
  RebateAuto_Boolean_CstField_c?: boolean;
  RebateAuto_Currency_CstField_c?: CurrencyValueContainer;
  RebateAuto_DateTime_CstField_c?: string;
  RebateAuto_Multipicklist_CstField_c?: string[];
  CreatedDate?: string;
  ModifiedDate?: string;
  Rules?: unknown[];
  EnableCurrency?: boolean;
  Currency?: string;
  IncentiveProgram?: IdNameContainer;
  CascadeBenefitsForBundles?: boolean;
  EnableBenefitEffectivityDates?: boolean;
  IncentiveConditionExpression?: string;
  AdhocGroupScope?: string[];
  ContractNumbers?: string[];

  /** Ports createIncentivePOJO(List testData) - creates the incentive/rebate list. */
  static createIncentivePOJO(lstMapTestData: Record<string, string>[]): Incentive[] {
    return lstMapTestData.map((incentiveMap) => {
      const incentive = new Incentive();
      incentive.Name = incentiveMap['Name'];
      incentive.ApplicationMethod = incentiveMap['ApplicationMethod'];
      incentive.ContextType = incentiveMap['ContextType'];
      incentive.AutoApply = incentiveMap['AutoApply'] === 'true';
      incentive.EffectiveDate = incentiveMap['EffectiveDate'];
      incentive.ExpirationDate = incentiveMap['ExpirationDate'];
      incentive.CombineWithOtherIncentives = incentiveMap['CombineWithOtherIncentives'] === 'true';
      incentive.EnableBenefitEffectivityDates = incentiveMap['EnableBenefitEffectivityDates'] === 'true';
      incentive.IsActive = incentiveMap['IsActive'] === 'true';
      incentive.Description = incentiveMap['Description'];
      incentive.BenefitUom = incentiveMap['BenefitUom'];
      incentive.ExternalId = incentiveMap['ExternalId'];
      incentive.IncentiveCode = incentiveMap['IncentiveCode'];
      incentive.CascadeBenefitsForBundles = incentiveMap['CascadeBenefitsForBundles'] === 'true';
      incentive.IncentiveConditionExpression = incentiveMap['IncentiveConditionExpression'];
      if (incentiveMap['Id'] !== undefined) incentive.Id = incentiveMap['Id'];
      if (incentiveMap['Sequence'] !== undefined) incentive.Sequence = Number(incentiveMap['Sequence']);
      if (incentiveMap['AccountScope'] !== undefined) {
        incentive.AccountScope = incentiveMap['AccountScope'].split(',');
        incentive.AccountScopeOper = incentiveMap['AccountScopeOper'];
      }
      if (incentiveMap['AccountTypeScope'] !== undefined) {
        incentive.AccountTypeScope = incentiveMap['AccountTypeScope'].split(',');
        incentive.AccountTypeScopeOper = incentiveMap['AccountTypeScopeOper'];
      }
      if (incentiveMap['CountryScope'] !== undefined) {
        incentive.CountryScope = incentiveMap['CountryScope'].split(',');
        incentive.CountryScopeOper = incentiveMap['CountryScopeOper'];
      }
      if (incentiveMap['PriceListScope'] !== undefined) {
        incentive.PriceListScope = incentiveMap['PriceListScope'].split(',');
        incentive.PriceListScopeOper = incentiveMap['PriceListScopeOper'];
      }
      if (incentiveMap['ProductFamilyScope'] !== undefined) {
        incentive.ProductFamilyScope = incentiveMap['ProductFamilyScope'].split(',');
        incentive.ProductFamilyScopeOper = incentiveMap['ProductFamilyScopeOper'];
      }
      if (incentiveMap['ProductGroupScope'] !== undefined) {
        incentive.ProductGroupScope = incentiveMap['ProductGroupScope'].split(',');
        incentive.ProductGroupScopeOper = incentiveMap['ProductGroupScopeOper'];
      }
      if (incentiveMap['ProductScope'] !== undefined) {
        incentive.ProductScope = incentiveMap['ProductScope'].split(',');
        incentive.ProductScopeOper = incentiveMap['ProductScopeOper'];
      }
      if (incentiveMap['RegionScope'] !== undefined) {
        incentive.RegionScope = incentiveMap['RegionScope'].split(',');
        incentive.RegionScopeOper = incentiveMap['RegionScopeOper'];
      }
      incentive.Criteria = incentiveMap['Criteria'];
      if (incentiveMap['SubUseType'] !== undefined) incentive.SubUseType = incentiveMap['SubUseType'];
      if (incentiveMap['UseType'] !== undefined) incentive.UseType = incentiveMap['UseType'];
      incentive.StopProcessingMoreIncentives = incentiveMap['StopProcessingMoreIncentives'] === 'true';
      if (incentiveMap['RebateAuto_Boolean_CstField_c'] !== undefined) incentive.RebateAuto_Boolean_CstField_c = incentiveMap['RebateAuto_Boolean_CstField_c'] === 'true';
      if (incentiveMap['RebateAuto_PickList_CstField_c'] !== undefined) incentive.RebateAuto_PickList_CstField_c = incentiveMap['RebateAuto_PickList_CstField_c'];
      if (incentiveMap['RebateAuto_String_CstField_c'] !== undefined) incentive.RebateAuto_String_CstField_c = incentiveMap['RebateAuto_String_CstField_c'];
      if (incentiveMap['RebateAuto_Double_CstField_c'] !== undefined) incentive.RebateAuto_Double_CstField_c = Number(incentiveMap['RebateAuto_Double_CstField_c']);
      if (incentiveMap['RebateAuto_Int_CstField_c'] !== undefined) incentive.RebateAuto_Int_CstField_c = Number(incentiveMap['RebateAuto_Int_CstField_c']);
      if (incentiveMap['RebateAuto_DateTime_CstField_c'] !== undefined) incentive.RebateAuto_DateTime_CstField_c = incentiveMap['RebateAuto_DateTime_CstField_c'];
      if (incentiveMap['RebateAuto_Multipicklist_CstField_c'] !== undefined)
        incentive.RebateAuto_Multipicklist_CstField_c = incentiveMap['RebateAuto_Multipicklist_CstField_c'].split(',');
      if (incentiveMap['RebateAuto_Currency_CstField_c'] !== undefined) {
        const currency = new CurrencyValueContainer();
        currency.Value = Number(incentiveMap['RebateAuto_Currency_CstField_c']);
        currency.CurrencyCode = 'USD';
        incentive.RebateAuto_Currency_CstField_c = currency;
      }
      if (incentiveMap['EnableCurrency'] !== undefined) incentive.EnableCurrency = incentiveMap['EnableCurrency'] === 'true';
      if (incentiveMap['Currency'] !== undefined) incentive.Currency = incentiveMap['Currency'];
      if (incentiveMap['incentiveProgramId'] !== undefined) {
        incentive.IncentiveProgram = new IdNameContainer();
        incentive.IncentiveProgram.Id = incentiveMap['incentiveProgramId'];
        incentive.IncentiveProgram.Name = incentiveMap['incentiveProgramName'];
      }
      if (incentiveMap['AdhocGroupScope'] !== undefined) incentive.AdhocGroupScope = incentiveMap['AdhocGroupScope'].split(',');
      return incentive;
    });
  }

  /** Ports createIncentivePOJO(Map testData) overload - single Incentive/rebate payload. */
  static createSingleIncentivePOJO(incentiveMap: Record<string, string>): Incentive {
    const incentive = new Incentive();
    incentive.Name = incentiveMap['Name'];
    incentive.ApplicationMethod = incentiveMap['ApplicationMethod'];
    incentive.ContextType = incentiveMap['ContextType'];
    if (incentiveMap['AutoApply'] !== undefined) incentive.AutoApply = incentiveMap['AutoApply'] === 'true';
    incentive.EffectiveDate = incentiveMap['EffectiveDate'];
    incentive.ExpirationDate = incentiveMap['ExpirationDate'];
    if (incentiveMap['CombineWithOtherIncentives'] !== undefined) incentive.CombineWithOtherIncentives = incentiveMap['CombineWithOtherIncentives'] === 'true';
    if (incentiveMap['IsActive'] !== undefined) incentive.IsActive = incentiveMap['IsActive'] === 'true';
    incentive.Description = incentiveMap['Description'];
    incentive.BenefitUom = incentiveMap['BenefitUom'];
    incentive.ExternalId = incentiveMap['ExternalId'];
    incentive.IncentiveCode = incentiveMap['IncentiveCode'];
    if (incentiveMap['Sequence'] !== undefined) incentive.Sequence = Number(incentiveMap['Sequence']);
    if (incentiveMap['RebateAuto_String_CstField_c'] !== undefined) incentive.RebateAuto_String_CstField_c = incentiveMap['RebateAuto_String_CstField_c'];
    if (incentiveMap['AdhocGroupScope'] !== undefined) incentive.AdhocGroupScope = incentiveMap['AdhocGroupScope'].split(',');
    return incentive;
  }
}
