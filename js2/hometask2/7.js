let number  =  prompt("Enter the number: ");
let reverse = 0;
let reminder = 0;
while (number>0) {
    reminder = number % 10;
    reverse = reverse*10 + reminder;
    number = parseInt(number/10);
}
console.log(reverse);