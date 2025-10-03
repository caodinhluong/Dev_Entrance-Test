const findElement = require("./index");

test("target found in middle", () => {
  expect(findElement([1, 3, 5, 7, 9], 5)).toBe("YES");
});

test("target not found", () => {
  expect(findElement([1, 3, 5, 7, 9], 4)).toBe("NO");
});

test("empty array", () => {
  expect(findElement([], 1)).toBe("NO");
});

test("all elements same and target present", () => {
  expect(findElement([2, 2, 2, 2], 2)).toBe("YES");
});

test("target bigger than max element", () => {
  expect(findElement([1, 2, 3, 4, 5], 6)).toBe("NO");
});
