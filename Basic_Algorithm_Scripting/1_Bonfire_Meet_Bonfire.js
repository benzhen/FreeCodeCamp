function meetBonfire(argument) {
  // Good luck!
  console.log("you can read this function's argument in the developer tools", argument);

  return true;
}

expect(meetBonfire()).to.be.a("boolean");
expect(meetBonfire()).to.be.true;
