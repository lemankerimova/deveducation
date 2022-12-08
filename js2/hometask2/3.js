let B = prompt("Enter the B: ");
let divisor = 0;
for (let n = 1; n <= B/2; n++){
     if (B% n == 0) {
         divisor = n;
     }
}
console.log(divisor);