import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode: number;
  errors: ValidationError[];
  constructor(errors: ValidationError[]) {
    super("Error performing request validation");
    this.errors = errors;
    this.statusCode = 400;
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors = () => {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  };
}
