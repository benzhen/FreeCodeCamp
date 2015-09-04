function slasher(arr, howMany) {
  return arr.slice(howMany);
}

assert.deepEqual(slasher([1, 2, 3], 2), [3], 'should drop the first two elements');
assert.deepEqual(slasher([1, 2, 3], 0), [1, 2, 3], 'should return all elements');
assert.deepEqual(slasher([1, 2, 3], 9), [], 'should return an empty array');