import { RLPRestUtils } from '../utils/RLPRestUtils';
import { RLPURLGenerator } from '../utils/RLPURLGenerator';
import { RestResponse } from '../utils/RestResponse';
import { ApplicationException } from '../customException/ApplicationException';
import { QueryEditor } from './pojo/QueryEditor';

type Headers = Record<string, string>;

/**
 * TypeScript + Playwright port of com.conga.rlp.rudiments.data.RLPDataHelper, scoped to only
 * searchQuery (per the attached usage snapshot).
 */
export class RLPDataHelper {
  private readonly urlGenerator: RLPURLGenerator;

  constructor(tenantURL: string, private readonly restUtils: RLPRestUtils) {
    this.urlGenerator = new RLPURLGenerator(tenantURL);
  }

  async searchQuery(mapTestData: Headers, selectList: string[]): Promise<RestResponse> {
    try {
      const url = this.urlGenerator.queryEditorURL.replace('{objectName}', mapTestData['objectName']);
      const payload = JSON.stringify(QueryEditor.performQuerySearch(mapTestData, selectList));
      const response = await this.restUtils.postData(url, mapTestData, payload);
      if (response.getStatusCode() !== 200) {
        throw new ApplicationException(
          `Application Issue : Failure while searching the ${mapTestData['objectName']} using API :${url}. The response code was:${response.getStatusCode()} and the response body received is: ${response.getBody().asString()}`,
        );
      }
      return response;
    } catch (ex) {
      if (ex instanceof ApplicationException) throw ex;
      throw new ApplicationException(`searchQuery Method Exception Message: ${(ex as Error).message}`);
    }
  }
}
