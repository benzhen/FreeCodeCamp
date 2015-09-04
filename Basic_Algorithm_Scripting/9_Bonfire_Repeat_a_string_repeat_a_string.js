function repeat(str, num) {
  if(num < 0)
    return '';
  
  return str.repeat(num);
}

assert.strictEqual(repeat('*', 3), '***', 'should repeat a string n times');
assert.strictEqual(repeat('abc', 3), 'abcabcabc', 'should repeat a string n times');
assert.strictEqual(repeat('abc', -2), '', 'should return an empty string for negative numbers');