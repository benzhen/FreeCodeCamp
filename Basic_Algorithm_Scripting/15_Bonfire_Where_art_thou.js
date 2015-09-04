function where(collection, source) {
  var sourceKey = Object.keys(source);
  var collectArr = []
  for(var name in collection){
      var objectKeys = Object.keys(collection[name]);
      if(collection[name][sourceKey] === source[sourceKey] && objectKeys.length >= sourceKey.length){
          collectArr.push(collection[name]);
      }
  }
  return collectArr;
}

assert.deepEqual(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }), [{ first: 'Tybalt', last: 'Capulet' }], 'should return an array of objects');
assert.deepEqual(where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], { 'a': 1 }), [{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], 'should return with multiples');
assert.deepEqual(where([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 }), [{ 'a': 1, 'b': 2 }, { 'a': 1, 'b': 2, 'c': 2 }], 'should return two objects in array');
assert.deepEqual(where([{ 'a': 5 }, { 'a': 5 }, { 'a': 5, 'b': 10 }], { 'a': 5, 'b': 10 }), [{ 'a': 5, 'b': 10 }], 'should return a single object in array');