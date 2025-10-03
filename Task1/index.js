function findElement(arr, target) {
  // Khởi tạo 2 biến trỏ đầu và cuối mảng
  let left = 0, right = arr.length - 1;

  // Lặp cho đến khi 2 con trỏ giao nhau
  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Tìm chỉ số giữa

    if (arr[mid] === target) return "YES";      // Nếu tìm thấy target
    if (arr[mid] < target) left = mid + 1;      // Nếu target lớn hơn -> tìm bên phải
    else right = mid - 1;                       // Nếu target nhỏ hơn -> tìm bên trái
  }

  return "NO"; // Không tìm thấy
}

// --- Kiểm thử với nhiều test case ---
console.log(findElement([1, 3, 5, 7, 9], 5)); // YES
console.log(findElement([1, 3, 5, 7, 9], 4)); // NO
console.log(findElement([], 1));              // NO
console.log(findElement([2, 2, 2, 2], 2));    // YES
console.log(findElement([1, 2, 3, 4, 5], 6)); // NO


// --- Optional: Unit test với Jest ---
// Lưu file: findElement.test.js
/*
test("target found", () => {
  expect(findElement([1,3,5,7,9], 5)).toBe("YES");
});
test("target not found", () => {
  expect(findElement([1,3,5,7,9], 4)).toBe("NO");
});
*/
