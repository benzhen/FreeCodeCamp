function reverseString(str) {
  return str.split('').reverse().join('');
}

expect(reverseString('hello')).to.be.a('String');
expect(reverseString('hello')).to.equal('olleh');
expect(reverseString('Howdy')).to.equal('ydwoH');
expect(reverseString('Greetings from Earth')).to.equal('htraE morf sgniteerG');
