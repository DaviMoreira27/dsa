// !! Come back later

function threeSumTwoPointers(nums: number[]): number[][] {
  let result: number[][] = [];
  let tempStore: number[] = [];

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (!tempStore.length) {
      tempStore.push(nums[start], nums[end]);
    }

    if (tempStore.length) {
      const reduceArr = tempStore.reduce((acc, number) => {
        return acc + number;
      });

      const missing = 0 - reduceArr;

      if (missing === nums[start]) {
      }
    }
  }
  return result;
}
