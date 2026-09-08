import { APIRequestContext } from '@playwright/test';
import { ApplicationException } from '../customException/ApplicationException';
import { RestResponse } from './RestResponse';

/**
 * TypeScript port of com.conga.rlp.rudiments.utils.RLPRestUtils, scoped to only the
 * methods consumed by the Revenue Admin UI repo: generateAccessToken (renamed from the
 * old generateRLCAccessToken, which no longer exists in the Java source), getData,
 * postData, putData, putDataWithoutBody, patchData, deleteData, deleteDataWithPayload.
 */
export class RLPRestUtils {
  public accessToken?: string;

  constructor(private readonly request: APIRequestContext) {}

  setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }

  /** Common org/user headers appended to every authenticated call. */
  private baseHeaders(testData: Record<string, string>): Record<string, string> {
    return {
      'organization-id': testData['organizationId'] ?? '',
      'organization-fid': testData['organizationFriendlyId'] ?? '',
      'user-id': testData['userId'] ?? '',
    };
  }

  private authHeader(): Record<string, string> {
    return { Authorization: `Bearer ${this.accessToken ?? ''}` };
  }

  /**
   * Requests an OAuth access token and stores it on this instance for subsequent calls.
   * testData must contain: tokenURL, clientId, clientSecret.
   */
  async generateAccessToken(testData: Record<string, string>): Promise<void> {
    try {
      const response = await this.request.post(testData['tokenURL'], {
        form: {
          grant_type: 'client_credentials',
          client_id: testData['clientId'],
          client_secret: testData['clientSecret'],
        },
      });
      if (response.status() !== 200) {
        const body = await response.text().catch(() => '');
        throw new ApplicationException(
          `Application Issue : Failure in authentication using the API :${testData['tokenURL']}. The response code was:${response.status()} and the response body received is: ${body} The traceId is: ${response.headers()['traceid']}`,
        );
      }
      const json = await response.json();
      this.setAccessToken(json.access_token);
    } catch (ex) {
      if (ex instanceof ApplicationException) throw ex;
      throw new ApplicationException((ex as Error).message);
    }
  }

  /**
   * Builds the conditional header set Java's getData() switched on (pricelistid,
   * categoryId, storeFrontId, cartId, acquireLock, IsAdmin) - collapsed here into one
   * pass instead of ~8 separate if/else branches.
   */
  private buildConditionalHeaders(headerInfo: Record<string, string>): Record<string, string> {
    const headers: Record<string, string> = { ...this.authHeader(), ...this.baseHeaders(headerInfo) };
    if (headerInfo['pricelistid'] !== undefined) headers['pricelistid'] = headerInfo['pricelistid'];
    if (headerInfo['categoryId'] !== undefined) headers['categoryId'] = headerInfo['categoryId'];
    if (headerInfo['storeFrontId'] !== undefined) headers['storeFrontId'] = headerInfo['storeFrontId'];
    if (headerInfo['cartId'] !== undefined) headers['cartId'] = headerInfo['cartId'];
    if (headerInfo['acquireLock'] !== undefined) headers['acquireLock'] = String(headerInfo['acquireLock'] === 'true');
    if (headerInfo['IsAdmin'] !== undefined) headers['IsAdmin'] = headerInfo['IsAdmin'];
    return headers;
  }

  async getData(url: string, headerInfo: Record<string, string>): Promise<RestResponse> {
    const startTime = Date.now();
    try {
      const response = await this.request.get(url, { headers: this.buildConditionalHeaders(headerInfo) });
      return RestResponse.from(response, startTime);
    } catch (ex) {
      throw new ApplicationException((ex as Error).message);
    }
  }

  async postData(url: string, testData: Record<string, string>, payload: string): Promise<RestResponse> {
    const startTime = Date.now();
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...this.authHeader(),
        ...this.baseHeaders(testData),
      };
      if (testData['ensureSyncToOpenSearch'] !== undefined) {
        headers['Ensure-Sync-To-OpenSearch'] = testData['ensureSyncToOpenSearch'];
      }
      if (testData['organizationIurl'] !== undefined) {
        headers['organization-iurl'] = testData['organizationIurl'];
      }
      const response = await this.request.post(url, { headers, data: payload });
      return RestResponse.from(response, startTime);
    } catch (ex) {
      throw new ApplicationException((ex as Error).message);
    }
  }

  async putData(url: string, testData: Record<string, string>, payload: string): Promise<RestResponse> {
    const startTime = Date.now();
    try {
      const headers = { 'Content-Type': 'application/json', ...this.authHeader(), ...this.baseHeaders(testData) };
      const response = await this.request.put(url, { headers, data: payload });
      return RestResponse.from(response, startTime);
    } catch (ex) {
      throw new ApplicationException((ex as Error).message);
    }
  }

  async putDataWithoutBody(url: string, testData: Record<string, string>): Promise<RestResponse> {
    const startTime = Date.now();
    try {
      const headers = { 'Content-Type': 'application/json', ...this.authHeader(), ...this.baseHeaders(testData) };
      const response = await this.request.put(url, { headers });
      return RestResponse.from(response, startTime);
    } catch (ex) {
      throw new ApplicationException((ex as Error).message);
    }
  }

  async patchData(url: string, testData: Record<string, string>, payload: string): Promise<RestResponse> {
    const startTime = Date.now();
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...this.authHeader(),
        ...this.baseHeaders(testData),
      };
      if (testData['ensureSyncToOpenSearch'] !== undefined) {
        headers['Ensure-Sync-To-OpenSearch'] = testData['ensureSyncToOpenSearch'];
      }
      if (testData['include-internal'] !== undefined) {
        headers['include-internal'] = testData['include-internal'];
      }
      if (testData['organizationIurl'] !== undefined) {
        headers['organization-iurl'] = testData['organizationIurl'];
      }
      const response = await this.request.patch(url, { headers, data: payload });
      return RestResponse.from(response, startTime);
    } catch (ex) {
      throw new ApplicationException((ex as Error).message);
    }
  }

  async deleteData(url: string, headerInfo: Record<string, string>): Promise<RestResponse> {
    const startTime = Date.now();
    try {
      const headers = { ...this.authHeader(), ...this.baseHeaders(headerInfo) };
      const response = await this.request.delete(url, { headers });
      return RestResponse.from(response, startTime);
    } catch (ex) {
      throw new ApplicationException((ex as Error).message);
    }
  }

  async deleteDataWithPayload(url: string, headerInfo: Record<string, string>, payload: string): Promise<RestResponse> {
    const startTime = Date.now();
    try {
      const headers = { 'Content-Type': 'application/json', ...this.authHeader(), ...this.baseHeaders(headerInfo) };
      const response = await this.request.delete(url, { headers, data: payload });
      return RestResponse.from(response, startTime);
    } catch (ex) {
      throw new ApplicationException((ex as Error).message);
    }
  }
}
