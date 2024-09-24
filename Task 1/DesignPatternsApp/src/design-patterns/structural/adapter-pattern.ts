import { Logger } from '../../services/logging-service';

class OldPaymentSystem {
  pay(amount: number) {
    Logger.log(`Paying ${amount} using old system`);
  }
}

interface NewPaymentGateway {
  processPayment(amount: number): void;
}

class PaymentAdapter implements NewPaymentGateway {
  constructor(private oldPaymentSystem: OldPaymentSystem) {}

  processPayment(amount: number) {
    this.oldPaymentSystem.pay(amount);
  }
}

// Sample usage
const oldSystem = new OldPaymentSystem();
const adapter = new PaymentAdapter(oldSystem);

adapter.processPayment(100);
