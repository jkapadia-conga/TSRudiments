import { IdNameContainer } from '../../generic/pojo/IdNameContainer';
import { CurrencyValueContainer } from '../../generic/pojo/CurrencyValueContainer';
import { PriceValueDoubleContainer } from '../../generic/pojo/PriceValueDoubleContainer';

/**
 * TypeScript port of com.conga.rlp.rudiments.quote.pojo.Quote, including all Java fields and
 * factory methods. Java's `createQuotePOJO` was overloaded (Map vs List<Map>) - the List
 * overload is renamed `createQuotePOJOList` since TypeScript does not support overloading.
 */
export class Quote {
  Id?: string;
  ABOType?: string;
  Account?: IdNameContainer;
  Amount?: PriceValueDoubleContainer;
  ApprovalStage?: string;
  ApprovalStatus?: string;
  AutoActivateOrder?: boolean;
  AutoCreateBill?: boolean;
  AutoCreateRevenue?: boolean;
  BillingPreference?: IdNameContainer;
  BillToAccount?: IdNameContainer;
  ConfigurationEffectiveDate?: string;
  ConfigurationFinalizedDate?: string;
  ConfigurationSyncDate?: string;
  Currency?: string;
  Description?: string;
  DisableCartVersioning?: boolean;
  DiscountPercent?: string;
  ExpectedEndDate?: string;
  ExpectedStartDate?: string;
  GrandTotal?: PriceValueDoubleContainer;
  Intent?: string;
  InternalDeadline?: string;
  IsAutoAccepted?: boolean;
  IsPrimary?: boolean;
  IsSystemGenerated?: boolean;
  IsTaskPending?: boolean;
  LegalEntity?: string;
  Location?: IdNameContainer;
  Name?: string;
  NetAmount?: PriceValueDoubleContainer;
  Opportunity?: IdNameContainer;
  ParentProposal?: IdNameContainer;
  PartnerAccount?: IdNameContainer;
  ProposalPaymentTerm?: string;
  PaymentTerm?: string;
  PODate?: string;
  PONumber?: string;
  PresentedDate?: string;
  PriceList?: IdNameContainer;
  PricingDate?: string;
  PrimaryContact?: IdNameContainer;
  ProposalApprovalDate?: string;
  ProposalCategory?: string;
  ProposalExpirationDate?: string;
  ProposalName?: string;
  PurchaseId?: string;
  QTCProfile?: string;
  ReadyForActivationDate?: string;
  ReadyForBillingDate?: string;
  ReadyForFulfillmentDate?: string;
  ReadyForRevRecDate?: string;
  ReadyToGenerate?: boolean;
  ReadyToPresent?: boolean;
  RelatedProposal?: string;
  RFPIntakeDate?: string;
  RFPResponseDueDate?: string;
  RFPStage?: string;
  RFPValue?: CurrencyValueContainer;
  RiskFactors?: string;
  SalesTaxAmount?: PriceValueDoubleContainer;
  SalesTaxPercent?: string;
  ShippingHandling?: CurrencyValueContainer;
  ShipToAccount?: IdNameContainer;
  SingleTransactionAdjustment?: boolean;
  SourceChannel?: string;
  SpecialTerms?: string;
  StrategicImportance?: string;
  SyncAssetChangesToQuote?: boolean;
  UseType?: string;
  ValidUntilDate?: string;
  QuoteAuto_PickList_CstField_c?: string;
  QuoteAuto_String_CstField_c?: string;
  QuoteAuto_Double_CstField_c?: number;
  QuoteAuto_Int_CstField_c?: number;
  QuoteAuto_Boolean_CstField_c?: boolean;
  QuoteAuto_Currency_CstField_c?: CurrencyValueContainer;
  QuoteAuto_DateTime_CstField_c?: string;
  QuoteAuto_Multipicklist_CstField_c?: string[];
  CreatedDate?: string;
  Items?: unknown[];
  ExternalId?: string;
  CreatedBy?: IdNameContainer;
  ModifiedBy?: IdNameContainer;
  Owner?: IdNameContainer;
  ProposalNumber?: string;
  LineNumbers?: number[];
  ContractNumbers?: string[];
  Requestor?: IdNameContainer;
  StoreFront?: IdNameContainer;

  private static mapCommonFields(quote: Quote, testData: Record<string, string>): void {
    quote.ABOType = testData['ABOType'];
    if (testData['accountId'] !== undefined) {
      quote.Account = new IdNameContainer();
      quote.Account.Id = testData['accountId'];
      quote.Account.Name = testData['accountName'];
    }
    if (testData['amountValue'] !== undefined) {
      quote.Amount = new PriceValueDoubleContainer();
      quote.Amount.Value = Number(testData['amountValue']);
    }
    quote.ApprovalStage = testData['ApprovalStage'];
    quote.AutoActivateOrder = testData['AutoActivateOrder'] === 'true';
    quote.AutoCreateBill = testData['AutoCreateBill'] === 'true';
    quote.AutoCreateRevenue = testData['AutoCreateRevenue'] === 'true';
    if (testData['billingId'] !== undefined) {
      quote.BillingPreference = new IdNameContainer();
      quote.BillingPreference.Id = testData['billingId'];
      quote.BillingPreference.Name = testData['billingName'];
    }
    if (testData['BillToAccount'] !== undefined) {
      quote.BillToAccount = new IdNameContainer();
      quote.BillToAccount.Id = testData['billToAccountId'];
      quote.BillToAccount.Name = testData['billToAccountName'];
    }
    quote.ConfigurationEffectiveDate = testData['ConfigurationEffectiveDate'];
    quote.ConfigurationFinalizedDate = testData['ConfigurationFinalizedDate'];
    quote.ConfigurationSyncDate = testData['ConfigurationSyncDate'];
    quote.Currency = testData['Currency'];
    quote.Description = testData['Description'];
    quote.DisableCartVersioning = testData['DisableCartVersioning'] === 'true';
    quote.DiscountPercent = testData['DiscountPercent'];
    quote.ExpectedEndDate = testData['ExpectedEndDate'];
    quote.ExpectedStartDate = testData['ExpectedStartDate'];
    if (testData['grandTotalValue'] !== undefined) {
      quote.GrandTotal = new PriceValueDoubleContainer();
      quote.GrandTotal.Value = Number(testData['grandTotalValue']);
    }
    quote.Intent = testData['Intent'];
    quote.InternalDeadline = testData['InternalDeadline'];
    quote.IsAutoAccepted = testData['IsAutoAccepted'] === 'true';
    quote.IsPrimary = testData['IsPrimary'] === 'true';
    quote.IsSystemGenerated = testData['IsSystemGenerated'] === 'true';
    quote.IsTaskPending = testData['IsTaskPending'] === 'true';
    quote.LegalEntity = testData['LegalEntity'];
    if (testData['Location'] !== undefined) {
      quote.Location = new IdNameContainer();
      quote.Location.Id = testData['locationId'];
      quote.Location.Name = testData['locationName'];
    }
    quote.Name = testData['Name'];
    if (testData['netAmountValue'] !== undefined) {
      quote.NetAmount = new PriceValueDoubleContainer();
      quote.NetAmount.Value = Number(testData['netAmountValue']);
    }
    if (testData['Opportunity'] !== undefined) {
      quote.Opportunity = new IdNameContainer();
      quote.Opportunity.Id = testData['opportunityId'];
      quote.Opportunity.Name = testData['opportunityName'];
    }
    if (testData['ParentProposal'] !== undefined) {
      quote.ParentProposal = new IdNameContainer();
      quote.ParentProposal.Id = testData['parentProposalId'];
      quote.ParentProposal.Name = testData['parentProposalName'];
    }
    if (testData['partnerAccountId'] !== undefined) {
      quote.PartnerAccount = new IdNameContainer();
      quote.PartnerAccount.Id = testData['partnerAccountId'];
      quote.PartnerAccount.Name = testData['partnerAccountName'];
    }
    if (testData['requestorId'] !== undefined) {
      quote.Requestor = new IdNameContainer();
      quote.Requestor.Id = testData['requestorId'];
      quote.Requestor.Name = testData['requestorName'];
    }
    if (testData['storeFrontId'] !== undefined) {
      quote.StoreFront = new IdNameContainer();
      quote.StoreFront.Id = testData['storeFrontId'];
      quote.StoreFront.Name = testData['storeFrontName'];
    }
    quote.ProposalPaymentTerm = testData['ProposalPaymentTerm'];
    quote.PaymentTerm = testData['PaymentTerm'];
    quote.PODate = testData['PODate'];
    quote.PONumber = testData['PONumber'];
    quote.PresentedDate = testData['PresentedDate'];
    if (testData['PriceList'] !== undefined) {
      quote.PriceList = new IdNameContainer();
      quote.PriceList.Id = testData['priceListId'];
      quote.PriceList.Name = testData['priceListName'];
    }
    quote.PricingDate = testData['PricingDate'];
    if (testData['PrimaryContact'] !== undefined) {
      quote.PrimaryContact = new IdNameContainer();
      quote.PrimaryContact.Id = testData['primaryContactId'];
      quote.PrimaryContact.Name = testData['primaryContactName'];
    }
    quote.ProposalApprovalDate = testData['ProposalApprovalDate'];
    quote.ProposalCategory = testData['ProposalCategory'];
    quote.ProposalExpirationDate = testData['ProposalExpirationDate'];
    quote.ProposalName = testData['ProposalName'];
    quote.PurchaseId = testData['PurchaseId'];
    quote.QTCProfile = testData['QTCProfile'];
    quote.ReadyForActivationDate = testData['ReadyForActivationDate'];
    quote.ReadyForBillingDate = testData['ReadyForBillingDate'];
    quote.ReadyForFulfillmentDate = testData['ReadyForFulfillmentDate'];
    quote.ReadyForRevRecDate = testData['ReadyForRevRecDate'];
    quote.ReadyToGenerate = testData['ReadyToGenerate'] === 'true';
    quote.ReadyToPresent = testData['ReadyToPresent'] === 'true';
    quote.RelatedProposal = testData['RelatedProposal'];
    quote.RFPIntakeDate = testData['RFPIntakeDate'];
    quote.RFPResponseDueDate = testData['RFPResponseDueDate'];
    quote.RFPStage = testData['RFPStage'];
    quote.RiskFactors = testData['RiskFactors'];
    if (testData['salesTaxAmountValue'] !== undefined) {
      quote.SalesTaxAmount = new PriceValueDoubleContainer();
      quote.SalesTaxAmount.Value = Number(testData['salesTaxAmountValue']);
    }
    quote.SalesTaxPercent = testData['SalesTaxPercent'];
    if (testData['ShipToAccount'] !== undefined) {
      quote.ShipToAccount = new IdNameContainer();
      quote.ShipToAccount.Id = testData['shipToAccountId'];
      quote.ShipToAccount.Name = testData['shipToAccountName'];
    }
    quote.SingleTransactionAdjustment = testData['SingleTransactionAdjustment'] === 'true';
    quote.SourceChannel = testData['SourceChannel'];
    quote.SpecialTerms = testData['SpecialTerms'];
    quote.StrategicImportance = testData['StrategicImportance'];
    quote.SyncAssetChangesToQuote = testData['SyncAssetChangesToQuote'] === 'true';
    quote.UseType = testData['UseType'];
    quote.ValidUntilDate = testData['ValidUntilDate'];
    quote.QuoteAuto_Boolean_CstField_c = testData['QuoteAuto_Boolean_CstField_c'] === 'true';
    quote.QuoteAuto_PickList_CstField_c = testData['QuoteAuto_PickList_CstField_c'];
    quote.QuoteAuto_String_CstField_c = testData['QuoteAuto_String_CstField_c'];
    if (testData['QuoteAuto_Double_CstField_c'] !== undefined) quote.QuoteAuto_Double_CstField_c = Number(testData['QuoteAuto_Double_CstField_c']);
    if (testData['QuoteAuto_Int_CstField_c'] !== undefined) quote.QuoteAuto_Int_CstField_c = Number(testData['QuoteAuto_Int_CstField_c']);
    if (testData['RFPValue'] !== undefined) {
      quote.RFPValue = new CurrencyValueContainer();
      quote.RFPValue.Value = Number(testData['RFPValue']);
      quote.RFPValue.CurrencyCode = 'USD';
    }
    if (testData['ShippingHandling'] !== undefined) {
      quote.ShippingHandling = new CurrencyValueContainer();
      quote.ShippingHandling.Value = Number(testData['ShippingHandling']);
      quote.ShippingHandling.CurrencyCode = 'USD';
    }
    if (testData['Owner'] !== undefined) {
      quote.Owner = new IdNameContainer();
      quote.Owner.Id = testData['ownerId'];
      quote.Owner.Name = testData['ownerName'];
    }
    if (testData['QuoteAuto_Currency_CstField_c'] !== undefined) {
      quote.QuoteAuto_Currency_CstField_c = new CurrencyValueContainer();
      quote.QuoteAuto_Currency_CstField_c.Value = Number(testData['QuoteAuto_Currency_CstField_c']);
      quote.QuoteAuto_Currency_CstField_c.CurrencyCode = 'USD';
    }
    quote.QuoteAuto_DateTime_CstField_c = testData['QuoteAuto_DateTime_CstField_c'];
    if (testData['QuoteAuto_Multipicklist_CstField_c'] !== undefined)
      quote.QuoteAuto_Multipicklist_CstField_c = testData['QuoteAuto_Multipicklist_CstField_c'].split(',');
    quote.ExternalId = testData['ExternalId'];
    if (testData['ContractNumbers'] !== undefined) quote.ContractNumbers = testData['ContractNumbers'].split(',');
  }

  /** Ports createQuote(Map testData) - single Quote payload. */
  static createQuote(testData: Record<string, string>): Quote {
    const quote = new Quote();
    Quote.mapCommonFields(quote, testData);
    return quote;
  }

  /** Ports createQuotePOJO(Map testData) - single-item Quote list. */
  static createQuotePOJO(testData: Record<string, string>): Quote[] {
    const quote = new Quote();
    Quote.mapCommonFields(quote, testData);
    return [quote];
  }

  /** Ports createQuotePOJO(List testData) overload. */
  static createQuotePOJOList(testData: Record<string, string>[]): Quote[] {
    return testData.map((quoteMap) => {
      const quote = new Quote();
      Quote.mapCommonFields(quote, quoteMap);
      return quote;
    });
  }

  /** Ports upsertQuote(Map testData). */
  static upsertQuote(testData: Record<string, string>): Quote {
    const quote = new Quote();
    Quote.mapCommonFields(quote, testData);
    quote.Id = testData['Id'];
    if (testData['LineNumbers'] !== undefined) quote.LineNumbers = testData['LineNumbers'].split(',').map(Number);
    return quote;
  }

  /** Ports checkoutQuotePOJO(Map mapTestData). */
  static checkoutQuotePOJO(mapTestData: Record<string, string>): Quote {
    const quoteMap = new Quote();
    if (mapTestData['Name'] !== undefined) quoteMap.Name = mapTestData['Name'];
    if (mapTestData['rfpResponseDueDate'] !== undefined) quoteMap.RFPResponseDueDate = mapTestData['RFPResponseDueDate'];
    if (mapTestData['BillToAccount'] !== undefined) {
      quoteMap.BillToAccount = new IdNameContainer();
      quoteMap.BillToAccount.Id = mapTestData['billToAccountId'];
      quoteMap.BillToAccount.Name = mapTestData['billToAccountName'];
    }
    if (mapTestData['ShipToAccount'] !== undefined) {
      quoteMap.ShipToAccount = new IdNameContainer();
      quoteMap.ShipToAccount.Id = mapTestData['shipToAccountId'];
      quoteMap.ShipToAccount.Name = mapTestData['shipToAccountName'];
    }
    if (mapTestData['PrimaryContact'] !== undefined) {
      quoteMap.PrimaryContact = new IdNameContainer();
      quoteMap.PrimaryContact.Id = mapTestData['primaryContactId'];
      quoteMap.PrimaryContact.Name = mapTestData['primaryContactName'];
    }
    if (mapTestData['ExternalId'] !== undefined) quoteMap.ExternalId = mapTestData['ExternalId'];
    if (mapTestData['QuoteAuto_Boolean_CstField_c'] !== undefined) quoteMap.QuoteAuto_Boolean_CstField_c = mapTestData['QuoteAuto_Boolean_CstField_c'] === 'true';
    if (mapTestData['QuoteAuto_PickList_CstField_c'] !== undefined) quoteMap.QuoteAuto_PickList_CstField_c = mapTestData['QuoteAuto_PickList_CstField_c'];
    if (mapTestData['QuoteAuto_String_CstField_c'] !== undefined) quoteMap.QuoteAuto_String_CstField_c = mapTestData['QuoteAuto_String_CstField_c'];
    if (mapTestData['QuoteAuto_Double_CstField_c'] !== undefined) quoteMap.QuoteAuto_Double_CstField_c = Number(mapTestData['QuoteAuto_Double_CstField_c']);
    if (mapTestData['QuoteAuto_Int_CstField_c'] !== undefined) quoteMap.QuoteAuto_Int_CstField_c = Number(mapTestData['QuoteAuto_Int_CstField_c']);
    if (mapTestData['QuoteAuto_DateTime_CstField_c'] !== undefined) quoteMap.QuoteAuto_DateTime_CstField_c = mapTestData['QuoteAuto_DateTime_CstField_c'];
    if (mapTestData['QuoteAuto_Multipicklist_CstField_c'] !== undefined)
      quoteMap.QuoteAuto_Multipicklist_CstField_c = mapTestData['QuoteAuto_Multipicklist_CstField_c'].split(',');
    if (mapTestData['QuoteAuto_Currency_CstField_c'] !== undefined) {
      quoteMap.QuoteAuto_Currency_CstField_c = new CurrencyValueContainer();
      quoteMap.QuoteAuto_Currency_CstField_c.Value = Number(mapTestData['QuoteAuto_Currency_CstField_c']);
      quoteMap.QuoteAuto_Currency_CstField_c.CurrencyCode = 'USD';
    }
    if (mapTestData['ContractNumbers'] !== undefined) quoteMap.ContractNumbers = mapTestData['ContractNumbers'].split(',');
    return quoteMap;
  }
}
