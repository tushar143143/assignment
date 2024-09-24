export class InputValidator {
    static validateString(input: string): boolean {
      return typeof input === 'string' && input.trim() !== '';
    }
  
    static validateNumber(input: number): boolean {
      return typeof input === 'number' && !isNaN(input);
    }
  }
  