function bestHarvest(yields) {
  if (yields.length === 0) return 0;

  let maxSum = -Infinity;
  let currentSum = 0;
  let currentLength = 0;
  let bestLength = 0;
  let allNegative = true;
  let maxSingleNegative = -Infinity;

  for (let y of yields) {
    if (y >= 0) allNegative = false;
    if (y < 0 && y > maxSingleNegative) maxSingleNegative = y;

    if (currentSum + y < y) {
      currentSum = y;
      currentLength = 1;
    } else {
      currentSum += y;
      currentLength += 1;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      bestLength = currentLength;
    }
  }

  if (allNegative) return 1;

  return bestLength;
}

console.log(bestHarvest([-2, 1, -3, 4, -1]));        //1(dãy con tốt nhất là [4])
console.log(bestHarvest([-1, 2, 3, -2, 5, -3]));     //4(dãy con tốt nhất là [2,3,-2,5] có tổng 8)
console.log(bestHarvest([1, 2, 3, 4]));              //4(cả mảng đều tốt nhất)
console.log(bestHarvest([-5, -2, -3]));              //1(toàn số âm)
console.log(bestHarvest([5, -1, 2, -1, 2, -1, 5]));  //7(cả mảng cộng lại là lớn nhất)
module.exports = bestHarvest; 
