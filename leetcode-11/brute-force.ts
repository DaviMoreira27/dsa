// Use bun

/*
  On this solution we are basically comparing each column with all the others
  Complexity: O(N^2)
*/

function max_area(heights: number[]): number {
  // Initialize max_area with 0, because this problem and the world do not accept negative areas.
  let maxArea = 0;

  // Using two loops, one starting at 0, the other one column ahead
  // With this in all the execution the i column will be compared with the i + j column
  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      // I had some trouble undertanding this line for some reason, but when we calculate the perimeter
      // of a rectangle in a cartesian plane, we use the last X-axis point minus the first X-axis point
      const width = j - i;
      // The water will always be restricted by the smaller column (basic physics)
      const minHeight = Math.min(heights[i], heights[j]);
      const result = minHeight * width;
      maxArea = Math.max(result, maxArea);
    }
  }

  return maxArea;
}

console.log(max_area([3, 4, 1, 2, 2, 4, 1, 3, 2]));
