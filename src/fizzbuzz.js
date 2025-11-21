// FizzBuzz implementation for TDD exercise
class Fizzbuzz {
    constructor() { 
        this.counter = 0;

    }
    fizzbuzz() {
        this.counter +=1;


        return this.counter.toString();
    }
}

module.exports = Fizzbuzz;
