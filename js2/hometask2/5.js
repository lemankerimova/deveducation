const N = prompt("Please enter the value of N");
let n1=0, n2=1, F;
for (let index = 1; index <=N; index++) {
    console.log('The Fibonacci number with the sequence number '+ index + ' is', n1)
    F= (n1+n2);
    n1=n2
    n2=F
}