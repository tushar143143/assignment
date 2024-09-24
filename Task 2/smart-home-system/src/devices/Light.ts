import { Device } from './Device';

export class Light extends Device {
    private status: 'on' | 'off';

    constructor(id: number) {
        super(id, 'light');
        this.status = 'off'; // Default status is 'off'
    }

    turnOn(): void {
        this.status = 'on';
    }

    turnOff(): void {
        this.status = 'off';
    }

    getStatus(): string {
        return `Light ${this.id} is ${this.status}.`;
    }
}
