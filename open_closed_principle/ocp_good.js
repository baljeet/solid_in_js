class GreeterGood {
  greet() {
    throw new Error('Not implemented!');
  }
}

class EnglishGreeter extends GreeterGood {
  greet() {
    return 'Hello!';
  }
}

class SpanishGreeter extends GreeterGood {
  greet() {
    return '¡Hola!';
  }
}
