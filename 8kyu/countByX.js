function countBy(x, n) {
    let result = []
    let batas = x*n
    for (let i = 1; i <= batas; i++) {
        if(i % x === 0) result.push(i)
        
    }
    return result
  }

console.log(countBy(1,5), [1,2,3,4,5])
console.log(countBy(2,5), [2,4,6,8,10])