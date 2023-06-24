const IPayment = {
  process: () => { },
};

class CreditCardPayment {
  process() {
    // Process credit card payment
  }
}

class PaymentProcessor {
  constructor(payment) {
    this.payment = payment;
  }

  processPayment() {
    this.payment.process();
  }
}

// Usage
const creditCardPayment = new CreditCardPayment();
const paymentProcessor = new PaymentProcessor(creditCardPayment);

paymentProcessor.processPayment();
