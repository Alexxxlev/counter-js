function createCounter(initial_counter) {
  return {
    counter: initial_counter,
    get: function() {
      return this.counter;
    },
    increment: function() {
      this.counter++;
    },
    decrement: function() {
      this.counter--;
    },
    reset: function() {
      this.counter = initial_counter;
    }
  };
}