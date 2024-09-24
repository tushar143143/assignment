import { Logger } from '../../services/logging-service';

class ConfigurationManager {
  private static instance: ConfigurationManager;
  private settings: { [key: string]: string } = {};

  // Private constructor prevents instantiation from other classes
  private constructor() {
    Logger.log('ConfigurationManager initialized');
  }

  // This is the global access point to the single instance of the class
  public static getInstance(): ConfigurationManager {
    if (!ConfigurationManager.instance) {
      ConfigurationManager.instance = new ConfigurationManager();
    }
    return ConfigurationManager.instance;
  }

  // Method to add or update configuration settings
  public setSetting(key: string, value: string): void {
    this.settings[key] = value;
    Logger.log(`Setting ${key} = ${value}`);
  }

  // Method to retrieve configuration settings
  public getSetting(key: string): string | undefined {
    return this.settings[key];
  }
}

// Sample usage
const configManager1 = ConfigurationManager.getInstance();
configManager1.setSetting('apiBaseUrl', 'https://api.example.com');

const configManager2 = ConfigurationManager.getInstance();
Logger.log(`API Base URL from second instance: ${configManager2.getSetting('apiBaseUrl')}`);

// Both configManager1 and configManager2 point to the same instance
Logger.log(`Are configManager1 and configManager2 the same instance? ${configManager1 === configManager2}`);
