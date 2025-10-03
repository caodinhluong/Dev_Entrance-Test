function bestHarvestRun(yields) {
  let maxSum = -Infinity;    
  let currentSum = 0;        
  let currentLength = 0;      
  let bestLength = 0;        

  for (let y of yields) {
    if (currentSum + y < y) {
      currentSum = y;
      currentLength = 1;
    } else {
      currentSum += y;
      currentLength += 1;
    }

    // Nếu tìm thấy tổng lớn hơn
    if (currentSum > maxSum) {
      maxSum = currentSum;
      bestLength = currentLength;
    }
  }

  return bestLength;
}

// --- Test với ví dụ ---
console.log(bestHarvestRun([-2, 1, -3, 4, -1]));       // 1
console.log(bestHarvestRun([-1, 2, 3, -2, 5, -3]));    // 4

// --- Test thêm ---
console.log(bestHarvestRun([1, 2, 3, 4]));             // 4
console.log(bestHarvestRun([-5, -2, -3]));             // 1
