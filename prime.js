function prime(n){
    for (let i = 2; i <=Math.sqrt(n) ; i++) {
        if (n % i === 0) return 0;
    }
    return n>1;
}
let arr = [];
let n = +prompt('Input size of array');
for (let i = 0; i < n; i++) {
    arr[i] = +prompt(i);
}
for (let i = 0; i < n; i++) {
    if (prime(arr[i])) document.write(arr[i]);
}



