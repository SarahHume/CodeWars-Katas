function getMultiples(number) {

    let sum = 0;

    if(number > 3) {
        
        for (let i = number - 1; i >= 3; i--) {
            if(i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }

    }

    return sum;
}

module.exports = getMultiples;