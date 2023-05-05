// https://projecteuler.net/problem=2

const even_fibonacci_numbers = () => {
  const firstTerm = 1;
  const secondTerm = 2;
  const fourMil = 4000000;
  let fibonacci = [firstTerm, secondTerm];
  let sum = 0;
  let evenSum = 0;

  while (true) {
    sum = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(sum);
    if (sum % 2 === 0) {
      evenSum += sum;
    }
    if (sum >= fourMil) {
      break;
    }
  }
  // we need to add secondTerm because we starting the summation when the term is 3
  // basically 1, 2 are skipped while starting to sum up
  console.log(evenSum + secondTerm);
};
even_fibonacci_numbers();
