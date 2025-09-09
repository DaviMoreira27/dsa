/*

To check if a triplet is a valid triangle we must sum the smaller sides, if the result is above the larger side, its a valid triangle.

First the array is sorted, if that we now have the bigger parts "separated" from the small sides os a triangle

then we loop starting by the end of the array (the biggest side possible), and implement the two pointer`s technique within
the second largest side and the first element, if the second largest + the smallest are bigger then the biggest side possible
its a valid triangle, there is another catch, if we find a valid triangle between Z and K, with K > Z, so for every K + N we have
a valid triangle.

We repeat this process until the entire array is processed.

Complexity: O(N^2)

*/
function triangleNumber(heights: number[]): number {
  let result = 0;
  const sorted = heights.sort((a, b) => a - b);

  for (let i = sorted.length - 1; i >= 2; i--) {
    let start = i - 1;
    let end = 0;

    while (end < start) {
      const a = sorted[i];
      const b = sorted[start];
      const c = sorted[end];

      if (b + c > a) {
        // I am starting from the end of the array + 1
        result += start - end;
        start--;
      } else {
        end++;
      }
    }
  }
  return result;
}

// 4, 6, 9, 11, 15, 18
const nums = [11, 4, 9, 6, 15, 18]; // 10
const nums2 = [1, 8, 2, 10, 3, 5, 12, 15, 20]; // 14

console.log(triangleNumber(nums));
