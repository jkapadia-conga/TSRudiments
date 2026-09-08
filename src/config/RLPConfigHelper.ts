import { RLPRestUtils } from '../utils/RLPRestUtils';
import { RLPURLGenerator } from '../utils/RLPURLGenerator';
import { RestResponse } from '../utils/RestResponse';
import { ApplicationException } from '../customException/ApplicationException';

type Headers = Record<string, string>;

/**
 * TypeScript + Playwright port of com.conga.rlp.rudiments.config.RLPConfigHelper, scoped to
 * publishBulkProducts, publishProduct, getJobStatusOfPublishProducts (per the attached usage
 * snapshot) plus deletePublishProductsWithException, which RLPAdminHelper's deleteProduct
 * methods depend on internally.
 *
 * NOTE: Java's publishProduct/publishBulkProducts call restUtils.postDataWithPayload(), which
 * is out of the migrated RLPRestUtils surface (only generateAccessToken/getData/postData/
 * putData/putDataWithoutBody/patchData/deleteData/deleteDataWithPayload were requested). Since
 * postDataWithPayload's default header branch is equivalent to postData for a config-only
 * headers map (no pricelistid/categoryId/storeFrontId/cartId keys), postData is used here.
 */
export class RLPConfigHelper {
  private readonly urlGenerator: RLPURLGenerator;

  constructor(tenantURL: string, private readonly restUtils: RLPRestUtils) {
    this.urlGenerator = new RLPURLGenerator(tenantURL);
  }

  async publishProduct(lstProductIds: string[], configMap: Headers): Promise<RestResponse> {
    const payload = JSON.stringify(lstProductIds);
    const response = await this.restUtils.postData(this.urlGenerator.publishBulkProductsAPI, configMap, payload);
    if (response.getStatusCode() !== 201) {
      throw new ApplicationException(
        `Application Issue : Failure while publising the bulk products using API :${this.urlGenerator.publishBulkProductsAPI}. The response code was:${response.getStatusCode()} and the response body received is: ${response.getBody().asString().trim()}`,
      );
    }
    return response;
  }

  async publishBulkProducts(lstProductIds: string[], configMap: Headers): Promise<RestResponse> {
    const payload = JSON.stringify(lstProductIds);
    const response = await this.restUtils.postData(this.urlGenerator.publishBulkProductsAPI, configMap, payload);
    if (response.getStatusCode() !== 200) {
      throw new ApplicationException(
        `Application Issue : Failure while publising the bulk products using API :${this.urlGenerator.publishBulkProductsAPI}. The response code was:${response.getStatusCode()} and the response body received is: ${response.getBody().asString().trim()}`,
      );
    }
    return response;
  }

  /** Used internally by RLPAdminHelper.deleteProduct*/
  async deletePublishProductsWithException(lstProductIds: string[], configMap: Headers): Promise<RestResponse> {
    const payload = JSON.stringify(lstProductIds);
    return this.restUtils.deleteDataWithPayload(this.urlGenerator.publishBulkProductsAPI, configMap, payload);
  }

  async getJobStatusOfPublishProducts(jobId: string, configMap: Headers): Promise<RestResponse> {
    const url = this.urlGenerator.jobStatusOfPublishProductsAPI.replace('{jobId}', jobId);
    const response = await this.restUtils.getData(url, configMap);
    if (response.getStatusCode() !== 200) {
      throw new ApplicationException(
        `Application Issue : Failure while fetching the job status of publish products using API :${url}. The response code was:${response.getStatusCode()} and the response body received is: ${response.getBody().asString().trim()}`,
      );
    }
    return response;
  }
}
