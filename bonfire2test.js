var sumAllTester = new Tester("sumAll");

sumAllTester.tester = function(){
	console.log(this.showTest());
	console.log("testing sumAll of range 1,4: " + this.test(sumAll([1, 4]), 10));
	console.log("testing sumAll of range 4,1: " + this.test(sumAll([4, 1]), 10));
}

var diffTester = new Tester("diff");

diffTester.tester = function(){
	console.log(this.showTest());
	console.log("testing diff 1: " + this.test(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]).toString(), "4"));
	console.log("testing diff 2: " + this.test(diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).toString(), "pink wool"));
	console.log("testing diff 3: " + this.test(diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]).toString(), "pink wool,diorite"));
	console.log("testing diff 4: " + this.test(diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]).toString(), ""));
	console.log("testing diff 5: " + this.test(diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]).toString(), "piglet,4"));
	console.log("testing diff 6: " + this.test(diff([], ["snuffleupagus", "cookie monster", "elmo"]).toString(), "snuffleupagus,cookie monster,elmo"));
	console.log("testing diff 7: " + this.test(diff([1, "calf", 3, "piglet"], [7, "filly"]).toString(), "1,calf,3,piglet,7,filly"));
}

var convertRomanTester = new Tester("roman convert");

convertRomanTester.tester = function(){
	console.log(this.showTest());
	console.log("testing convert 5: " + this.test(convert(5), "V"));
	console.log("testing convert 9: " + this.test(convert(9), "IX"));
	console.log("testing convert 12: " + this.test(convert(12), "XII"));
	console.log("testing convert 16: " + this.test(convert(16), "XVI"));
	console.log("testing convert 29: " + this.test(convert(29), "XXIX"));
	console.log("testing convert 44: " + this.test(convert(44), "XLIV"));
	console.log("testing convert 36: " + this.test(convert(36), "XXXVI"));
	console.log("testing convert 501: " + this.test(convert(501), "DI"));
	console.log("testing convert 3999: " + this.test(convert(3999), "MMMCMXCIX"));
}

var wherePropTester = new Tester("whereProp");

wherePropTester.tester = function(){
	console.log(this.showTest());
	var where1 = whereProp([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
	var where2 = whereProp([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
	var where3 = whereProp([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
	console.log("testing whereProp 1: " + this.test(where1.toString(),[{ first: "Tybalt", last: "Capulet" }].toString()));
	console.log("testing whereProp 2: " + this.test(where2.toString(),[{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].toString()));
	console.log("testing whereProp 3: " + this.test(where3.toString(),[{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].toString()));
	console.log(where1);
	console.log(where2);
	console.log(where3);
}

var myReplaceTester = new Tester("myReplace");

myReplaceTester.tester = function(){
	console.log(this.showTest());
	console.log("myReplace test 1: " + this.test(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"), "A quick brown fox leaped over the lazy dog"));
	console.log("myReplace test 2: " + this.test(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch"));
	console.log("myReplace test 3: " + this.test(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error"));
	console.log("myReplace test 4: " + this.test(myReplace("His name is Tom", "Tom", "john"), "His name is John"));
	console.log("myReplace test 5: " + this.test(myReplace("Let us get back to more Coding", "Coding", "bonfires"), "Let us get back to more Bonfires"));
}

var translateTester = new Tester("translate");

translateTester.tester = function(){
	console.log(this.showTest());
	console.log("translate test consonant: " + this.test(translate("consonant"), "onsonantcay"));
	console.log("translate test california: " + this.test(translate("california"), "aliforniacay"));
	console.log("translate test paragraphs: " + this.test(translate("paragraphs"), "aragraphspay"));
	console.log("translate test glove: " + this.test(translate("glove"), "oveglay"));
	console.log("translate test algorithm: " + this.test(translate("algorithm"), "algorithmway"));
	console.log("translate test eight: " + this.test(translate("eight"), "eightway"));
}

var pairTester = new Tester("pair");

pairTester.tester = function(){
	console.log(this.showTest());
	console.log("pair test 1: " + this.test(pair("GCG").toString(),[["G", "C"], ["C","G"],["G", "C"]].toString()));
	console.log("pair test 2: " + this.test(pair("ATCGA").toString(),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].toString()));
	console.log("pair test 3: " + this.test(pair("TTGAG").toString(),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].toString()));
	console.log("pair test 4: " + this.test(pair("CTCTA").toString(),[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].toString()));
}

var fearNotLetterTester = new Tester("fearNotLetter");

fearNotLetterTester.tester = function(){
	console.log(this.showTest());
	console.log("testing fearNotLetter abce: " + this.test(fearNotLetter("abce"), "d"));
	console.log("testing fearNotLetter abcdefghjklmno: " + this.test(fearNotLetter("abcdefghjklmno"), "i"));
	console.log("testing fearNotLetter bcd: " + this.test(fearNotLetter("bcd"), undefined));
	console.log("testing fearNotLetter yz: " + this.test(fearNotLetter("yz"), undefined));
}

var uniteTester = new Tester("unite");

uniteTester.tester = function(){
	console.log(this.showTest());
	console.log("testing unite 1: " + this.test(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]).toString(), [1, 3, 2, 5, 4].toString()));
	console.log("testing unite 2: " + this.test(unite([1, 3, 2], [1, [5]], [2, [4]]).toString(), [1, 3, 2, [5], [4]].toString()));
	console.log("testing unite 3: " + this.test(unite([1, 2, 3], [5, 2, 1]).toString(), [1, 2, 3, 5].toString()));
	console.log("testing unite 4: " + this.test(unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]).toString(), [1, 2, 3, 5, 4, 6, 7, 8].toString()));
}

var convertEscapeTester = new Tester("convertEscape");

convertEscapeTester.tester = function(){
	console.log(this.showTest());
	console.log("testing convertEscape 1: " + this.test(convertEscape("Dolce & Gabbana"),"Dolce &amp; Gabbana"));
	console.log("testing convertEscape 2: " + this.test(convertEscape('Stuff in "quotation marks"'),"Stuff in &quot;quotation marks&quot;"));
}

var spinalCaseTester = new Tester("spinalCase");

spinalCaseTester.tester = function(){
	console.log(this.showTest());
	console.log("testing spinalCase 1: " + this.test(spinalCase('This Is Spinal Tap'),"this-is-spinal-tap"));
	console.log("testing spinalCase 2: " + this.test(spinalCase("thisIsSpinalTap"),"this-is-spinal-tap"));
	console.log("testing spinalCase 3: " + this.test(spinalCase("The_Andy_Griffith_Show"),"the-andy-griffith-show"));
	console.log("testing spinalCase 4: " + this.test(spinalCase("Teletubbies say Eh-oh"),"teletubbies-say-eh-oh"));
}

var sumFibsTester = new Tester("sumFibs");

sumFibsTester.tester = function(){
	console.log(this.showTest());
	console.log("testing sumFibs(1): " + this.test(sumFibs(1),1));
	console.log("testing sumFibs(4): " + this.test(sumFibs(4),5));
	console.log("testing sumFibs(1000): " + this.test(sumFibs(1000),1785));
	console.log("testing sumFibs(4000000): " + this.test(sumFibs(4000000),4613732));
}

var sumPrimesTester = new Tester("sumPrimes");

sumPrimesTester.tester = function(){
	console.log(this.showTest());
	console.log("testing sumPrimes(10): " + this.test(sumPrimes(10),17));
}

var smallestCommonsTester = new Tester("smallestCommons");

smallestCommonsTester.tester = function(){
	console.log(this.showTest());
	console.log("testing smallestCommons([1,5])" + this.test(smallestCommons([1, 5]),60));
	console.log("testing smallestCommons([5,1])" + this.test(smallestCommons([5, 1]),60));
	console.log("testing smallestCommons([1,13])" + this.test(smallestCommons([1, 13]),360360));
}

var dropTester = new Tester("drop");

dropTester.tester = function(){
	console.log(this.showTest());
	console.log("testing drop 1: " + this.test(drop([1, 2, 3], function(n) {return n > 0;}).toString(),[1,2,3].toString()));
	console.log("testing drop 2: " + this.test(drop([1, 2, 3, 4], function (n) { return n >= 3; }).toString(),[3,4].toString()));
	console.log("testing drop 3: " + this.test(drop([1, 2, 3, 4], function (n) { return n > 5; }).toString(),[].toString()));
	console.log("testing drop 4: " + this.test(drop([1, 2, 3, 9, 2], function (n) { return n > 2; }).toString(),[3, 9, 2].toString()));
}

var steamrollerTester = new Tester("steamroller");

steamrollerTester.tester = function(){
	console.log(this.showTest());
	console.log("steamroller test 1: " + this.test(steamroller([[["a"]], [["b"]]]).toString(),["a", "b"].toString()));
	console.log("steamroller test 2: " + this.test(steamroller([1, [2], [3, [[4]]]]).toString(),[1, 2, 3, 4].toString()));
	console.log("steamroller test 3: " + this.test(steamroller([1, [], [3, [[4]]]]).toString(),[1, 3, 4].toString()));
	console.log("steamroller test 4: " + this.test(steamroller([1, {}, [3, [[4]]]]).toString(),[1, {}, 3, 4].toString()));
}

var binaryAgentTester = new Tester("binaryAgent");

binaryAgentTester.tester = function(){
	console.log(this.showTest());
	console.log("testing binaryAgent 1: " + this.test(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"),"Aren't bonfires fun!?"));
	console.log("testing binaryAgent 2: " + this.test(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"),"I love FreeCodeCamp!"));
}

var binaryAgentFastTester = new Tester("binaryAgentFast");

binaryAgentFastTester.tester = function(){
	console.log(this.showTest());
	console.log("testing binaryAgentFast 1: " + this.test(binaryAgentFast("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"),"Aren't bonfires fun!?"));
	console.log("testing binaryAgentFast 2: " + this.test(binaryAgentFast("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"),"I love FreeCodeCamp!"));
}

var everyTester = new Tester("every");

everyTester.tester = function(){
	console.log(this.showTest());
	console.log("testing every 1: " + this.test(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"),true));	
	console.log("testing every 2: " + this.test(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"),false));
	console.log("testing every 3: " + this.test(every([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"),false));
	console.log("testing every 4: " + this.test(every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat"),false));
	console.log("testing every 5: " + this.test(every([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat"),true));
	console.log("testing every 6: " + this.test(every([{"single": "yes"}], "single"),true));
	console.log("testing every 7: " + this.test(every([{"single": ""}, {"single": "double"}], "single"),false));
	console.log("testing every 8: " + this.test(every([{"single": "double"}, {"single": undefined}], "single"),false));
	console.log("testing every 9: " + this.test(every([{"single": "double"}, {"single": NaN}], "single"),false)); 
}

var addTester = new Tester("add");

addTester.tester = function(){
	console.log(this.showTest());
	console.log("testing add(2,3): " + this.test(add(2,3),5));
	console.log("testing add(2)(3): " + this.test(add(2)(3),5));
	console.log("testing add(http://bit.ly/IqT6zt): " + this.test(add("http://bit.ly/IqT6zt"),undefined));
	console.log("testing add(2,\"3\"): " + this.test(add(2,"3"),undefined));
	console.log("testing add(2)([3]): " + this.test(add(2)([3]),undefined));
}

sumAllTester.tester();
diffTester.tester();
convertRomanTester.tester();
wherePropTester.tester();
myReplaceTester.tester();
translateTester.tester();
pairTester.tester();
fearNotLetterTester.tester();
uniteTester.tester();
convertEscapeTester.tester();
spinalCaseTester.tester();
sumFibsTester.tester();
sumPrimesTester.tester();
smallestCommonsTester.tester();
dropTester.tester();
steamrollerTester.tester();
binaryAgentTester.tester();
binaryAgentFastTester.tester();
everyTester.tester();
addTester.tester();