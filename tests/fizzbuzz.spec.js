const FizzBuzz = require('../src/fizzbuzz');

// Requirements:
// FIZZ_BUZZ_SDS_1. When fizzbuzz is called, fizzbuzz shall respond with a string
// FIZZ_BUZZ_SDS_2. When the count of times fizzbuzz has been called is not divisible by 3 or 5,
//                      fizzbuzz shall return a string containing the count represented in arabic numerals
// FIZZ_BUZZ_SDS_3. When the count of times fizzbuzz has been called is divisible by 3 and not 5,
//                      fizzbuzz shall return "Fizz"
// FIZZ_BUZZ_SDS_4. When the count of times fizzbuzz has been called is divisible by 5 and not 3,
//                      fizzbuzz shall return "Buzz"
// FIZZ_BUZZ_SDS_5. When the count of times fizzbuzz has been called is divisible by 3 and 5,
//                      fizzbuzz shall return "Fizzbuzz"

describe('given… a precondition', function () {
    let sut = new FizzBuzz;
    describe('when… an action', function () {
        let result = sut.fizzbuzz();
        it('then… an expectation', function () {
            expect(result).toBe("expected value");
        });
    });
});
