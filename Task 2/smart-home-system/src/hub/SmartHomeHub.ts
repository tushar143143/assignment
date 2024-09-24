import { Device } from '../devices/Device';
import { Logger } from '../utils/Logger';

export class SmartHomeHub {
    private devices: Map<number, Device> = new Map();
    private schedules: Array<{ deviceId: number, time: string, action: string }> = [];
    private triggers: Array<{ condition: () => boolean, action: () => void }> = [];

    addDevice(device: Device) {
        if (this.devices.has(device.id)) {
            Logger.warn(`Device with ID ${device.id} already exists.`);
        } else {
            this.devices.set(device.id, device);
            Logger.log(`Added device: ${device.type} with ID: ${device.id}`);
        }
    }

    removeDevice(deviceId: number) {
        if (this.devices.has(deviceId)) {
            this.devices.delete(deviceId);
            Logger.log(`Removed device with ID: ${deviceId}`);
        } else {
            Logger.warn(`No device found with ID: ${deviceId}`);
        }
    }

    turnOnDevice(deviceId: number) {
        const device = this.devices.get(deviceId);
        if (device) {
            device.turnOn();
            Logger.log(`Turned on device ${device.type} with ID ${deviceId}`);
        } else {
            throw new Error(`Device with ID ${deviceId} not found`);
        }
    }

    turnOffDevice(deviceId: number) {
        const device = this.devices.get(deviceId);
        if (device) {
            device.turnOff();
            Logger.log(`Turned off device ${device.type} with ID ${deviceId}`);
        } else {
            throw new Error(`Device with ID ${deviceId} not found`);
        }
    }
    getDeviceData(id: number): Device | null {
        return this.devices.get(id) || null;
    }
    
    getDeviceStatus(deviceId: number) {
        const device = this.devices.get(deviceId);
        if (!device) {
            throw new Error(`Device with ID ${deviceId} not found`);
        }
        return device.getStatus();
    }

    getStatusReport(): string {
        let report = '';
        this.devices.forEach(device => {
            report += `${device.getStatus()} `;
        });
        return report.trim();
    }

    scheduleDeviceAction(deviceId: number, time: string, action: 'TurnOn' | 'TurnOff') {
        if (!this.devices.has(deviceId)) {
            throw new Error(`Device with ID ${deviceId} not found`);
        }
        this.schedules.push({ deviceId, time, action });
        Logger.log(`Scheduled action: ${action} for device ${deviceId} at ${time}`);
    }

    getScheduledTasks() {
        return this.schedules;
    }

    automateTrigger(condition: () => boolean, action: () => void) {
        this.triggers.push({ condition, action });
        Logger.log('Added a new automated trigger');
    }

    checkTriggers() {
        this.triggers.forEach(trigger => {
            if (trigger.condition()) {
                trigger.action();
            }
        });
    }
}
