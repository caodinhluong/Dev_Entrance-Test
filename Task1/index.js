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


console.log(findElement([1, 3, 5, 7, 9], 5)); //YES(target nằm ở giữa)
console.log(findElement([1, 3, 5, 7, 9], 4)); //NO (target không tồn tại)
console.log(findElement([], 1));              //NO (mảng rỗng)
console.log(findElement([2, 2, 2, 2], 2));    //YES(tất cả phần tử giống target)
console.log(findElement([1, 2, 3, 4, 5], 6)); //NO (target lớn hơn max)


module.exports = findElement;

