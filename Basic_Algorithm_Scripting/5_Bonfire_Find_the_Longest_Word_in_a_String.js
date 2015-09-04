function findLongestWord(str) {
  str = str.split(' ');
  var longest = 0;
  str.forEach(function(val){
    if(val.length > longest)
      longest = val.length
  });
  return longest
}

expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.be.a('Number');
expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.equal(6);
expect(findLongestWord('May the force be with you')).to.equal(5);
expect(findLongestWord('Google do a barrel roll')).to.equal(6);
expect(findLongestWord('What is the average airspeed velocity of an unladen swallow')).to.equal(8);
expect(findLongestWord('What if we try a super-long word such as otorhinolaryngology')).to.equal(19);
