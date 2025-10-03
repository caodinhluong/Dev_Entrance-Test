const bestHarvest = require("./index");

test("mixed negatives and positives", () => {
  expect(bestHarvest([-2, 1, -3, 4, -1])).toBe(1); 
});

test("larger subarray gives max sum", () => {
  expect(bestHarvest([-1, 2, 3, -2, 5, -3])).toBe(4);
});

test("all positives", () => {
  expect(bestHarvest([1, 2, 3, 4])).toBe(4);
});

test("all negatives", () => {
  expect(bestHarvest([-5, -2, -3])).toBe(1);
});

test("zig-zag positives and negatives", () => {
  expect(bestHarvest([5, -1, 2, -1, 2, -1, 5])).toBe(7);
});
