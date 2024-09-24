import { Logger } from './services/logging-service';
import { config } from './config';

// Importing the various design pattern implementations
import './design-patterns/behavioral/observer-pattern';
import './design-patterns/behavioral/command-pattern';
import './design-patterns/creational/factory-pattern';
import './design-patterns/structural/adapter-pattern';
import './design-patterns/structural/decorator-pattern';

Logger.log(`Starting ${config.appName}...`);

// This can be expanded to interact with users, gather inputs, and keep the program running.
