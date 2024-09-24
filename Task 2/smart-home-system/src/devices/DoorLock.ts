import { Device } from './Device';

export class DoorLock extends Device {
    private locked: boolean;

    constructor(id: number) {
        super(id, 'door lock');
        this.locked = true; // Default status is 'locked'
    }

    turnOn(): void {
        this.locked = false; // Unlock the door
    }

    turnOff(): void {
        this.locked = true; // Lock the door
    }

    getStatus(): string {
        const status = this.locked ? 'locked' : 'unlocked';
        return `Door lock ${this.id} is ${status}.`;
    }
}
