import { RLPRestUtils } from '../utils/RLPRestUtils';
import { RLPURLGenerator } from '../utils/RLPURLGenerator';
import { RestResponse } from '../utils/RestResponse';
import { ApplicationException } from '../customException/ApplicationException';

type Headers = Record<string, string>;

/**
 * TypeScript + Playwright port of com.conga.rlp.rudiments.cart.RLPCartHelper, scoped to only
 * launchCart and priceCart (per the attached usage snapshot).
 */
export class RLPCartHelper {
  private readonly urlGenerator: RLPURLGenerator;

  constructor(tenantURL: string, private readonly restUtils: RLPRestUtils) {
    this.urlGenerator = new RLPURLGenerator(tenantURL);
  }

  async launchCart(quoteId: string, configMap: Headers): Promise<RestResponse> {
    try {
      const url = this.urlGenerator.launchCart.replace('{quoteId}', quoteId);
      const response = await this.restUtils.postData(url, configMap, '');
      if (response.getStatusCode() !== 200) {
        throw new ApplicationException(
          `Application Issue : Failure while launching the cart for given quoteId using API :${url}. The response code was: ${response.getStatusCode()} and the response body received is: ${response.getBody().asString()}`,
        );
      }
      return response;
    } catch (ex) {
      if (ex instanceof ApplicationException) throw ex;
      throw new ApplicationException(`launchCart Method Exception Message: ${(ex as Error).message}`);
    }
  }

  async priceCart(cartInfo: Headers, configMap: Headers): Promise<RestResponse> {
    try {
      const base = this.urlGenerator.priceCart.replace('{cartId}', cartInfo['cartId']);
      const url = cartInfo['queryParameter'] ? base + cartInfo['queryParameter'] : base;
      return await this.restUtils.getData(url, configMap);
    } catch (ex) {
      throw new ApplicationException(`priceCart Method Exception Message: ${(ex as Error).message}`);
    }
  }
}
