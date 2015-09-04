function palindrome(str) {
  str = str.toLowerCase().replace(/\W+/g,'');
  
  return str === str.split('').reverse().join('');
}



expect(palindrome("eye")).to.be.a("boolean");
assert.deepEqual(palindrome("eye"), true);
assert.deepEqual(palindrome("race car"), true);
assert.deepEqual(palindrome("not a palindrome"), false);
assert.deepEqual(palindrome("A man, a plan, a canal. Panama"), true);
assert.deepEqual(palindrome("never odd or even"), true);
assert.deepEqual(palindrome("nope"), false);
assert.deepEqual(palindrome("almostomla"), false);