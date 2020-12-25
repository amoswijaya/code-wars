function testit(a, b) {
    let arr = []

    for (let i = 0; i < a.length; i++) {
        arr.push(a[i])

    }

    for (let i = 0; i < b.length; i++) {
        arr.push(b[i])

    }

    return arr.sort()
}


console.log(testit([0], [1]), [0, 1], "")
console.log(testit([1, 2], [3, 4]), [1, 2, 3, 4], "")
console.log(testit([1], [2, 3, 4]), [1, 2, 3, 4], "")
console.log(testit([1, 2, 3], [4]), [1, 2, 3, 4], "")
console.log(testit([1, 2], [1, 2]), [1, 1, 2, 2], "")