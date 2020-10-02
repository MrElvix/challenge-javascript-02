const fibonacci = (n) => {

  const arrayFibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    arrayFibonacci[i] = arrayFibonacci[i - 2] + arrayFibonacci[i - 1];   
  }
  
  arrayFibonacci.shift(); /*Eliminar el primer elemento de un Array*/
  return arrayFibonacci;
}


module.exports = fibonacci;