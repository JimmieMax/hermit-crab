function binarySearch(arr, target) {
  let i = 0,
    l = arr.length - 1;
  while (i <= l) {
    let mid = Math.round((i + l) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) l = mid - 1;
    else i = mid + 1;
  }
  return -1;
}

let t = binarySearch([1, 3], 3);
console.log(t);
