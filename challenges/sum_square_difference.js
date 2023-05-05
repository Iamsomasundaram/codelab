// https://projecteuler.net/problem=6
const sum_square_difference = () => {
  const max = 100;
  let sum_of_squares = 0;
  let square_of_sum = 0;

  for (let iCnt = 1; iCnt <= max; iCnt++) {
    square_of_sum += iCnt;
    sum_of_squares += iCnt * iCnt;
  }
  console.log(square_of_sum * square_of_sum - sum_of_squares);
};

sum_square_difference();
