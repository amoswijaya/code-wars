function solution(number){
    let kelipatan = 0
    for (let i = 0; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0 ){
            kelipatan += i
        }
        
    }
  return kelipatan
}

console.log(solution(10), 23);