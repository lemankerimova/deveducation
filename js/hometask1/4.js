let C=prompt("First number: ");
let D=prompt("Second number: ");
if (C>D) {
    console.log(parseInt(C)+parseInt(D));
}

else if (C==D) {
    console.log(C*D);
}

else{
    console.log(C-D);
}