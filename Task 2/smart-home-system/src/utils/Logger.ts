export class Logger {
    static log(message: string) {
        console.log(`[LOG] ${message}`);
    }
    static error(...messages: string[]): void {
        console.error(...messages);
    }    
    static warn(message: string) {
        console.warn(`[WARN] ${message}`);
    }
    
}
