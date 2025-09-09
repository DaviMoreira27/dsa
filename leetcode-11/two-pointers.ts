// Use Bun

/*
  We already tried brute force, but it is too slow.

  What we know about the problem?

  We want to maximize the area, right? I would we want to initialize the other pointer right after the first one?
  With that we are comparing the smallest chunks possible that can form a rectangle

  What if we start both pointer at extreme opposites? One right at the start, and the other in the end of the array.
  With that, maybe we can find in the first chance the biggest area possible, with the two columns being the largest ones in the array.

  But what if they are not the biggest of all, we will now need to move two pointers in opposite directions. Should we move them both
  at the same time? It will not work, we may lose some area.

  Let's say that we have this array [1,8,6,2,5,4,8,3,7], start index at 1, end index at 7, the max area between this two is eight,
  I can already see that the area between 6 and 5 is bigger, what should we do?

  The limiting factor here is that 1 is too small comparing it with seven, if he was bigger then we probably wouldn't have a problem.
  So why not just increase the start index, only two things can happen, I find a smaller number, it wouldn't change our situation, but I could
  find a bigger number, this would be a change for us. If I did the same with the end index we would have more chance of finding a smaller number
  than seven, and that's is not what we want.

  So I increase the start index to 1, now the two colums are 8 and 7, a much higher area.

  I will to repeat this until all check all the possible combinations, that is the **entire array length**. For this I must check,
  what pointer I change that I have the most chance of increasing the area, the one smaller or the bigger one, the answer is always the smallest one,
  because we would have only two chances, finding a bigger number (what we want) or a smaller number, that it wouldn't change our situation.

  Complexity: O(N)
*/

function max_area(heights: number[]): number {
  let start = 0;
  let end = heights.length - 1;
  let result = 0;

  while (start < end) {
    const width = end - start;
    const minHeight = Math.min(heights[start], heights[end]);
    result = Math.max(result, width * minHeight);

    // Now we verify what is the smallest column
    // If is the start index, we increase it
    if (heights[start] === minHeight) {
      start++;
    }

    // If is the end index, we decrease it
    if (heights[end] === minHeight) {
      end--;
    }
  }
  return result;
}
console.log(max_area([3, 4, 1, 2, 2, 4, 1, 3, 2]));
console.log(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]));
