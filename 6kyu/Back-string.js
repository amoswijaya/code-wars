function clean_string(str) {
    var strArr = str.split("");
    if(strArr === [] || strArr.indexOf("#") === -1) {
      return strArr.join("");
    } else {
      for(var i = 0; i < strArr.length; i++) {
        if(strArr[i] === "#") {
          if(strArr[i-1] === undefined) {
            strArr.splice(i,1);
            return clean_string(strArr.join(""));
          } else {
            strArr.splice(i-1,2);
            return clean_string(strArr.join(""));
          }
        }
      }  
    }
  } 


  console.log(clean_string("abc#d##c")); // ac
  console.log(clean_string('abc####d##c#')); // ''
  console.log(clean_string("831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##"));// 6+yqw8hfklsd-=-f
  