function destroyer(arr) {
  var values = [];
  for(var i=1;i<arguments.length;i++)
    values.push(arguments[i]);
  return arr.filter(function(val){
    if(values.indexOf(val) == -1)
      return true;
    
    return false;
  });
}

assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], 'should remove correct values from an array');
assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], 'should remove correct values from an array');
assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1], 'should accept more than two additional arguments');
assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), [], 'should remove correct values from an array');
assert.deepEqual(destroyer(['tree', 'hamburger', 53], 'tree', 53), ['hamburger'], 'should handle NaN-elements');