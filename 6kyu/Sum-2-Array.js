// function addArrays(array1, array2) {
//     if(array1.length === 0 && array2.length === 0){
//         return []
//     }

//     let arrayToNumber1 = parseInt(array1.join(''));
//     let arrayToNumber2 = parseInt(array2.join(''));
//     let total =  arrayToNumber1 + arrayToNumber2
//     let arrStr = total.toString().split('')
//     let arr= []

//     for (let i = 0; i < arrStr.length; i++) {
//         let nomor = Number(arrStr[i])
//         arr.push(nomor)
        
//     }

//     return arr
    
// }

console.log(addArrays([6,7], [6,7]), [ 1, 3, 4 ])

function addArrays(array1, array2) {
    if(array1.length < 1 && array2.length < 1){
      return []
    }
    else if( array1.length < 1 ){
      return array2
    }
    else if( array2.length < 1){
      return array1
    }

    let num1 = parseInt(array1.join(''));
    let num2 = parseInt(array2.join(''));
    let sum = num1 + num2;

    let strArr = sum.toString().split('')
    let newArr = []

    if(strArr[0] === '-'){
        strArr[1] = '-'+ strArr[1]
        strArr.shift()
    }


    for(let char of strArr){
    newArr.push(parseInt(char))
    }
    return newArr

}