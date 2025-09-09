function triangleNumber(heights: number[]): number {
  let result = 0;
  const end = heights.length - 1;
  const sorted = heights.sort();

  for (let i = 0; i < sorted.length; i++) {
    if (sorted.length - i >= 3) {
      let start = i + 1;

      while (start < end) {
        const a = sorted[i];
        const b = sorted[start];
        const c = sorted[end];

        if (b + c > a) {
          result++;
        }

        start++;
      }
    }
  }

  return result;
}

const nums = [11, 4, 9, 6, 15, 18]; // 10

console.log(triangleNumber(nums));
