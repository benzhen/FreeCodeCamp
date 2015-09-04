function end(str, target) {
  return str.slice(-(target.length)) === target
}

assert.strictEqual(end('Bastian', 'n'), true, 'should equal true if target equals end of string');
assert.strictEqual(end('Connor', 'n'), false, 'should equal false if target does not equal end of string');
assert.strictEqual(end('Walking on water and developing software from a specification are easy if both are frozen.', 'specification'), false, 'should equal false if target does not equal end of string');
assert.strictEqual(end('He has to give me a new name', 'name'), true, 'should equal true if target equals end of string');
assert.strictEqual(end('If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing', 'mountain'), false, 'should equal false if target does not equal end of string');