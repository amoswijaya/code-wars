function arrayPlusArray(arr1, arr2) {
    let arr = []
    let result = 0
    arr.push(arr1, arr2)
    for(let i =0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++ ){
        result += arr[i][j]
      }
    }
    return result
  }


  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
  console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
  console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
  console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);