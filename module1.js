
// modules  protected there function and variables from leaking
var y ="hello js"
function calcuSum(a,b){
    const sum = a+b;
    console.log(sum);
}

module.exports ={
    y:y,
    calcuSum:calcuSum,
}; 