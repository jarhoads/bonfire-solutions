function Tester(testName,tests){
  this.testing = testName;
  this.tests = tests;
}

Tester.prototype.test =  function(val, shouldBe) {
  if (val === shouldBe) { return "pass " + "value: " + val; }
  else {
    if(typeof(shouldBe) === typeof(val)){ return "type fail " + val + " should be type: " + typeof(shouldBe) + " but got type: " + typeof(val); } 
    else{ return "fail " + "should be: " + shouldBe + " but got: " + val; }
  }
}

Tester.prototype.showTest = function(){
  return "---testing " + this.testing;
}

Tester.prototype.tester = function(){
  console.log(this.showTest());
  this.tests.forEach(function(testVal){
    // tests will be arrays with [name,val,shouldBe] format
    console.log(testVal[0] + this.test(testVal[1],testVal[2]));
  },this);
}