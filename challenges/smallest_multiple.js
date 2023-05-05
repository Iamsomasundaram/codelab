// https://projecteuler.net/problem=5

const smallest_multiple = () => {
  const max = 20;
  let smallestNo = 1;
  let iCnt;
  while (true) {
    for (iCnt = 1; iCnt <= max; iCnt++) {
      if (smallestNo % iCnt === 0) {
        continue;
      }
      break;
    }
    if (iCnt - 1 === max) {
      break;
    }
    smallestNo++;
  }
  console.log(smallestNo);
};

smallest_multiple();
