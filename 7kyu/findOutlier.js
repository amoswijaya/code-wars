function findOutlier(integers){
    let ganjil = []
    let genap = []
    for (let i = 0; i < integers.length; i++) {
        if(integers[i] % 2 === 0) genap.push(integers[i])
        else ganjil.push(integers[i])        
    }
    if(ganjil.length > genap.length) return genap[0]
    else return ganjil[0]

    
  }

  console.log(findOutlier([0, 1, 2]), 1)
  console.log(findOutlier([1, 2, 3]), 2)
  console.log(findOutlier([2,6,8,10,3]), 3)
  console.log(findOutlier([0,0,3,0,0]), 3)
  console.log(findOutlier([1,1,0,1,1]), 0)