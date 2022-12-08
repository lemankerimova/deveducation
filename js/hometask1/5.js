let number1, number2;
let C = prompt("first number: ");
let D = prompt("second number: ");
let E = prompt("third number: ");

let discriminant = D*D - 4*C*E;

if (discriminant > 0) {
    number1 = (-D + Math.sqrt(discriminant)) / (2*C);
    number2 = (-D - Math.sqrt(discriminant)) / (2*C);

    console.log(`The numbers of quadratic equation are ${number1} and ${number2}`);
}

else if (discriminant == 0) {
    number1 = number2 = -D / (2*C);
    
    console.log(`The numbers of quadratic equation are ${number1} and ${number2}`);
}