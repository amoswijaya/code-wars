let Ball = function(ballType){
    if(typeof ballType == 'string') this.ballType = ballType
    else this.ballType = 'regular'
}


console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");