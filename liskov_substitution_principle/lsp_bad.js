class BirdBad {
  fly() {
    return 'I can fly!';
  }
}

class PenguinBad extends BirdBad {
  fly() {
    throw new Error('I can\'t fly!');
  }
}
