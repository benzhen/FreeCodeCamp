function mutation(arr) {
  var firstWord = arr[0].toLowerCase().split('');
  var secondWord = arr[1].toLowerCase().split('');
  
  for(var i=0;i<secondWord.length;i++)
    if(firstWord.indexOf(secondWord[i]) === -1)
      return false;
  
  return true;
}

expect(mutation(['hello', 'hey'])).to.be.false;
expect(mutation(['hello', 'Hello'])).to.be.true;
expect(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).to.be.true;
expect(mutation(['Mary', 'Army'])).to.be.true;
expect(mutation(['Mary', 'Aarmy'])).to.be.true;
expect(mutation(['Alien', 'line'])).to.be.true;
expect(mutation(['floor', 'for'])).to.be.true;
expect(mutation(['hello', 'neo'])).to.be.false;