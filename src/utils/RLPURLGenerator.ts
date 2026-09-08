/**
 * TypeScript port of com.conga.rlp.rudiments.utils.RLPURLGenerator, trimmed to only the
 * URL fields consumed by the scoped RLPAdminHelper / RLPUserManagementHelper / RLPQuoteHelper /
 * RLPCartHelper / RLPConfigHelper / RLPDataManagerHelper / RLPDataHelper methods migrated here.
 * The constructor prefixes every field with tenantURL, mirroring the Java constructor.
 */
export class RLPURLGenerator {
  // Product / PriceList / Category
  createPriceListAPI = '/api/revenue-admin/v1/price-lists';
  updatePriceListAPI = '/api/revenue-admin/v1/price-lists/{Id}';
  createProductAPI = '/api/revenue-admin/v1/products';
  updateProductAPI = '/api/revenue-admin/v1/products/{Id}';
  productGroupAPI = '/api/revenue-admin/v1/product-groups';
  createPriceListItemAPI = '/api/revenue-admin/v1/price-lists/{priceListId}/price-list-items';
  updatePriceListItemAPI = '/api/revenue-admin/v1/price-lists/{priceListId}/price-list-items/{Id}';
  createCategoryAPI = '/api/revenue-admin/v1/categories';
  updateCategoryAPI = '/api/revenue-admin/v1/categories/{Id}';
  productCategoryAPI = '/api/revenue-admin/v1/categories/{categoryId}/product-categories';
  hierarchiesURL = '/api/revenue-admin/v1/hierarchies/{hierarchyId}';
  priceListCategoryAPI = '/api/revenue-admin/v1/price-lists/{priceListId}/price-list-categories';
  priceListCategoryByIdAPI = '/api/revenue-admin/v1/price-lists/{priceListId}/price-list-categories/{Id}';

  // StoreFront
  storefrontAPI = '/api/revenue-admin/v1/storefronts';
  storefrontByIdAPI = '/api/revenue-admin/v1/storefronts/{Id}';

  // OptionGroup / ProductOptionGroup / ProductOptionComponent / Attribute
  optiongroupAPI = '/api/revenue-admin/v1/option-groups';
  optiongroupByIdAPI = '/api/revenue-admin/v1/option-groups/{Id}';
  productoptiongroupAPI = '/api/revenue-admin/v1/products/{ProductId}/option-groups';
  productOptionComponentAPI = '/api/revenue-admin/v1/product-option-group/{ParentId}/products';
  attributeAPI = '/api/revenue-admin/v1/attributes';

  // Flow / DisplaySettings / CustomSettings
  displaySettingsAPI = '/api/revenue-admin/v1/flows/{flowName}/displays';
  customSettingURL = '/api/revenue-admin/v1/flows/{flowName}/settings/{settingName}';
  createFlow = '/api/revenue-admin/v1/flows';
  getUpdateDeleteFlow = '/api/revenue-admin/v1/flows/{flowName}';

  // VisibilityRule
  visibilityRuleAPI = '/api/revenue-admin/v1/visibility-rule';
  visibilityRuleByIdAPI = '/api/revenue-admin/v1/visibility-rule/{Id}';

  // DealGuidanceDimensions
  dealGuidanceDimensionsAPI = '/api/revenue-admin/v1/deal-guidance-dimensions';
  dealGuidanceDimensionsByIdAPI = '/api/revenue-admin/v1/deal-guidance-dimensions/{Id}';

  // View
  viewAPI = '/api/revenue-admin/v1/flows/{flowName}/views';
  viewByIdAPI = '/api/revenue-admin/v1/flows/{flowName}/views/{viewName}';

  // ConstraintRule
  constraintRuleAPI = '/api/revenue-admin/v1/constraint-rules';
  constraintRuleByIdAPI = '/api/revenue-admin/v1/constraint-rules/{Id}';

  // LookUpFieldSettings
  lookUpFieldSettingAPI = '/api/revenue-admin/v1/lookupfield-settings';
  lookUpFieldSettingAPIById = '/api/revenue-admin/v1/lookupfield-settings/{Id}';

  // PriceRule
  priceRuleAPI = '/api/revenue-admin/v1/rule-sets/{RuleSetId}/rules';
  priceRuleByIdAPI = '/api/revenue-admin/v1/rule-sets/{RuleSetId}/rules/{RuleId}';

  // FeatureSet
  featureSetAPI = '/api/revenue-admin/v1/feature-sets';
  featureSetByIdAPI = '/api/revenue-admin/v1/feature-sets/{featureSetId}';

  // FieldExpression
  fieldExpressionAPI = '/api/revenue-admin/v1/field-expressions';
  fieldExpressionByIdAPI = '/api/revenue-admin/v1/field-expressions/{Id}';

  // Waterfall
  waterfallAPI = '/api/revenue-admin/v1/waterfalls';
  waterfallByIdAPI = '/api/revenue-admin/v1/waterfalls/{waterfallId}';

  // AssetSettings
  assetSetting = '/api/revenue-admin/v1/flows';

  // IncentiveAdmin (canonical PricePrograms family)
  incentiveAdminPriceProgramsAPI = '/api/incentive-admin/v1/price-programs';
  incentiveAdminPriceProgramsByIdAPI = '/api/incentive-admin/v1/price-programs/{Id}';

  // UserManagement
  userAPI = '/api/user-management/v1/users';
  userByIdAPI = '/api/user-management/v1/users/{userId}';

  // Quote
  createEditDeleteQuoteAPI = '/api/quote/v1/quotes';

  // Cart
  launchCart = '/api/cart/v1/quotes/{quoteId}/carts/activate';
  priceCart = '/api/cart/v1/carts/{cartId}/status';

  // Config (publish)
  publishBulkProductsAPI = '/api/config/v1/publish';
  jobStatusOfPublishProductsAPI = '/api/config/v1/publish/job/{jobId}';

  // DataManager
  dataManagerSearch = '/api/revenue-datamanager/v1/search/{entityName}';

  // Data
  queryEditorURL = '/api/data/v1/query/{objectName}?includeTotalCount=true';

  constructor(tenantURL: string) {
    const self = this as unknown as Record<string, string>;
    for (const key of Object.keys(this)) {
      self[key] = tenantURL + self[key];
    }
  }
}
