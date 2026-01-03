const arr1 = [1,2,3];
const arr2 = [...arr1,4,5,6];
console.log('spread')
console.log(arr2)

let multiply = (...number)=>{
    return number.reduce((product, num)=>product*num ,1)
}

console.log('rest')

console.log(multiply(3,4,5))