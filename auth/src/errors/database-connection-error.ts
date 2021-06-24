import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  reason: string;
  statusCode: number;
  constructor() {
    super("Error connecting to database");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    this.reason = "Error connecting to database!";
    this.statusCode = 500;
  }

  serializeErrors = () => {
    return [{ message: this.reason }];
  };
}
