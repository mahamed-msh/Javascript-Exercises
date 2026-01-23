function operation(a,b, callback){
    return callback(a,b)
}

function add(a,b){
    return a+b
}
function difference(a,b){
    return a-b
}
function product(a,b){
    return a*b
}
function quotient(a,b){
    return a/b
}


console.log(operation(3,6, add))
console.log(operation(3,6, difference))
console.log(operation(3,6, product))
console.log(operation(3,6, quotient))