let B = prompt("Enter the first number: ");
let C = prompt("Enter the second number: ");
if (C < B) {
    let sum=0;
    for (let n = C; n < B; n++) {
        if (n%7==0) {
            sum = sum + n;
   }
  }
console.log(sum);
}
else{
    console.log("C must be less than B");
}