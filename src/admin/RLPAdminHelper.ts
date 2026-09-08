import { RLPRestUtils } from '../utils/RLPRestUtils';
import { RLPURLGenerator } from '../utils/RLPURLGenerator';
import { RestResponse } from '../utils/RestResponse';
import { ApplicationException } from '../customException/ApplicationException';
import { RLPConfigHelper } from '../config/RLPConfigHelper';
import { Product } from './pojo/Product';
import { PriceList } from './pojo/PriceList';
import { Category } from './pojo/Category';
import { ConstraintRule } from './pojo/ConstraintRule';
import { Attribute } from './pojo/Attribute';
import { OptionGroup } from './pojo/OptionGroup';
import { StoreFront } from './pojo/StoreFront';
import { VisibilityRule } from './pojo/VisibilityRule';
import { PriceRule } from './pojo/PriceRule';
import { FeatureSet } from './pojo/FeatureSet';
import { FieldExpression } from './pojo/FieldExpression';
import { Waterfall } from './pojo/Waterfall';
import { View } from './pojo/View';
import { DealGuidanceDimension } from './pojo/DealGuidanceDimension';
import { Incentive } from './pojo/Incentive';

type Headers = Record<string, string>;
type Verb = 'get' | 'post' | 'patch' | 'put' | 'delete' | 'deleteWithPayload';

/**
 * TypeScript + Playwright port of com.conga.rlp.rudiments.admin.RLPAdminHelper, SCOPED to only
 * the ~110 methods consumed by the Revenue Admin UI repo (per the attached usage snapshot):
 * full CRUD surface for PriceList, Product, Category, StoreFront, OptionGroup, Attribute,
 * DisplaySettings/ConfigUserPreferenceSettings, Flow, VisibilityRule, View, ConstraintRule,
 * LookUpFieldSettings, PriceRule, FeatureSet, FieldExpression, Waterfall, AssetSettings,
 * InstalledProductsSettings, DealGuidanceDimensions (canonical DealGuidance group), and
 * IncentiveAdminPricePrograms (canonical IncentiveAdmin group - top-level only, the
 * Rebates/Rules/RuleEntries sub-families were out of scope for this migration).
 *
 * Java method overloads (same name, different signature) are given distinct TS names since
 * TypeScript does not support overloading - see README.md for the full old-name -> new-name map.
 *
 * NOTE ON PAYLOAD BUILDING: the Java original builds request payloads via bespoke per-object
 * `createXPojo(testData)`/`updateXPojo(testData)` factory methods on each POJO (field-by-field
 * mapping + some type coercion). This scoped port simplifies that to JSON.stringify(testData)
 * directly, since testData is already the flat key/value representation of the request body.
 * If a target API rejects a payload due to a coercion the Java factory used to perform (e.g.
 * string "true"/"false" -> boolean), add that coercion where the TODO comments are.
 */
export class RLPAdminHelper {
  private readonly urlGenerator: RLPURLGenerator;
  private readonly rlpConfigHelper: RLPConfigHelper;

  constructor(tenantURL: string, private readonly restUtils: RLPRestUtils) {
    this.urlGenerator = new RLPURLGenerator(tenantURL);
    this.rlpConfigHelper = new RLPConfigHelper(tenantURL, restUtils);
  }

  private withQueryParam(base: string, testData: Headers): string {
    return testData['queryParameter'] ? base + testData['queryParameter'] : base;
  }

  private toPayload(data: unknown): string {
    return JSON.stringify(data);
  }

  private async execute(
    verb: Verb,
    url: string,
    headers: Headers,
    payload: string | undefined,
    expectedStatus: number,
    context: string,
  ): Promise<RestResponse> {
    let response: RestResponse;
    switch (verb) {
      case 'get':
        response = await this.restUtils.getData(url, headers);
        break;
      case 'post':
        response = await this.restUtils.postData(url, headers, payload ?? '');
        break;
      case 'patch':
        response = await this.restUtils.patchData(url, headers, payload ?? '');
        break;
      case 'put':
        response = await this.restUtils.putData(url, headers, payload ?? '');
        break;
      case 'delete':
        response = await this.restUtils.deleteData(url, headers);
        break;
      case 'deleteWithPayload':
        response = await this.restUtils.deleteDataWithPayload(url, headers, payload ?? '');
        break;
    }
    if (response.getStatusCode() !== expectedStatus) {
      throw new ApplicationException(
        `Application Issue : Failure while ${context} using API :${url}. The response code was:${response.getStatusCode()}` +
          ` and the response body received is: ${response.getBody().asString()} Trace id is ${response.getHeader('TraceId')}` +
          ` ResponseTime : ${response.getTimeIn()}`,
      );
    }
    return response;
  }

  // ===================== PriceList =====================
  async createPriceList(testData: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createPriceListAPI, testData, this.toPayload(PriceList.createPricelistPOJO(testData)), 201, 'creating the pricelist');
  }

  async createPriceListBulk(testData: Headers[]): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createPriceListAPI, testData[0], this.toPayload(PriceList.createPricelistPOJOBulk(testData)), 201, 'creating the pricelist');
  }

  async createPriceListWithHeaders(testData: Headers, configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createPriceListAPI, configMap, this.toPayload(PriceList.createPricelistPOJO(testData)), 201, 'creating the pricelist');
  }

  async createPriceListBulkWithHeaders(testData: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createPriceListAPI, configMap, this.toPayload(PriceList.createPricelistPOJOBulk(testData)), 201, 'creating the pricelist');
  }

  async getPriceList(testData: Headers, headerInfo: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.createPriceListAPI, testData);
    return this.execute('get', url, headerInfo, undefined, 200, 'Getting the priceList');
  }

  async updatePriceList(testData: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.updatePriceListAPI.replace('{Id}', testData['id']);
    return this.execute('patch', url, testData, this.toPayload(PriceList.updatePriceListPOJO(testData)), 200, 'updating the pricelist');
  }

  async updatePriceListBulk(testData: Headers[]): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.createPriceListAPI, testData[0], this.toPayload(PriceList.updatePricelistPOJOBulk(testData)), 200, 'updating the pricelist');
  }

  async updatePriceListWithHeaders(testData: Headers, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.updatePriceListAPI.replace('{Id}', testData['id']);
    return this.execute('patch', url, configMap, this.toPayload(PriceList.updatePriceListPOJO(testData)), 200, 'updating the pricelist');
  }

  async updatePriceListBulkWithHeaders(testData: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.createPriceListAPI, configMap, this.toPayload(PriceList.updatePricelistPOJOBulk(testData)), 200, 'updating the pricelist');
  }

  async deletePriceList(priceList: PriceList[], configMap: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.createPriceListAPI, configMap, this.toPayload(priceList), 200, 'deleting the pricelist');
  }

  // ===================== Product =====================
  async createProduct(testData: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createProductAPI, testData, this.toPayload(Product.createProductPOJO(testData)), 201, 'creating the product');
  }

  async createProductBulk(testData: Headers[]): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createProductAPI, testData[0], this.toPayload(Product.createProductPOJOBulk(testData)), 201, 'creating the product');
  }

  async createProductWithHeaders(testData: Headers, configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createProductAPI, configMap, this.toPayload(Product.createProductPOJO(testData)), 201, 'creating the product');
  }

  async createProductBulkWithHeaders(testData: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createProductAPI, configMap, this.toPayload(Product.createProductPOJOBulk(testData)), 201, 'creating the product');
  }

  async updateProduct(testData: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.updateProductAPI.replace('{Id}', testData['id']);
    return this.execute('patch', url, testData, this.toPayload(Product.updateProductPOJO(testData)), 200, 'updating the product');
  }

  async updateProductByObject(product: Product, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.updateProductAPI.replace('{Id}', product.getId() ?? '');
    return this.execute('patch', url, configMap, this.toPayload(product), 200, 'updating the product');
  }

  async updateProductBulk(testData: Headers[]): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.createProductAPI, testData[0], this.toPayload(Product.updateProductPOJOBulk(testData)), 200, 'updating the product');
  }

  async updateProductWithHeaders(testData: Headers, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.updateProductAPI.replace('{Id}', testData['id']);
    return this.execute('patch', url, configMap, this.toPayload(Product.updateProductPOJO(testData)), 200, 'updating the product');
  }

  async updateProductBulkWithHeaders(testData: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.createProductAPI, configMap, this.toPayload(Product.updateProductPOJOBulk(testData)), 200, 'updating the product');
  }

  async getProduct(testData: Headers): Promise<RestResponse> {
    const base = this.urlGenerator.updateProductAPI.replace('{Id}', testData['id']);
    const url = this.withQueryParam(base, testData);
    return this.execute('get', url, testData, undefined, 200, 'Getting the product');
  }

  async deleteProductBulk(product: Product[], configMap: Headers): Promise<RestResponse> {
    const productIds = product.map((p) => p.getId()).filter((id): id is string => !!id);
    await this.rlpConfigHelper.deletePublishProductsWithException(productIds, configMap);
    return this.execute('deleteWithPayload', this.urlGenerator.createProductAPI, configMap, this.toPayload(product), 200, 'deleting the createProductAPI');
  }

  async deleteProductByObject(product: Product, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.updateProductAPI.replace('{Id}', product.getId() ?? '');
    await this.rlpConfigHelper.deletePublishProductsWithException([product.getId() ?? ''], configMap);
    return this.execute('delete', url, configMap, undefined, 200, 'deleting the Product');
  }

  // ===================== Category =====================
  async createCategory(testData: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createCategoryAPI, testData, this.toPayload(Category.createCategoriesPOJO(testData)), 201, 'creating the category');
  }

  async createCategoryWithHeaders(testData: Headers, configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createCategoryAPI, configMap, this.toPayload(Category.createCategoriesPOJO(testData)), 201, 'creating the category');
  }

  async createCategoryBulkWithHeaders(testData: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createCategoryAPI, configMap, this.toPayload(Category.createCategoriesPOJOBulk(testData)), 201, 'creating the category');
  }

  async updateCategory(testData: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.updateCategoryAPI.replace('{Id}', testData['id']);
    return this.execute('patch', url, testData, this.toPayload(Category.updateCategoryPOJO(testData)), 200, 'updating the category');
  }

  async updateCategoryByObjects(lstUpdateCategoryReqData: Category[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.createCategoryAPI, headerInfo, this.toPayload(lstUpdateCategoryReqData), 200, 'updating the category');
  }

  async deleteCategoryBulk(category: Category[], configMap: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.createCategoryAPI, configMap, this.toPayload(category), 200, 'deleting the category');
  }

  async deleteCategoryByObject(category: Category, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.updateCategoryAPI.replace('{Id}', category.getId() ?? '');
    return this.execute('delete', url, configMap, undefined, 200, 'deleting the category');
  }

  async getCategory(testData: Headers, headerInfo: Headers): Promise<RestResponse> {
    const base = this.urlGenerator.updateCategoryAPI.replace('{Id}', testData['Id']);
    const url = this.withQueryParam(base, testData);
    return this.execute('get', url, headerInfo, undefined, 200, 'fetching the Category');
  }

  // ===================== StoreFront =====================
  async createStorefront(testData: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.storefrontAPI, testData, this.toPayload(StoreFront.createStoreFront(testData)), 201, 'creating the storefront');
  }

  async createStorefrontBulkWithHeaders(lstMapTestData: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.storefrontAPI, configMap, this.toPayload(StoreFront.createStoreFrontBulk(lstMapTestData)), 201, 'creating the multiple storefront');
  }

  async createStorefrontWithHeaders(testData: Headers, configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.storefrontAPI, configMap, this.toPayload(StoreFront.createStoreFront(testData)), 201, 'creating the storefront');
  }

  async createStoreFront(testData: Headers, headerInfo: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.storefrontAPI, headerInfo, this.toPayload(StoreFront.createStoreFront(testData)), 201, 'creating the storefront');
  }

  async createStoreFrontBulk(headerInfo: Headers, storefrontRequestTestData: Headers[]): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.storefrontAPI, headerInfo, this.toPayload(StoreFront.createStoreFrontBulk(storefrontRequestTestData)), 201, 'creating the storefront');
  }

  async deleteStoreFront(storeFront: StoreFront[], configMap: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.storefrontAPI, configMap, this.toPayload(storeFront), 200, 'deleting the storefront');
  }

  async getStorefront(testData: Headers, headerInfo: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.storefrontAPI, testData);
    // NOTE: faithfully mirrors the Java original, which (likely a bug) sends `testData` as the
    // header map here instead of `headerInfo`.
    return this.execute('get', url, testData, undefined, 200, 'fetching the storefront');
  }

  async updateStorefront(headerInfo: Headers, storefrontResponseObject: StoreFront[]): Promise<RestResponse> {
    const url = this.urlGenerator.storefrontAPI;
    const response = await this.restUtils.patchData(url, headerInfo, this.toPayload(storefrontResponseObject));
    if (response.getStatusCode() !== 200 && response.getStatusCode() !== 400) {
      throw new ApplicationException(
        `Application Issue : Failure while updating the product using API :${url}. The response code was:${response.getStatusCode()} and the response body received is: ${response.getBody().asString()}`,
      );
    }
    return response;
  }

  // ===================== OptionGroup =====================
  async createOptionGroupWithHeaders(testData: Headers, configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.optiongroupAPI, configMap, this.toPayload(OptionGroup.createOptionGroupPojo(testData)), 201, 'creating the option group');
  }

  async createOptionGroup(testData: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.optiongroupAPI, testData, this.toPayload(OptionGroup.createOptionGroupPojo(testData)), 201, 'creating the option group');
  }

  async createOptionGroupBulkWithHeaders(testData: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.optiongroupAPI, configMap, this.toPayload(OptionGroup.createMultipleOptionGroupPojo(testData)), 201, 'creating the option group');
  }

  async deleteOptionGroup(optionGroupList: OptionGroup[], configMap: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.optiongroupAPI, configMap);
    return this.execute('deleteWithPayload', url, configMap, this.toPayload(optionGroupList), 200, 'deleting the option group');
  }

  async updateOptionGroup(lstOptionGroup: OptionGroup[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.optiongroupAPI, headerInfo, this.toPayload(lstOptionGroup), 200, 'updating the option group');
  }

  async updateOptionGroupRaw(updateOptionGroupPayload: string, headerInfo: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.optiongroupAPI, headerInfo, updateOptionGroupPayload, 200, 'updating the option group');
  }

  async getOptionGroup(testData: Headers, headerInfo: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.optiongroupAPI, testData);
    return this.execute('get', url, headerInfo, undefined, 200, 'fetching the OptionGroup');
  }

  // ===================== Attribute =====================
  async createAttribute(testData: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.attributeAPI, testData, this.toPayload(Attribute.createAttributePojo(testData)), 201, 'creating the attribute');
  }

  async createAttributeWithHeaders(testData: Headers, configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.attributeAPI, configMap, this.toPayload(Attribute.createAttributePojo(testData)), 201, 'creating the attribute');
  }

  async createAttributeBulk(testData: Headers[]): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.attributeAPI, testData[0], this.toPayload(Attribute.createMultipleAttributePojo(testData)), 201, 'creating the attribute');
  }

  async createAttributeBulkWithHeaders(testData: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.attributeAPI, configMap, this.toPayload(Attribute.createMultipleAttributePojo(testData)), 201, 'creating the attribute');
  }

  /** Ports createAttribute(headerInfo, attributeRequestTestData, pickListValueTestData) - creates picklist/string attributes together. */
  async createAttributeAllDataTypes(
    headerInfo: Headers,
    attributeRequestTestData: Headers[],
    pickListValueTestData: Headers[],
  ): Promise<RestResponse> {
    const payload = this.toPayload(Attribute.createAllDataTypeAttributePojo(attributeRequestTestData, pickListValueTestData));
    return this.execute('post', this.urlGenerator.attributeAPI, headerInfo, payload, 201, 'creating the attribute');
  }

  async deleteAttribute(lstAttribute: Attribute[], configMap: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.attributeAPI, configMap, this.toPayload(lstAttribute), 200, 'deleting the attribute');
  }

  async getAttribute(attributeId: string, configMap: Headers): Promise<RestResponse> {
    const url = `${this.urlGenerator.attributeAPI}/${attributeId}`;
    return this.execute('get', url, configMap, undefined, 200, 'fetching the attribute');
  }

  async updateAttribute(headerInfo: Headers, attributeObject: Attribute[]): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.attributeAPI, headerInfo, this.toPayload(attributeObject), 200, 'updating the attribute');
  }

  // ===================== DisplaySettings / ConfigUserPreferenceSettings =====================
  async getDisplaySettings(testData: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.displaySettingsAPI.replace('{flowName}', testData['flowName']);
    return this.execute('get', url, testData, undefined, 200, 'fetching the display settings');
  }

  async getDisplaySettingsByFlowName(flowName: string, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.displaySettingsAPI.replace('{flowName}', flowName);
    return this.execute('get', url, configMap, undefined, 200, 'fetching the display settings');
  }

  async updateDisplaySettings(lstMapDisplaySettings: Headers[], configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.displaySettingsAPI.replace('{flowName}', lstMapDisplaySettings[0]['Flow']);
    return this.execute('put', url, configMap, this.toPayload(lstMapDisplaySettings), 200, 'updating the display Settings');
  }

  async getConfigUserPreferenceSettings(flowName: string, settingsName: string, headerInfo: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.customSettingURL.replace('{flowName}', flowName).replace('{settingName}', settingsName);
    return this.execute('get', url, headerInfo, undefined, 200, 'Getting the ConfigUserPreferenceSettings');
  }

  async updateConfigUserPreferenceSettings(
    flowName: string,
    settingsName: string,
    updateConfigUserPreferenceSettings: Headers,
    headerInfo: Headers,
  ): Promise<RestResponse> {
    const url = this.urlGenerator.customSettingURL.replace('{flowName}', flowName).replace('{settingName}', settingsName);
    return this.execute('put', url, headerInfo, this.toPayload(updateConfigUserPreferenceSettings), 200, 'updating the ConfigUserPreferenceSettings');
  }

  async updateInstalledProductsSettings(mapTestData: Headers, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.customSettingURL.replace('{flowName}', mapTestData['flowName']).replace('{settingName}', mapTestData['settingName']);
    return this.execute('put', url, configMap, this.toPayload(mapTestData), 200, 'updating the the InstalledProductsSettings Settings');
  }

  async updateAssetSettings(testdata: Headers, configMap: Headers): Promise<RestResponse> {
    const url = `${this.urlGenerator.assetSetting}/${testdata['flowname']}/settings/${testdata['settingname']}`;
    return this.execute('put', url, configMap, this.toPayload(testdata), 200, 'using Custom Setting API');
  }

  // ===================== Flow =====================
  async createFlow(testData: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createFlow, testData, this.toPayload(testData), 201, `creating the flow for ${testData['Name']}`);
  }

  async createFlowWithHeaders(testData: Headers, configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.createFlow, configMap, this.toPayload(testData), 201, `creating the flow for ${testData['Name']}`);
  }

  async getFlow(testData: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.getUpdateDeleteFlow.replace('{flowName}', testData['flowName']);
    return this.execute('get', url, testData, undefined, 200, `fetching the flow for ${testData['flowName']}`);
  }

  async getFlowByName(flowName: string, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.getUpdateDeleteFlow.replace('{flowName}', flowName);
    return this.execute('get', url, configMap, undefined, 200, `fetching the flow for ${flowName}`);
  }

  /**
   * NOTE: the Java original computes `deletedFlag` by Boolean.parseBoolean() on a long
   * descriptive string, which always evaluates false - so its `!= 200 && deletedFlag == false`
   * check is behaviorally equivalent to a plain `!= 200` check. Simplified accordingly here.
   */
  async deleteFlow(testData: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.getUpdateDeleteFlow.replace('{flowName}', testData['flowName']);
    return this.execute('delete', url, testData, undefined, 200, `deleting the flow for ${testData['flowName']}`);
  }

  async deleteFlowByName(flowName: string, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.getUpdateDeleteFlow.replace('{flowName}', flowName);
    return this.execute('delete', url, configMap, undefined, 200, `deleting the flow for ${flowName}`);
  }

  async updateFlow(testData: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.getUpdateDeleteFlow.replace('{flowName}', testData['Name']);
    return this.execute('put', url, testData, this.toPayload(testData), 200, `updating the flow for ${testData['Name']}`);
  }

  async updateFlowWithHeaders(testData: Headers, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.getUpdateDeleteFlow.replace('{flowName}', testData['Name']);
    return this.execute('put', url, configMap, this.toPayload(testData), 200, `updating the flow for ${testData['Name']}`);
  }

  // ===================== VisibilityRule =====================
  async createVisibilityRule(visibilityRuleTestdata: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.visibilityRuleAPI, configMap, this.toPayload(VisibilityRule.createVisibiltyRulePOJO(visibilityRuleTestdata)), 201, 'creating the visibilityrule');
  }

  async updateVisibilityRule(visibilityRuleObjects: VisibilityRule[], configMap: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.visibilityRuleAPI, configMap, this.toPayload(visibilityRuleObjects), 200, 'updating the visibilityrule');
  }

  async deleteVisibilityRule(visibilityRuleObjects: VisibilityRule[], configMap: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.visibilityRuleAPI, configMap, this.toPayload(visibilityRuleObjects), 200, 'deleting the visibilityrule');
  }

  async deleteVisibilityRuleById(visibilityRuleId: string, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.visibilityRuleByIdAPI.replace('{Id}', visibilityRuleId);
    return this.execute('delete', url, configMap, undefined, 200, 'deleting the visibilityrule');
  }

  async getVisibilityRuleById(visibilityRuleId: string, testData: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.visibilityRuleByIdAPI.replace('{Id}', visibilityRuleId);
    return this.execute('get', url, testData, undefined, 200, 'fetching the visibilityrule');
  }

  async getVisibilityRule(testData: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.visibilityRuleAPI, testData);
    return this.execute('get', url, testData, undefined, 200, 'fetching the visibilityrule');
  }

  // ===================== View =====================
  async createView(flowName: string, lstMapTestData: Headers[], configMap: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.viewAPI.replace('{flowName}', flowName), configMap);
    return this.execute('post', url, configMap, this.toPayload(View.createViewPOJO(lstMapTestData)), 201, 'creating the view');
  }

  async createViewWithColumns(
    flowName: string,
    lstMapTestData: Headers[],
    leftColumnsData: Headers[],
    middleColumnsData: Headers[],
    rightColumnsData: Headers[],
    configMap: Headers,
  ): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.viewAPI.replace('{flowName}', flowName), configMap);
    const payload = this.toPayload(View.createViewPOJOWithColumns(lstMapTestData, leftColumnsData, middleColumnsData, rightColumnsData));
    return this.execute('post', url, configMap, payload, 201, 'creating the cart view');
  }

  async updateViewWithColumns(
    flowName: string,
    lstMapTestData: Headers[],
    leftColumnsData: Headers[],
    middleColumnsData: Headers[],
    rightColumnsData: Headers[],
    configMap: Headers,
  ): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.viewAPI.replace('{flowName}', flowName), configMap);
    const payload = this.toPayload(View.createViewPOJOWithColumns(lstMapTestData, leftColumnsData, middleColumnsData, rightColumnsData));
    return this.execute('put', url, configMap, payload, 200, 'updating the view');
  }

  async updateView(flowName: string, viewObjects: View[], configMap: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.viewAPI.replace('{flowName}', flowName), configMap);
    return this.execute('put', url, configMap, this.toPayload(viewObjects), 200, 'updating the view');
  }

  // ===================== ConstraintRule =====================
  async createConstraintRule(testData: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.constraintRuleAPI, testData, this.toPayload(ConstraintRule.createConstraintRulePojo(testData)), 201, 'creating the constraintRule');
  }

  async createConstraintRuleBulk(configMap: Headers, constraintRuleData: Headers[]): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.constraintRuleAPI, configMap, this.toPayload(ConstraintRule.createMultipleConstraintRulePojo(constraintRuleData)), 201, 'creating the constraintRule');
  }

  async updateConstraintRule(configMap: Headers, constraintRuleObject: ConstraintRule[]): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.constraintRuleAPI, configMap, this.toPayload(constraintRuleObject), 200, 'updating the constraintRule');
  }

  async deleteConstraintRule(constraintRule: ConstraintRule[], configMap: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.constraintRuleAPI, configMap, this.toPayload(constraintRule), 200, 'deleting the constraintRule');
  }

  async deleteConstraintRuleById(constraintRuleId: string, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.constraintRuleByIdAPI.replace('{Id}', constraintRuleId);
    return this.execute('delete', url, configMap, undefined, 200, 'deleting the constraintRule');
  }

  async getConstraintRule(testData: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.constraintRuleAPI, testData);
    return this.execute('get', url, testData, undefined, 200, 'getting the constraintRule');
  }

  // ===================== LookUpFieldSettings =====================
  async createLookUpFieldSettings(lstLookUpFieldSettingTestData: Headers[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.lookUpFieldSettingAPI, headerInfo, this.toPayload(lstLookUpFieldSettingTestData), 201, 'creating the LookupFieldSetting');
  }

  // ===================== PriceRule =====================
  async createPriceRule(ruleSetId: string, priceRuleTestData: Headers, headerInfo: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.priceRuleAPI.replace('{RuleSetId}', ruleSetId);
    return this.execute('post', url, headerInfo, this.toPayload(PriceRule.createPriceRulePojo(priceRuleTestData)), 201, 'creating the priceRule');
  }

  async createPriceRuleBulk(ruleSetId: string, headerInfo: Headers, priceRuleTestData: Headers[]): Promise<RestResponse> {
    const url = this.urlGenerator.priceRuleAPI.replace('{RuleSetId}', ruleSetId);
    return this.execute('post', url, headerInfo, this.toPayload(PriceRule.createMultiplePriceRulePojo(priceRuleTestData)), 201, 'creating the priceRule');
  }

  async updatePriceRule(ruleSetId: string, headerInfo: Headers, priceRuleObject: PriceRule[]): Promise<RestResponse> {
    const url = this.urlGenerator.priceRuleAPI.replace('{RuleSetId}', ruleSetId);
    return this.execute('patch', url, headerInfo, this.toPayload(priceRuleObject), 200, 'updating the priceRule');
  }

  async deletePriceRule(deletePriceRuleList: PriceRule[], headerInfo: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.priceRuleAPI.replace('{RuleSetId}', deletePriceRuleList[0]?.getRuleset()?.getId() ?? '');
    return this.execute('deleteWithPayload', url, headerInfo, this.toPayload(deletePriceRuleList), 200, 'Deleting the priceRule');
  }

  async getPriceRule(testData: Headers): Promise<RestResponse> {
    const base = this.urlGenerator.priceRuleAPI.replace('{RuleSetId}', testData['RuleSetId']);
    const url = this.withQueryParam(base, testData);
    return this.execute('get', url, testData, undefined, 200, 'fetching the priceRule');
  }

  // ===================== FeatureSet =====================
  async createFeatureSet(lstMapTestData: Headers[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.featureSetAPI, headerInfo, this.toPayload(FeatureSet.createFeatureSetPojo(lstMapTestData)), 201, 'creating the featureSet');
  }

  async updateFeatureSet(featureSetObject: FeatureSet[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.featureSetAPI, headerInfo, this.toPayload(featureSetObject), 200, 'updating the featureSet');
  }

  async deleteFeatureSet(featureSetObject: FeatureSet[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.featureSetAPI, headerInfo, this.toPayload(featureSetObject), 200, 'deleting the featureSet');
  }

  async getFeatureSet(mapTestData: Headers, headerInfo: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.featureSetAPI, mapTestData);
    return this.execute('get', url, headerInfo, undefined, 200, 'getting the featureSet');
  }

  // ===================== FieldExpression =====================
  async createFieldExpression(lstFieldExpression: Headers[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.fieldExpressionAPI, headerInfo, this.toPayload(FieldExpression.createFieldExpressionPojo(lstFieldExpression)), 201, 'creating the field expression');
  }

  async updateFieldExpression(fieldExpressionObject: FieldExpression[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.fieldExpressionAPI, headerInfo, this.toPayload(fieldExpressionObject), 200, 'updating the field expression');
  }

  async deleteFieldExpression(fieldExpressionObject: FieldExpression[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.fieldExpressionAPI, headerInfo, this.toPayload(fieldExpressionObject), 200, 'deleting the field expression');
  }

  async getFieldExpression(mapTestData: Headers, headerInfo: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.fieldExpressionAPI, mapTestData);
    return this.execute('get', url, headerInfo, undefined, 200, 'getting the field expression');
  }

  // ===================== Waterfall =====================
  async createWaterfall(lstMapTestData: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.waterfallAPI, configMap, this.toPayload(Waterfall.createWaterfallPojo(lstMapTestData)), 201, 'creating the Waterfall');
  }

  async updateWaterfall(lstWaterfallObject: Waterfall[], configMap: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.waterfallAPI, configMap, this.toPayload(lstWaterfallObject), 200, 'updating the waterfall');
  }

  async deleteWaterfall(lstWaterfallObject: Waterfall[], configMap: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.waterfallAPI, configMap, this.toPayload(lstWaterfallObject), 200, 'deleting the waterfall');
  }

  async getWaterfall(mapTestData: Headers, configMap: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.waterfallAPI, mapTestData);
    return this.execute('get', url, configMap, undefined, 200, 'get the waterfall');
  }

  // ===================== DealGuidanceDimensions (canonical DealGuidance group) =====================
  async createDealGuidanceDimensions(lstDealGuidanceDimensionsRequestData: Headers[], configMap: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.dealGuidanceDimensionsAPI, configMap, this.toPayload(DealGuidanceDimension.createDealGuidanceDimensionsPojo(lstDealGuidanceDimensionsRequestData)), 201, 'creating the deal guidance dimension');
  }

  async updateDealGuidanceDimensions(lstDealGuidanceDimensions: DealGuidanceDimension[], configMap: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.dealGuidanceDimensionsAPI, configMap, this.toPayload(lstDealGuidanceDimensions), 200, 'creating the deal guidance dimension');
  }

  async deleteDealGuidanceDimensions(lstDealGuidanceDimensions: DealGuidanceDimension[], configMap: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.dealGuidanceDimensionsAPI, configMap, this.toPayload(lstDealGuidanceDimensions), 200, 'deleting the deal guidance dimension');
  }

  async getDealGuidanceDimensions(configMap: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.dealGuidanceDimensionsAPI, configMap);
    return this.execute('get', url, configMap, undefined, 200, 'fetching the deal guidance dimension');
  }

  // ===================== IncentiveAdminPricePrograms (canonical IncentiveAdmin group) =====================
  async createIncentiveAdminPricePrograms(priceProgramTestData: Headers[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('post', this.urlGenerator.incentiveAdminPriceProgramsAPI, headerInfo, this.toPayload(Incentive.createIncentivePOJO(priceProgramTestData)), 201, 'creating the PriceProgram');
  }

  async deleteIncentiveAdminPricePrograms(priceProgramTestData: Incentive[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('deleteWithPayload', this.urlGenerator.incentiveAdminPriceProgramsAPI, headerInfo, this.toPayload(priceProgramTestData), 200, 'deleting the incentiveAdminPricePrograms');
  }

  async getIncentiveAdminPricePrograms(testData: Headers, headerInfo: Headers): Promise<RestResponse> {
    const url = this.withQueryParam(this.urlGenerator.incentiveAdminPriceProgramsAPI, testData);
    return this.execute('get', url, headerInfo, undefined, 200, 'get the incentiveAdminPricePrograms');
  }

  async updateIncentiveAdminPricePrograms(priceProgramTestData: Incentive[], headerInfo: Headers): Promise<RestResponse> {
    return this.execute('patch', this.urlGenerator.incentiveAdminPriceProgramsAPI, headerInfo, this.toPayload(priceProgramTestData), 200, 'updating the priceProgram');
  }
}
