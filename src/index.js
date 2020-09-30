const fibonacci = (n) => {

  let arrayFibonacci = [1, 1];

  for (let i = 0; i < n; i++) {
    let count = arrayFibonacci[i] + arrayFibonacci[i + 1];
    arrayFibonacci.push(count);
  }
  arrayFibonacci.length = n;
  return arrayFibonacci;
}


module.exports = fibonacci;