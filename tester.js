function Tester(testFunction){
  this.testing = testFunction;
}

Tester.prototype.test =  function(val, shouldBe) {
  if (val === shouldBe) { return "pass " + "value: " + val; }
  else { return "fail " + "should be: " + shouldBe + " but got: " + val; }
}

Tester.prototype.showTest = function(){
  return "---testing " + this.testing;
}