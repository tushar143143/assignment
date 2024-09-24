export class Logger {
    static log(message: string): void {
      console.log(`[INFO]: ${message}`);
    }
  
    static error(message: string): void {
      console.error(`[ERROR]: ${message}`);
    }
  
    static warn(message: string): void {
      console.warn(`[WARNING]: ${message}`);
    }
  
    static debug(message: string): void {
      if (process.env.DEBUG_MODE === 'true') {
        console.log(`[DEBUG]: ${message}`);
      }
    }
  }
  