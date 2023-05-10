// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript

const seriesSum = (n) => {
  const dividend = 1;
  let divisor = 4;
  let factor = 3;
  let sum = 0;

  if (n <= 0) {
    return undefined;
  }
  for (let iCnt = 0; iCnt < n - 1; iCnt++) {
    if (iCnt !== 0) {
      divisor += factor;
    }
    sum += dividend / divisor;
  }
  return (sum + dividend).toFixed(2);
};

console.log(seriesSum(4));
