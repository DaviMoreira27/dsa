function totalFruit(fruits: number[]): number {
  let maxFruits = 0;
  let initialFruit = 0;
  let bascket: Map<number, number> = new Map();
  let size = 0;

  for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    const currentFruitsInBasket = bascket.get(fruit) || 0;
    bascket.set(fruit, currentFruitsInBasket + 1);

    size = bascket.size;
    while (size > 2) {
      let currentBascket = bascket.get(fruits[initialFruit]) ?? 0;
      // IMPORTANT: bascket.set(fruits[initialFruit], currentBascket--); is wrong, here we are putting the currentBascket value before we decrease it, we need to do this:
      bascket.set(fruits[initialFruit], --currentBascket);

      if (!bascket.get(fruits[initialFruit])) {
        size--;
        bascket.delete(fruits[initialFruit]);
      }
      initialFruit++;
    }

    maxFruits = Math.max(maxFruits, i - initialFruit + 1);
  }

  return maxFruits;
}

const array = [1, 2, 1];
console.log(totalFruit(array));
