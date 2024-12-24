const numbers =[19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];

const isPrime =(num) =>{
    if (num <= 1) return false;
    for (let i=2; i<= Math.sqrt(num); i++){
        if (num % i ===0)return false;

    }
    return true;
}

const primeArray = numbers.filter(isPrime);
//console.log("Prime numbers:",primeNumbers);

const minNum = Math.min(19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30);
const maxNum = Math.max(19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30);
const sumNum = numbers.reduce((acc ,num) => acc + num, 0);

console.log("Original Array:");
console.log("Minimum",minNum);
console.log("Maximum:",maxNum);
console.log("Sum:",sumNum);

const minPrime = Math.min(19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30);
const maxPrime = Math.max(19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30);
const sumPrice = primeArray.reduce((acc, num)=acc +num, 0);

console.log("\nPrime Numbers Array:",primeArray);
console.log("Minimum prime",minNum);
console.log("Maximum prime:",maxNum);
console.log("Sum of prime numbers:",sumNum);




