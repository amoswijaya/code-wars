String.prototype.toJadenCase = function () {
    let hasil = []
    let kata = ''
    let pisah = this.split(' ')
    for (let i = 0; i < pisah.length; i++) {
        kata += pisah[i][0].toUpperCase()

        for (let j = 1; j < pisah[i].length ; j++) {
            kata += pisah[i][j]
            
        }
        hasil.push(kata)
        kata = ''
        
    }
    return hasil.join(' ')

};

  var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");