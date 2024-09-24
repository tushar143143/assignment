import { SmartHomeHub } from './hub/SmartHomeHub';
import { DeviceFactory } from './factories/DeviceFactory';
import { Logger } from './utils/Logger';
import { Thermostat } from './devices/Thermostat';

const hub = new SmartHomeHub();

// Add devices using the Factory Method
hub.addDevice(DeviceFactory.createDevice('light', 1));
hub.addDevice(DeviceFactory.createDevice('thermostat', 2));
hub.addDevice(DeviceFactory.createDevice('door', 3));

// Control devices
hub.turnOnDevice(1); // Turn on Light 1
hub.turnOffDevice(2); // Turn off Thermostat 2
Logger.log(hub.getStatusReport()); // Get status report

// Automate a trigger based on the thermostat's temperature
const thermostat = hub.getDeviceData(2); // Fetch the actual thermostat object
if (thermostat instanceof Thermostat) {
    hub.automateTrigger(
        () => thermostat.getTemperature() >= 75, // Trigger when temperature is 75 or more
        () => hub.turnOffDevice(1) // Action: turn off Light 1
    );
} else {
    Logger.error('Thermostat not found or invalid type');
}
