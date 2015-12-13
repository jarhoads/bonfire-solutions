var summAllTests = [
	["testing sumAll of range 1,4: ",sumAll([1,4]),10],
	["testing sumAll of range 4,1: ",sumAll([4,1]),10]
];
var sumAllTester = new Tester("sumAll",summAllTests);
sumAllTester.tester();

var diffTests = [
	["testing diff 1: ",diff([1, 2, 3, 5], [1, 2, 3, 4, 5]).toString(),"4"],
	["testing diff 2: ",diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).toString(), "pink wool"],
	["testing diff 3: ",diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).toString(),"pink wool,diorite"],
	["testing diff 4: ",diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).toString(),""],
	["testing diff 5: ",diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).toString(), "piglet,4"],
	["testing diff 6: ",diff([], ["snuffleupagus", "cookie monster", "elmo"]).toString(),"snuffleupagus,cookie monster,elmo"],
	["testing diff 7: ",diff([1, "calf", 3, "piglet"], [7, "filly"]).toString(),"1,calf,3,piglet,7,filly"]
];
var diffTester = new Tester("diff",diffTests);
diffTester.tester();

var romanTests = [
	["testing convert 5: ",convert(5),"V"],
	["testing convert 9: ",convert(9),"IX"],
	["testing convert 12: ",convert(12),"XII"],
	["testing convert 16: ",convert(16),"XVI"],
	["testing convert 29: ",convert(29), "XXIX"],
	["testing convert 44: ",convert(44),"XLIV"],
	["testing convert 36: ",convert(36),"XXXVI"],
	["testing convert 501: ",convert(501),"DI"],
	["testing convert 3999: ",convert(3999),"MMMCMXCIX"]	
];
var convertRomanTester = new Tester("roman convert",romanTests);
convertRomanTester.tester();

var where1 = whereProp([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
var where2 = whereProp([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
var where3 = whereProp([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
console.log(where1);
console.log(where2);
console.log(where3);
var wherePropTests = [
	["testing whereProp 1: ",where1.toString(),[{ first: "Tybalt", last: "Capulet" }].toString()],
	["testing whereProp 2: ",where2.toString(),[{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].toString()],
	["testing whereProp 3: ",where3.toString(),[{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].toString()]
];
var wherePropTester = new Tester("whereProp",wherePropTests);
wherePropTester.tester();

var myReplaceTests = [
	["myReplace test 1: ",myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"), "A quick brown fox leaped over the lazy dog"],
	["myReplace test 2: ",myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch"],
	["myReplace test 3: ",myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error"],
	["myReplace test 4: ",myReplace("His name is Tom", "Tom", "john"),"His name is John"],
	["myReplace test 5: ",myReplace("Let us get back to more Coding", "Coding", "bonfires"), "Let us get back to more Bonfires"]
];
var myReplaceTester = new Tester("myReplace",myReplaceTests);
myReplaceTester.tester();

var translateTests = [
	["translate test consonant: ",translate("consonant"), "onsonantcay"],
	["translate test california: ",translate("california"), "aliforniacay"],
	["translate test paragraphs: ",translate("paragraphs"), "aragraphspay"],
	["translate test glove: ",translate("glove"), "oveglay"],
	["translate test algorithm: ",translate("algorithm"), "algorithmway"],
	["translate test eight: ",translate("eight"), "eightway"]
];
var translateTester = new Tester("translate",translateTests);
translateTester.tester();

var pairTests = [
	["pair test 1: ",pair("GCG").toString(),[["G", "C"], ["C","G"],["G", "C"]].toString()],
	["pair test 2: ",pair("ATCGA").toString(),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].toString()],
	["pair test 3: ",pair("TTGAG").toString(),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].toString()],
	["pair test 4: ",pair("CTCTA").toString(),[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].toString()]
];
var pairTester = new Tester("pair",pairTests);
pairTester.tester();

var fearNotLetterTests = [
	["testing fearNotLetter abce: ",fearNotLetter("abce"), "d"],
	["testing fearNotLetter abcdefghjklmno: ",fearNotLetter("abcdefghjklmno"), "i"],
	["testing fearNotLetter bcd: ",fearNotLetter("bcd"), undefined],
	["testing fearNotLetter yz: ",fearNotLetter("yz"), undefined]
];
var fearNotLetterTester = new Tester("fearNotLetter",fearNotLetterTests);
fearNotLetterTester.tester();

var uniteTests = [
	["testing unite 1: ",unite([1, 3, 2], [5, 2, 1, 4], [2, 1]).toString(), [1, 3, 2, 5, 4].toString()],
	["testing unite 2: ",unite([1, 3, 2], [1, [5]], [2, [4]]).toString(), [1, 3, 2, [5], [4]].toString()],
	["testing unite 3: ",unite([1, 2, 3], [5, 2, 1]).toString(), [1, 2, 3, 5].toString()],
	["testing unite 4: ",unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]).toString(), [1, 2, 3, 5, 4, 6, 7, 8].toString()]
];
var uniteTester = new Tester("unite",uniteTests);
uniteTester.tester();

var convertEscapeTests = [
	["testing convertEscape 1: ",convertEscape("Dolce & Gabbana"),"Dolce &amp; Gabbana"],
	["testing convertEscape 2: ",convertEscape('Stuff in "quotation marks"'),"Stuff in &quot;quotation marks&quot;"]
];
var convertEscapeTester = new Tester("convertEscape",convertEscapeTests);
convertEscapeTester.tester();

var spinalCaseTests = [
	["testing spinalCase 1: ",spinalCase('This Is Spinal Tap'),"this-is-spinal-tap"],
	["testing spinalCase 2: ",spinalCase("thisIsSpinalTap"),"this-is-spinal-tap"],
	["testing spinalCase 3: ",spinalCase("The_Andy_Griffith_Show"),"the-andy-griffith-show"],
	["testing spinalCase 4: ",spinalCase("Teletubbies say Eh-oh"),"teletubbies-say-eh-oh"]
];
var spinalCaseTester = new Tester("spinalCase",spinalCaseTests);
spinalCaseTester.tester();

var sumFibsTests = [
	["testing sumFibs(1): ",sumFibs(1),1],
	["testing sumFibs(4): ",sumFibs(4),5],
	["testing sumFibs(1000): ",sumFibs(1000),1785],
	["testing sumFibs(4000000): ",sumFibs(4000000),4613732]
];
var sumFibsTester = new Tester("sumFibs",sumFibsTests);
sumFibsTester.tester();

var sumPrimesTests = [
	["testing sumPrimes(10): ",sumPrimes(10),17]
];
var sumPrimesTester = new Tester("sumPrimes",sumPrimesTests);
sumPrimesTester.tester();

var smallestCommonsTests = [
	["testing smallestCommons([1,5])",smallestCommons([1, 5]),60],
	["testing smallestCommons([5,1])",smallestCommons([5, 1]),60],
	["testing smallestCommons([1,13])",smallestCommons([1, 13]),360360]
];
var smallestCommonsTester = new Tester("smallestCommons",smallestCommonsTests);
smallestCommonsTester.tester();

var dropTests = [
	["testing drop 1: ",drop([1, 2, 3], function(n) {return n > 0;}).toString(),[1,2,3].toString()],
	["testing drop 2: ",drop([1, 2, 3, 4], function (n) { return n >= 3; }).toString(),[3,4].toString()],
	["testing drop 3: ",drop([1, 2, 3, 4], function (n) { return n > 5; }).toString(),[].toString()],
	["testing drop 4: ",drop([1, 2, 3, 9, 2], function (n) { return n > 2; }).toString(),[3, 9, 2].toString()]
];
var dropTester = new Tester("drop",dropTests);
dropTester.tester();

var steamrollerTests = [
	["steamroller test 1: ",steamroller([[["a"]], [["b"]]]).toString(),["a", "b"].toString()],
	["steamroller test 2: ",steamroller([1, [2], [3, [[4]]]]).toString(),[1, 2, 3, 4].toString()],
	["steamroller test 3: ",steamroller([1, [], [3, [[4]]]]).toString(),[1, 3, 4].toString()],
	["steamroller test 4: ",steamroller([1, {}, [3, [[4]]]]).toString(),[1, {}, 3, 4].toString()]
];
var steamrollerTester = new Tester("steamroller",steamrollerTests);
steamrollerTester.tester();

var binaryAgentTests = [
	["testing binaryAgent 1: ",binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"),"Aren't bonfires fun!?"],
	["testing binaryAgent 2: ",binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"),"I love FreeCodeCamp!"]
];
var binaryAgentTester = new Tester("binaryAgent",binaryAgentTests);
binaryAgentTester.tester();

var binaryAgentFastTests = [
	["testing binaryAgentFast 1: ",binaryAgentFast("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"),"Aren't bonfires fun!?"],
	["testing binaryAgentFast 2: ",binaryAgentFast("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"),"I love FreeCodeCamp!"]
];
var binaryAgentFastTester = new Tester("binaryAgentFast",binaryAgentFastTests);
binaryAgentFastTester.tester();

var everyTests = [
	["testing every 1: ",every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"),true],	
	["testing every 2: ",every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"),false],
	["testing every 3: ",every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"),false],
	["testing every 4: ",every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"),false],
	["testing every 5: ",every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"),true],
	["testing every 6: ",every([{"single": "yes"}], "single"),true],
	["testing every 7: ",every([{"single": ""}, {"single": "double"}], "single"),false],
	["testing every 8: ",every([{"single": "double"}, {"single": undefined}], "single"),false],
	["testing every 9: ",every([{"single": "double"}, {"single": NaN}], "single"),false] 
];
var everyTester = new Tester("every",everyTests);
everyTester.tester();

var addTests = [
	["testing add(2,3): ",add(2,3),5],
	["testing add(2)(3): ",add(2)(3),5],
	["testing add(http://bit.ly/IqT6zt): ",add("http://bit.ly/IqT6zt"),undefined],
	["testing add(2,\"3\"): ",add(2,"3"),undefined],
	["testing add(2)([3]): ",add(2)([3]),undefined]
];
var addTester = new Tester("add",addTests);
addTester.tester();