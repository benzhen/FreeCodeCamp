function factorialize(num) {
  if(num == 1 || num == 0)
    return 1;
  return num * factorialize(num-1);
}

expect(factorialize(5)).to.be.a("Number");
expect(factorialize(5)).to.equal(120);
expect(factorialize(10)).to.equal(3628800);
expect(factorialize(20)).to.equal(2432902008176640000)