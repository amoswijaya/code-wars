function highAndLow(numbers){
    let arr = numbers.split(' ')
    let urut = arr.sort((a,b) => a-b)
    let string = `${urut[urut.length -1]} ${urut[0]}`
    return string
  }


  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");