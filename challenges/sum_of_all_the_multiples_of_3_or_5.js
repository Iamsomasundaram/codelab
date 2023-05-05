// https://projecteuler.net/problem=1

const sum_of_all_the_multiples_of_3_or_5 = (n) => {
  let sum = 0;
  for (let iCnt = 1; iCnt < n; iCnt++) {
    if (iCnt % 3 === 0 || iCnt % 5 === 0) {
      sum += iCnt;
    }
  }
  console.log(sum);
};

sum_of_all_the_multiples_of_3_or_5(1000);
