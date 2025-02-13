class Fatorial {
  *execute(input, current = 1, next = 2) {
    if (input === 0) {
      return;
    }

    yield current;

    yield* this.execute(input - 1, next * current, next + 1);
  }
}

module.exports = Fatorial;
