const ddd = (arr) => {
  let currentMaxGap = 0;
  let min = 0;
  let minIndex = -1;
  let leftIndex = -1;
  let rightIndex = -1;
  arr.forEach((element, index) => {
    if (index === 0 || element < min) {
      min = element;
      minIndex = index;
    } else {
      let gap = element - min;
      if (gap > currentMaxGap) {
        currentMaxGap = gap;
        leftIndex = minIndex;
        rightIndex = index;
      }
    }
  });
  return currentMaxGap;
}