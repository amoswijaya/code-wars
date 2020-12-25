function highestRank(arr) {
    let num = 0
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        let tempArr = arr[i]
        let tempCount = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === tempArr) {
                tempCount++
            }
        }
        if (tempCount > count) {
            num = tempArr
            count = tempCount
        }
    }
    if (count === 1 || count === arr.length) {
        return -1
    }

    return num
}


var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr), 12);