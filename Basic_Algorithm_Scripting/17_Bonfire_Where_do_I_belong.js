function where(arr, num) {
  arr.push(num);
  return arr.sort(function(a,b){
      return a-b;
  }).indexOf(num);
}

where([5, 3, 20, 3], 3)
