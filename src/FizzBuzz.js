function fizzBuzz(number) {
        let string = '';

        if (number % 3 === 0) {
            string += 'Fizz'
        }
        if (number % 5 === 0) {
            string += 'Buzz'
        }

        return `${string || number}`
}

function fizzBuzzForSingleValue(number) {
    return fizzBuzz(number);
}

function fizzBuzzForRange(start, end) {
    for (let n = start; n <= end; n++) {
        console.log(fizzBuzz(n))
    }
}

export {fizzBuzzForSingleValue, fizzBuzzForRange }
