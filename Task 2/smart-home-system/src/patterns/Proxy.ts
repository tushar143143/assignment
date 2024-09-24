
import { Device } from '../devices/Device';
import { Logger } from '../utils/Logger';

export class DeviceProxy implements Device {
  constructor(private realDevice: Device) {}

  get id(): number {
    return this.realDevice.id;
  }

  get type(): string {
    return this.realDevice.type;
  }



  getStatus(): string {
    Logger.log(`Accessing status of device ID ${this.realDevice.id}`);
    return this.realDevice.getStatus();
  }

  turnOn(): void {
    Logger.log(`Turning on device ID ${this.realDevice.id}`);
    this.realDevice.turnOn();
  }

  turnOff(): void {
    Logger.log(`Turning off device ID ${this.realDevice.id}`);
    this.realDevice.turnOff();
  }
}
