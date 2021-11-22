import { fizzBuzzForSingleValue } from '../src/FizzBuzz.js'
import assert from "assert";
import { expect } from "chai";

// Without replicating the fizzbuzz logic it is hard to verify all scenarios, stuck in some simple tests
describe('FizzBuzz', function() {
    describe('#The correct text should be logged', function() {
        it('numbers divisible by 3 should contain Fizz', function() {
            [3, 6, 9, 30, 33, 90, 93, 96].forEach( val =>
                expect(fizzBuzzForSingleValue(val)).to.match(/(Fizz)/)
            )
        });

        it('numbers divisible by 5 should contain Buzz', function() {
            [5, 15, 20, 30, 45, 50, 60, 75, 90].forEach( val =>
                expect(fizzBuzzForSingleValue(val)).to.match(/(Buzz)/)
            )
        });

        //This test is superfluous as the previous two cover this condition
        it('numbers divisible by 3 and 5 should contain FizzBuzz', function() {
            [15, 30, 45, 60, 75, 90].forEach( val =>
                assert.strictEqual(fizzBuzzForSingleValue(val), 'FizzBuzz')
            )
        });

        it('other non-divisible numbers should log the original value ', function() {
            [1, 2, 4, 7, 11, 17, 97].forEach( val =>
                assert.strictEqual(fizzBuzzForSingleValue(val), `${val}`)
            )
        })
    });
});
