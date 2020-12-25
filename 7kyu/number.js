var number = function (array) {
    let obj = {}

    for (let i = 0; i < array.length; i++) {
        if (!obj[i + 1]) {
            obj[i + 1] = array[i]
        }
    }

    let arr = []

    for (const key in obj) {
        arr.push(`${key}: ${obj[key]}`)
    }

    return arr
}

console.log(number([]), [], 'Empty array should return empty array');
console.log(number(["a", "b", "c", 'd']), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');