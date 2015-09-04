function chunk(arr, size) {
  var chunkArr = [];
  var holdChunkArr = [];
  arr.forEach(function(val){
    if(holdChunkArr.length === size){
      chunkArr.push(holdChunkArr);
      holdChunkArr = [];
    }
    
    holdChunkArr.push(val);
  });
  chunkArr.push(holdChunkArr);
  return chunkArr;
}

assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']], 'should return chunked arrays');
assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], 'should return chunked arrays');
assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], 'should return chunked arrays');
assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], 'should return the last chunk as remaining elements');