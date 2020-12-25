function digital_root(n) {
    if(n.toString().length === 1)return n
    let str = n.toString()
    let total = 0
    for (let i = 0; i < str.length; i++) {
        total+= Number(str[i])
        
    }
    return digital_root(total)
  }


console.log(digital_root(16), 7 )
console.log(digital_root(456), 6 )