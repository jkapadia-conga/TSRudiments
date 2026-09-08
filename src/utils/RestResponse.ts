import { APIResponse } from '@playwright/test';

/**
 * TypeScript port of com.jayway.restassured.response.Response, wrapping Playwright's
 * APIResponse so callers keep the RestAssured-style getStatusCode()/getBody().asString()/
 * getHeader()/getTimeIn() ergonomics used throughout the original Java helpers.
 */
export class RestResponse {
  private readonly bodyText: string;
  private readonly elapsedMs: number;
  private readonly statusCode: number;
  private readonly headerMap: Record<string, string>;

  private constructor(bodyText: string, elapsedMs: number, statusCode: number, headerMap: Record<string, string>) {
    this.bodyText = bodyText;
    this.elapsedMs = elapsedMs;
    this.statusCode = statusCode;
    this.headerMap = headerMap;
  }

  static async from(raw: APIResponse, startTimeMs: number): Promise<RestResponse> {
    let bodyText = '';
    try {
      bodyText = await raw.text();
    } catch {
      bodyText = '';
    }
    return new RestResponse(bodyText, Date.now() - startTimeMs, raw.status(), raw.headers());
  }

  getStatusCode(): number {
    return this.statusCode;
  }

  getBody(): { asString: () => string } {
    return { asString: () => this.bodyText };
  }

  getHeader(name: string): string | undefined {
    return this.headerMap[name.toLowerCase()];
  }

  getHeaders(): Record<string, string> {
    return this.headerMap;
  }

  /** Mirrors Response#getTimeIn(TimeUnit.MILLISECONDS) */
  getTimeIn(): number {
    return this.elapsedMs;
  }

  /** Parses the response body as JSON. */
  json<T = any>(): T {
    return JSON.parse(this.bodyText) as T;
  }
}
