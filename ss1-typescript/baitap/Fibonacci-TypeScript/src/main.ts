function fibonacci(i: number): any {
    if (i < 0) {
        return -1;
    } else if (i == 0 || i == 1) {
        return i;
    } else {
        return fibonacci(i - 1) + fibonacci(i - 2);
    }
}

let sum = 0;
for (let i = 0; i < 5; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log(sum);
