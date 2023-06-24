class PaymentProcessor {
  processPayment() {
    const payment = new CreditCardPayment();
    payment.process();
  }
}

class CreditCardPayment {
  process() {
    // Process credit card payment
  }
}
