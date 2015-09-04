function bouncer(arr) {
  return arr.filter(function(val){
    return Boolean(val);
  });
}

assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9], 'should remove falsey values');
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c'], 'should return full array if no falsey elements');
assert.deepEqual(bouncer([false, null, 0]), [], 'should return empty array if all elements are falsey');