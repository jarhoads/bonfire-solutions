var telephoneCheckTests = [
	["testing telephoneCheck of 555-555-5555: ",telephoneCheck("555-555-5555"),true],
    ["testing telephoneCheck of (555)555-5555: ",telephoneCheck("(555)555-5555"),true],
    ["testing telephoneCheck of (555) 555-5555: ",telephoneCheck("(555) 555-5555"),true],
    ["testing telephoneCheck of 555 555 5555: ",telephoneCheck("555 555 5555"),true],
    ["testing telephoneCheck of 555555555: ",telephoneCheck("5555555555"),true],
    ["testing telephoneCheck of 1 555 555 5555: ",telephoneCheck("1 555 555 5555"),true],
	["testing telephoneCheck of 1 555)555-5555: ",telephoneCheck("1 555)555-5555"),false],
    ["testing telephoneCheck of 2 (757) 622-7382: ",telephoneCheck("2 (757) 622-7382"),false]
];
var telephoneCheckTester = new Tester("telephoneCheck",telephoneCheckTests);
telephoneCheckTester.tester();

var symmetricDiffTests = [
	["testing sym of [1, 2, 3], [5, 2, 1, 4]: ",sym([1, 2, 3],[5, 2, 1, 4]).toString(),"3,4,5"],
    ["testing sym of [1, 2, 5], [2, 3, 5], [3, 4, 5]: ",sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).toString(),"1,4,5"],
    ["testing sym of [1, 2, 5], [2, 3, 5], [3, 4, 5]: ",sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).toString(),"1,4,5"]
];
var symmetricDiffTester = new Tester("symmetricDiff",symmetricDiffTests);
symmetricDiffTester.tester();

var changeTests = [
	["testing change for 19.50, 20.00: ",drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]).toString(),"QUARTER,0.5"],
    ["testing change for Insufficient Funds ",drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]).toString(),"Insufficient Funds"],
    ["testing change for Insufficient Funds 2 ",drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]).toString(),"Insufficient Funds"],
    ["testing change for Closed ",drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]).toString(),"Closed"],
    ["testing change for 3.26, 100.00: ",drawer(3.26, 100.00, 
                                [["PENNY", 1.01], 
                                ["NICKEL", 2.05], 
                                ["DIME", 3.10], 
                                ["QUARTER", 4.25], 
                                ["ONE", 90.00], 
                                ["FIVE", 55.00], 
                                ["TEN", 20.00], 
                                ["TWENTY", 60.00], 
                                ["ONE HUNDRED", 100.00]]).toString(),"TWENTY,60,TEN,20,FIVE,15,ONE,1,QUARTER,0.5,DIME,0.2,PENNY,0.04"]
];
var changeTester = new Tester("drawer",changeTests);
changeTester.tester();

var inventory1 = inventory([[21, "Bowling Ball"], 
                   [2, "Dirty Sock"], 
                   [1, "Hair Pin"], 
                   [5, "Microphone"]], 
                   [[2, "Hair Pin"], 
                   [3, "Half-Eaten Apple"], 
                   [67, "Bowling Ball"], 
                   [7, "Toothpaste"]]);
                   
var inventory2 = inventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
var inventory3 = inventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
                   
var inventoryTests = [
	["testing inventory(): ",inventory().toString(),[].toString()],
    ["testing inventory length: ",inventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length,6],
    ["testing inventory 1: ",
        inventory1.toString(),
        [[88, "Bowling Ball"], 
         [2, "Dirty Sock"], 
         [3, "Hair Pin"], 
         [3, "Half-Eaten Apple"], 
         [5, "Microphone"], 
         [7, "Toothpaste"]].toString()],
    ["testing inventory 2: ",
        inventory2.toString(),
        [[67, "Bowling Ball"], 
         [2, "Hair Pin"], 
         [3, "Half-Eaten Apple"], 
         [7, "Toothpaste"]].toString()],
    ["testing inventory 3: ",
        inventory3.toString(),
        [[1, "Bowling Ball"], 
         [0, "Dirty Sock"], 
         [1, "Hair Pin"], 
         [1, "Half-Eaten Apple"], 
         [0, "Microphone"], 
         [1, "Toothpaste"]].toString()]
];
var inventoryTester = new Tester("inventory",inventoryTests);
inventoryTester.tester();

var permAloneTests = [
	["testing permAlone aab: ",permAlone("aab"),2],
    ["testing permAlone aaa: ",permAlone("aaa"),0],
    ["testing permAlone abcdefa: ",permAlone("abcdefa"),3600],
    ["testing permAlone abfdefa: ",permAlone("abfdefa"),2640],
    ["testing permAlone zzzzzzz: ",permAlone("zzzzzzz"),0]
];
var permAloneTester = new Tester("permAlone",permAloneTests);
permAloneTester.tester();

var friendlyTests = [
	["testing friendly 1: ",friendly(["2016-07-01", "2016-07-04"]).toString(),["July 1st","4th"].toString()],
    ["testing friendly 2: ",friendly(["2016-12-01", "2017-02-03"]).toString(),["December 1st","February 3rd"].toString()],
    ["testing friendly 3: ",friendly(["2016-12-01", "2018-02-03"]).toString(),["December 1st, 2016","February 3rd, 2018"].toString()],
    ["testing friendly 4: ",friendly(["2017-03-01", "2017-05-05"]).toString(),["March 1st, 2017","May 5th"].toString()],
    ["testing friendly 5: ",friendly(["2018-01-13", "2018-01-13"]).toString(),["January 13th, 2018"].toString()],
    ["testing friendly 6: ",friendly(["2022-09-05", "2023-09-04"]).toString(),["September 5th, 2022","September 4th"].toString()],
    ["testing friendly 7: ",friendly(["2022-09-05", "2023-09-05"]).toString(),["September 5th, 2022","September 5th, 2023"].toString()]
];
var friendlyTester = new Tester("friendly",friendlyTests);
friendlyTester.tester();

var bob = new Person('Bob Ross');
console.log(bob);
var personTests = [
	["testing person key length: ",Object.keys(bob).length,6],
    ["testing person instanceof: ",(bob instanceof Person),true],
    ["testing person firstName: ",bob.firstName,undefined],
    ["testing person lastName: ",bob.lastName,undefined]
];
var personTester = new Tester("person",personTests);
personTester.tester();

orbitalPeriodTests = [];
// first object test
var orbitalPeriod1 = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
var shouldBe1 = [{name: "sputnik", orbitalPeriod: 86400}];
orbitalPeriod1.forEach(function(orbObj,i){
    shouldBeObj = {name: shouldBe1[i].name, orbitalPeriod: shouldBe1[i].orbitalPeriod};
    orbitalPeriodTests.push(
        ["testing orbitalPeriod 1: ",
        JSON.stringify(orbObj),
        JSON.stringify(shouldBeObj)]);
});

// second object test
var orbitalPeriod2 = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
var shouldBe2 = [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}];
orbitalPeriod2.forEach(function(orbObj,i){
    shouldBeObj = {name: shouldBe2[i].name, orbitalPeriod: shouldBe2[i].orbitalPeriod};
    orbitalPeriodTests.push(
        ["testing orbitalPeriod 2: ",
        JSON.stringify(orbObj),
        JSON.stringify(shouldBeObj)]);
});

var orbitalPeriodTester = new Tester("orbitalPeriod",orbitalPeriodTests);
orbitalPeriodTester.tester();

var pairWiseTests = [
	["testing pairWise 1: ",pairWise([1, 4, 2, 3, 0, 5], 7),11],
    ["testing pairWise 2: ",pairWise([1, 3, 2, 4], 4),1],
    ["testing pairWise 3: ",pairWise([1, 1, 1], 2),1],
    ["testing pairWise 4: ",pairWise([0, 0, 0, 0, 1, 1], 1),10],
    ["testing pairWise 5: ",pairWise([], 100),0]
];
var pairWiseTester = new Tester("pairWise",pairWiseTests);
pairWiseTester.tester();