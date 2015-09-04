function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for(var i=0;i<str.length;i++)
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  return str.join(' ');
}

expect(titleCase("I'm a little tea pot")).to.be.a('String');
expect(titleCase("I'm a little tea pot")).to.equal("I'm A Little Tea Pot");
expect(titleCase("sHoRt AnD sToUt")).to.equal("Short And Stout");
expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal("Here Is My Handle Here Is My Spout");