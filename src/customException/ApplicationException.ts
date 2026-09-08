/** TypeScript port of com.conga.rlp.rudiments.customException.ApplicationException */
export class ApplicationException extends Error {
  public readonly cause?: Error;

  constructor(message: string, cause?: Error) {
    super(message);
    this.name = 'ApplicationException';
    this.cause = cause;
    Object.setPrototypeOf(this, ApplicationException.prototype);
  }
}
