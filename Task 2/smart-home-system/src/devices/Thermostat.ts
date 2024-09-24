import { Device } from './Device';

export class Thermostat extends Device {
    private temperature: number;
    private isOn: boolean;

    constructor(id: number, initialTemperature: number = 72) {
        super(id, 'thermostat');
        this.temperature = initialTemperature; // Default temperature is 72 degrees
        this.isOn = false;
    }

    turnOn(): void {
        this.isOn = true;
    }
    getTemperature(): number {
        return this.temperature;
    }
    

    turnOff(): void {
        this.isOn = false;
    }

    setTemperature(temp: number): void {
        this.temperature = temp;
    }

    getStatus(): string {
        const status = this.isOn ? 'On' : 'Off';
        return `Thermostat ${this.id} is ${status}, set to ${this.temperature} degrees.`;
    }
}
