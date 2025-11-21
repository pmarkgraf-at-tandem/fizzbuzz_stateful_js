const FizzBuzz = require('../src/fizzbuzz');
const when = "when fizzbuzz is called"

// Requirements:
// FIZZ_BUZZ_SDS_1. When fizzbuzz is called, fizzbuzz shall respond with a string
// TC 1) Given fizzbuzz has not been called, when fizzbuzz is called, then fizzbuzz shall return a string.

describe("Given fizzbuzz has not been called", () => {
    let uut = new FizzBuzz(); 
    describe(`${when}`, () => {
        it("then fizzbuzz shall return a string", () => {
            expect(typeof uut.fizzbuzz()).toBe("string")
        });
    });
});

// FIZZ_BUZZ_SDS_2. When the count of times fizzbuzz has been called is not divisible by 3 or 5,
//                      fizzbuzz shall return a string containing the count represented in arabic numerals
// TC 1) Given fizzbuzz has been called once, when fizzbuzz is called, then fizzbuzz shall return "1".
// TC 2) Given fizzbuzz has been called three times, when fizzbuzz is called, then fizzbuzz shall return "4".
// TC 3) Given fizzbuzz has been called thirteen times, when fizzbuzz is called, then fizzbuzz shall return "14".
// TC 4) Given fizzbuzz has been called 15 times, when fizzbuzz is called, then fizzbuzz shall return "16".
// TC 5) Given fizzbuzz has been called 100 times, when fizzbuzz is called, then fizzbuzz shall return "101".

describe("Given fizzbuzz has been called once", () => {
    let uut = new FizzBuzz(); 
    describe(`${when}`, () => {
        it("then fizzbuzz shall return '1'", () => {
            expect(uut.fizzbuzz()).toBe("1");
        });
    });
});

// FIZZ_BUZZ_SDS_3. When the count of times fizzbuzz has been called is divisible by 3 and not 5,
//                      fizzbuzz shall return "Fizz"
// TC 1) Given fizzbuzz has been called twice, when fizzbuzz is called, then fizzbuzz shall return "Fizz".
// TC 2) Given fizzbuzz has been called five times, when fizzbuzz is called, then fizzbuzz shall return "Fizz".
// TC 3) Given fizzbuzz has been called 101 times, when fizzbuzz is called, then fizzbuzz shall return "Fizz".

// xdescribe("Given fizzbuzz has been called twice", () => {
//     describe(`${when}`, () => {
//         it("then fizzbuzz shall return 'Fizz'", () => {
            
//         });
//     });
// });

// FIZZ_BUZZ_SDS_4. When the count of times fizzbuzz has been called is divisible by 5 and not 3,
//                      fizzbuzz shall return "Buzz"
// TC 1) Given fizzbuzz has been called four times, when fizzbuzz is called, then fizzbuzz shall return "Buzz".
// TC 2) Given fizzbuzz has been called eight times, when fizzbuzz is called, then fizzbuzz shall return "Buzz".
// TC 3) Given fizzbuzz has been called 99 times, when fizzbuzz is called, then fizzbuzz shall return "Buzz".

// xdescribe("Given fizzbuzz has been called XXXX", () => {
//     describe(`${when}`, () => {
//         it("then fizzbuzz shall return a string", () => {
            
//         });
//     });
// });

// FIZZ_BUZZ_SDS_5. When the count of times fizzbuzz has been called is divisible by 3 and 5,
//                      fizzbuzz shall return "Fizzbuzz"
// TC 1) Given fizzbuzz has been called 14 times, when fizzbuzz is called, then fizzbuzz shall return "Fizzbuzz".
// TC 2) Given fizzbuzz has been called 29 times, when fizzbuzz is called, then fizzbuzz shall return "Fizzbuzz".
// TC 3) Given fizzbuzz has been called 2999 times, when fizzbuzz is called, then fizzbuzz shall return "Fizzbuzz".


// xdescribe("Given fizzbuzz has been called XXXX", () => {
//     describe(`${when}`, () => {
//         it("then fizzbuzz shall return a string", () => {
            
//         });
//     });
// });

/* Assumptions: 
1. Fizzbuzz has an internal state which records the amount of times it's called.
2. The internal state counter starts at 0.
3. Each new instance of Fizzbuzz will reset the count to 0.
*/
