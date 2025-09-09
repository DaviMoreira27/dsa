// Use Bun

/*
  3 indexes transversing the array, I check every triplet possible

  Complexity: O(N⁶)

  The 3 aligned loops will check every possible combination of the 3 indexes, with that we have O (N³)

  ```
  const map = finalResult.map((fr) => {
    const isEqual = fr.every(
      (n) => n === nums[i] || n === nums[j] || n === nums[k],
    );
    return isEqual;
  });

  const checkTriplet = map.every((m) => !m);
```
Here we have a problem, the finalResult will transverse all the found triplets, in the worst case scenario we have another O(N³)

With that: O(N³) X O(N³) = O(N⁶)

// This could be improved if I removed the duplicate check from the inside of the loop, I made it outside
*/

function threeSum(nums: number[]): number[][] {
  const finalResult: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const check = nums[i] + nums[j] + nums[k];

        if (check === 0) {
          const map = finalResult.map((fr) => {
            const isEqual = fr.every(
              (n) => n === nums[i] || n === nums[j] || n === nums[k],
            );
            // It will return true if the triplet was already discovered
            return isEqual;
          });

          const checkTriplet = map.every((m) => !m); // Now we check if the triplet was already stored

          if (checkTriplet) {
            finalResult.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }

  return finalResult;
}

// Run: time bun run brute-force.ts -> ≃ 2 mins
const nums = [
  ...Array(1000).fill(-1),
  ...Array(1000).fill(0),
  ...Array(1000).fill(1),
];

console.log(threeSum(nums));
