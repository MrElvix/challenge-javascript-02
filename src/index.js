const fibonacci = (n) => {
debugger;
  const arrayFibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    arrayFibonacci[i] = arrayFibonacci[i - 2] + arrayFibonacci[i - 1];
    // let count = arrayFibonacci[i - 2] + arrayFibonacci[i - 1];
    // arrayFibonacci.shift(count);
  }
  // arrayFibonacci.length = n;
  arrayFibonacci.shift(); /*Eliminar el primer elemento de un Array*/
  return arrayFibonacci;
}


module.exports = fibonacci;