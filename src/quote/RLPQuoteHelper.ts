import { RLPRestUtils } from '../utils/RLPRestUtils';
import { RLPURLGenerator } from '../utils/RLPURLGenerator';
import { RestResponse } from '../utils/RestResponse';
import { ApplicationException } from '../customException/ApplicationException';
import { Quote } from './pojo/Quote';

type Headers = Record<string, string>;

/**
 * TypeScript + Playwright port of com.conga.rlp.rudiments.quote.RLPQuoteHelper, scoped to only
 * createQuote (both the single-map and list-of-maps overloads, per the attached usage snapshot).
 */
export class RLPQuoteHelper {
  private readonly urlGenerator: RLPURLGenerator;

  constructor(tenantURL: string, private readonly restUtils: RLPRestUtils) {
    this.urlGenerator = new RLPURLGenerator(tenantURL);
  }

  async createQuote(testData: Headers): Promise<RestResponse> {
    try {
      const payload = JSON.stringify(Quote.createQuotePOJO(testData));
      const response = await this.restUtils.postData(this.urlGenerator.createEditDeleteQuoteAPI, testData, payload);
      if (response.getStatusCode() !== 201) {
        throw new ApplicationException(
          `Application Issue : Failure while creating the quote using API :${this.urlGenerator.createEditDeleteQuoteAPI}. The response code was: ${response.getStatusCode()} and the response body received is: ${response.getBody().asString()}`,
        );
      }
      return response;
    } catch (ex) {
      if (ex instanceof ApplicationException) throw ex;
      throw new ApplicationException(`createQuote Method Exception Message: ${(ex as Error).message}`);
    }
  }

  async createQuoteBulk(testData: Headers[]): Promise<RestResponse> {
    try {
      const payload = JSON.stringify(Quote.createQuotePOJOList(testData));
      const response = await this.restUtils.postData(this.urlGenerator.createEditDeleteQuoteAPI, testData[0], payload);
      if (response.getStatusCode() !== 201) {
        throw new ApplicationException(
          `Application Issue : Failure while creating the quote using API :${this.urlGenerator.createEditDeleteQuoteAPI}. The response code was: ${response.getStatusCode()} and the response body received is: ${response.getBody().asString()}`,
        );
      }
      return response;
    } catch (ex) {
      if (ex instanceof ApplicationException) throw ex;
      throw new ApplicationException(`createQuote Method Exception Message: ${(ex as Error).message}`);
    }
  }
}
