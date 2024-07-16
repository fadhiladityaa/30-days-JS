function isSquare(n) {
    const int = Math.sqrt(n)

    if (Number.isInteger(int)) {
         return `${n} is a square number (${int} * ${int})`
    } else if (n < 0) {
        return false
        // `${n}: Negative numbers cannot be square numbers`
    } else {
        return `${n} is not a square number`
    }
} 

console.log(isSquare(-1))



// if (n === int) {
//     return `${n} is a square number (${n} * ${n})`
// } else if (n < 0) {
//     return `${n}: Negative numbers cannot be square numbers`
// } 