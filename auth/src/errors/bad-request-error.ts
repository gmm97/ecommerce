import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode: number;
  message: string;
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
    this.message = message;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors = () => {
    return [{ message: this.message }];
  };
}
