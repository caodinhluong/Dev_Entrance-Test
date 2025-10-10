function findElement(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return "YES";
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return "NO";
}


console.log(findElement([1, 3, 5, 7, 9], 5));
console.log(findElement([1, 3, 5, 7, 9], 4));
console.log(findElement([], 1));
console.log(findElement([2, 2, 2, 2], 2));
console.log(findElement([1, 2, 3, 4, 5], 6));


module.exports = findElement;

