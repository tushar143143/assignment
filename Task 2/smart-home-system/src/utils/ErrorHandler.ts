export class ErrorHandler {
    static handle(error: string): void {
      console.error(`[ERROR]: ${error}`);
    }
  }