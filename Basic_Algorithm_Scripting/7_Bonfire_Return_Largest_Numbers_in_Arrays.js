function largestOfFour(arr) {
  var largestArr = [];
  for(var i=0;i<arr.length;i++){
    var hold = 0;
    for(var j=0;j<arr[i].length;j++)
      if(arr[i][j] > hold)
        hold = arr[i][j];
    largestArr.push(hold);
  }
  return largestArr;
}

expect( largestOfFour( [[4, 5, 1, 3],     [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])    ).to.be.a('array');
assert.deepEqual( largestOfFour( [[13, 27, 18, 26], [4, 5, 1, 3],     [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27,5,39,1001], 'arrays should match.');
assert.deepEqual( largestOfFour( [[4, 9, 1, 3],     [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]), [9,35,97,1000000], 'arrays should match.');