function truncate(str, num) {
  if(str.length <= num)
    return str;
  
  return str.slice(0,num-3) + "...";
}

expect(truncate('A-tisket a-tasket A green and yellow basket', 11)).to.eqls('A-tisket...');
expect(truncate('Peter Piper picked a peck of pickled peppers', 14)).to.eqls('Peter Piper...');
assert(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length) === 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is = length');
assert.strictEqual(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2), 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is < length');