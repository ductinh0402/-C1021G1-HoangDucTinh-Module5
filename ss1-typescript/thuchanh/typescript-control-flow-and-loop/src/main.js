var sum = 0;
var count = 0;
for (var i = 2; count < 29; i++) {
    var isPrime = true;
    if (i == 2) {
        sum += 1;
        count++;
        continue;
    }
    for (var j = 2; j < Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i;
    count++;
}
console.log(sum);
