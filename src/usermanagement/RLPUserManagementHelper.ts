import { RLPRestUtils } from '../utils/RLPRestUtils';
import { RLPURLGenerator } from '../utils/RLPURLGenerator';
import { RestResponse } from '../utils/RestResponse';
import { ApplicationException } from '../customException/ApplicationException';

type Headers = Record<string, string>;

/**
 * TypeScript + Playwright port of com.conga.rlp.rudiments.usermanagement.RLPUserManagementHelper,
 * scoped to only getUserSearch and getAllUserSearch (per the attached usage snapshot).
 */
export class RLPUserManagementHelper {
  private readonly urlGenerator: RLPURLGenerator;

  constructor(tenantURL: string, private readonly restUtils: RLPRestUtils) {
    this.urlGenerator = new RLPURLGenerator(tenantURL);
  }

  async getAllUserSearch(mapTestData: Headers): Promise<RestResponse> {
    const url = mapTestData['queryParameter'] ? this.urlGenerator.userAPI + mapTestData['queryParameter'] : this.urlGenerator.userAPI;
    const response = await this.restUtils.getData(url, mapTestData);
    if (response.getStatusCode() !== 200) {
      throw new ApplicationException(
        `Application Issue : Failure while searching the users using the API :${url}. The response code was:${response.getStatusCode()} and the response body received is: ${response.getBody().asString()}`,
      );
    }
    return response;
  }

  async getUserSearch(userId: string, mapTestData: Headers): Promise<RestResponse> {
    const base = this.urlGenerator.userByIdAPI.replace('{userId}', userId);
    const url = mapTestData['queryParameter'] ? base + mapTestData['queryParameter'] : base;
    const response = await this.restUtils.getData(url, mapTestData);
    if (response.getStatusCode() !== 200) {
      throw new ApplicationException(
        `Application Issue : Failure while searching the user using the API :${url}. The response code was:${response.getStatusCode()} and the response body received is: ${response.getBody().asString()}`,
      );
    }
    return response;
  }
}
