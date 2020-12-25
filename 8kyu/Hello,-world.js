function hello(name) {
    if(!name){
      return 'Hello, World!'
    }else{
      let kecil = name.toLowerCase()
      let hasil = ''
      for(let i =0; i < kecil.length; i++){
        if(i === 0){
          hasil += kecil[i].toUpperCase()
        }else{
          hasil += kecil[i]
        }
      }
      return `Hello, ${hasil}!`
    }
  }

  console.log(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
  console.log(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
  console.log(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
  console.log(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )