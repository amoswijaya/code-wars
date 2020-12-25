function persistence(num) {
    let count = 0
    while(num.toString().length !== 1){
        num = num.toString().split('').reduce((a,b) => a*b)
        count++
    }
    return count
 }

console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);