const FILE = {
  MDX: {
    NAME: 'mdx',
    EXTENSION: '.mdx',
  },
} as const;

/*
1, -1, 0 determine the relative order of two elements during the comparison in the sort() method

# Rules for the Comparison Function:

1. Return value < 0 ("-1"):
   - The element `a` should come before the element `b` in the sorted array.
   - This leads to ascending order for the property being compared.

2. Return value > 0 ("1"):
   - The element `b` should come before the element `a` in the sorted array.
   - This leads to descending order for the property being compared.

3. Return value = 0:
   - The order of `a` and `b` remains unchanged.

EXAMPLE:

const array = [
  { name: 'Apple', age: 5 },
  { name: 'Banana', age: 2 },
  { name: 'Cherry', age: 8 },
];

array.sort((a, b) => a.age - b.age);

Output:
[
  { name: 'Banana', age: 2 },
  { name: 'Apple', age: 5 },
  { name: 'Cherry', age: 8 },
];
*/
const SORT = {
  ASC: -1,
  DESC: 1,
} as const;

export { SORT, FILE };
