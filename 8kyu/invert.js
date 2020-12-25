function invert(array) {
    if(array.length === 0) return []
    else
    for (let i = 0; i < array.length; i++) {
         if(array[i] < 0) array[i] = Math.abs(array[i])
        else if (array[i] > 0) array[i] = array[i] - (array[i]*2)
        
    }

    return array
 }


console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);