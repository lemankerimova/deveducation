let numbers = [1,2,3,4,5,6,7,8,9,10];
let maximum = numbers[0];
for (let n = 0; n < numbers.length; n++){ 
    if (numbers[n] > maximum ) {
        maximum = numbers[n];
    }
}
console.log(maximum);