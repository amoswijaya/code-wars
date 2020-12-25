function abbrevName(name){
    let pisah = name.toUpperCase().split(' ')
    let hasil = pisah[0][0] + '.' + pisah[1][0]
    // for(let i =0 ; i < pisah.length; i++){
    //   hasil += pisah[i][0]
    // }
    
      
  return hasil
  }

  console.log(abbrevName("Sam Harris"), "S.H");
  console.log(abbrevName("Patrick Feenan"), "P.F");
  console.log(abbrevName("Evan Cole"), "E.C");
  console.log(abbrevName("P Favuzzi"), "P.F");
  console.log(abbrevName("David Mendieta"), "D.M");