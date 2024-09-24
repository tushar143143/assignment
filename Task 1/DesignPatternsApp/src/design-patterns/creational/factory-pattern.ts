import { Logger } from '../../services/logging-service';

interface Notification {
  send(message: string): void;
}

class SMSNotification implements Notification {
  send(message: string) {
    Logger.log(`Sending SMS: ${message}`);
  }
}

class EmailNotification implements Notification {
  send(message: string) {
    Logger.log(`Sending Email: ${message}`);
  }
}

class NotificationFactory {
  static createNotification(type: string): Notification {
    if (type === 'sms') {
      return new SMSNotification();
    } else if (type === 'email') {
      return new EmailNotification();
    } else {
      throw new Error("Invalid notification type");
    }
  }
}

// Sample usage
const notification1 = NotificationFactory.createNotification('sms');
notification1.send("You've got a message!");

const notification2 = NotificationFactory.createNotification('email');
notification2.send("Welcome to our platform!");
