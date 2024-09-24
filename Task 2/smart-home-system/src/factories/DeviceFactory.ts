import { Light } from '../devices/Light';
import { Thermostat } from '../devices/Thermostat';
import { DoorLock } from '../devices/DoorLock'
import { Device } from '../devices/Device';

export class DeviceFactory {
    static createDevice(type: string, id: number): Device {
        switch (type) {
            case 'light':
                return new Light(id);
            case 'thermostat':
                return new Thermostat(id);
            case 'door':
                return new DoorLock(id);
            default:
                throw new Error(`Unknown device type: ${type}`);
        }
    }
}
