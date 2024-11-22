function fizzBuzz(num) {
    if (isNaN(num)) {
        return console.log(num)
    }

    if (num % 3 === 0 && num % 5 === 0) {
        return console.log('FizzBuzz')
    } else if (num % 3 === 0) {
        return console.log('Fizz')
    } else if (num % 5 === 0) {
        return console.log('Buzz')
    } else if (num % 3 !== 0 && num % 5 !== 0) {
        return console.log(num)
    }
}

num = Math.random() * (0, 100) + 0
fizzBuzz(Math.floor(num))