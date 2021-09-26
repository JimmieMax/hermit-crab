function binarySearch(arr, n, target) {
    let l = 0,
        r = n - 1;
    while (l <= r) {
        let mid = l + (r - l) / 2;
        if (arr[mid] === target) return mid;
        if (arr[mid] > target) r = mid - 1;
        else l = mid + 1;
    }
    return -1;
}

let t = binarySearch([1, 3, 4, 7, 9], 5, 4);
console.log(t)