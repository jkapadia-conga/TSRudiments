import { RLPRestUtils } from '../utils/RLPRestUtils';
import { RLPURLGenerator } from '../utils/RLPURLGenerator';
import { RestResponse } from '../utils/RestResponse';
import { ApplicationException } from '../customException/ApplicationException';

type Headers = Record<string, string>;

/**
 * TypeScript + Playwright port of com.conga.rlp.rudiments.datamanager.RLPDataManagerHelper,
 * scoped to only checkRecordsInOpenSearch (both overloads, per the attached usage snapshot -
 * "previously flagged as an unused import in the old RLPCPQAdminAsHelper.java, it's actually
 * used in RLPCPQServiceHelper.java").
 */
export class RLPDataManagerHelper {
  private readonly urlGenerator: RLPURLGenerator;

  constructor(tenantURL: string, private readonly restUtils: RLPRestUtils) {
    this.urlGenerator = new RLPURLGenerator(tenantURL);
  }

  async checkRecordsInOpenSearch(responsePayload: string, testData: Headers): Promise<RestResponse> {
    try {
      const firstRecord = JSON.parse(responsePayload)[0];
      const payload = JSON.stringify([firstRecord.Id]);
      const url = this.urlGenerator.dataManagerSearch.replace('{entityName}', testData['objectName']);
      const response = await this.restUtils.postData(url, testData, payload);
      const searchRecordsCount = response.json<{ SearchRecordsCount: number }>().SearchRecordsCount;
      if (response.getStatusCode() !== 200 || searchRecordsCount !== 1) {
        throw new ApplicationException(
          `Application Issue : Failure while searching the data in open search for ${testData['objectName']} using API :${url}. The response code was:${response.getStatusCode()} and the response body received is: ${response.getBody().asString()}`,
        );
      }
      return response;
    } catch (ex) {
      if (ex instanceof ApplicationException) throw ex;
      throw new ApplicationException(`checkRecordsInOpenSearch Method Exception Message: ${(ex as Error).message}`);
    }
  }

  async checkRecordsInOpenSearchById(recordId: string, objectName: string, testData: Headers): Promise<RestResponse> {
    try {
      const payload = JSON.stringify([recordId]);
      const url = this.urlGenerator.dataManagerSearch.replace('{entityName}', objectName);
      const response = await this.restUtils.postData(url, testData, payload);
      const searchRecordsCount = response.json<{ SearchRecordsCount: number }>().SearchRecordsCount;
      if (response.getStatusCode() !== 200 || searchRecordsCount !== 1) {
        throw new ApplicationException(
          `Application Issue : Failure while searching the data in open search for ${testData['objectName']} using API :${url}. The response code was:${response.getStatusCode()} and the response body received is: ${response.getBody().asString()}`,
        );
      }
      return response;
    } catch (ex) {
      if (ex instanceof ApplicationException) throw ex;
      throw new ApplicationException(`checkRecordsInOpenSearch Method Exception Message: ${(ex as Error).message}`);
    }
  }
}
