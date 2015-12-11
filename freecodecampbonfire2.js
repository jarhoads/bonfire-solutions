function range(a, b, step) {

  if (arguments.length < 3) { step = 1; }

  var rangeVals = [];
  if (step > 0) {
    for (var i = a; i <= b; i += step) { rangeVals.push(i); }
    return rangeVals;
  }
  else {
    for (var j = a; j >= b; j += step) { rangeVals.push(j); }
    return rangeVals;
  }
}

function sumAll(arr) {

  var firstArr = arr[0];
  var secondArr = arr[1];
  var rangeArr = [];

  if (firstArr < secondArr) { rangeArr = range(firstArr, secondArr, 1); }
  else { rangeArr = range(firstArr, secondArr, -1); }

  var sum = 0;
  var l = rangeArr.length;

  for (var i = 0; i < l; i++) { sum += rangeArr[i]; }

  return sum;
}

// returns items found in only one of the arrays
function diff(arr1, arr2) {

  var inFirst = arr1.filter(function (element) {
    return arr2.indexOf(element) < 0;
  });
  var inSecond = arr2.filter(function (element) {
    return arr1.indexOf(element) < 0;
  });

  return inFirst.concat(inSecond);
}

function convert(num) {
  var romans = {
    0: "",
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM"
  };

  var romanValue = "";
  
  // turn this into a loop
  
  var thousandsVal = (num / 1000).toString().split('.');
  var numThousands = parseInt(thousandsVal[0]);
  if (numThousands > 0) {
    num = parseInt(thousandsVal[1]);
    romanValue += romans[numThousands * 1000];
  }

  var hundredsVal = (num / 100).toString().split('.');
  var numHundreds = parseInt(hundredsVal[0]);
  if (numHundreds > 0) {
    num = parseInt(hundredsVal[1]);
    romanValue += romans[numHundreds * 100];
  }

  var tensVal = (num / 10).toString().split('.');
  var numTens = parseInt(tensVal[0]);
  if (numTens > 0) {
    num = parseInt(tensVal[1]);
    romanValue += romans[numTens * 10];
  }
  
  // add the number of ones
  if (num > 0) { romanValue += romans[num]; }
  return romanValue;
}

// returns true if the object has a
// property with the same value as propVal
// this function is used by whereProp
function hasPropVal(obj, propVals) {
  var inObj = [];

  var pvKeys = Object.keys(propVals);

  if (pvKeys.length === 0) { return false; }

  pvKeys.forEach(function (element) {
    if (obj.hasOwnProperty(element)) {
      if (obj[element] === propVals[element]) { inObj.push(true); }
      else { inObj.push(false); }
    }
    else {
      inObj.push(false);
    }
  });

  return inObj.reduce(function (a, b) {
    return a && b;
  });
}

// i renamed the where function since it's a 
// javascript library function
// returns all matching property and value pairs 
// from the objects in collection that have
// the property and value in the source object
function whereProp(collection, source) {
  var arr = collection.filter(function (element) {
    return hasPropVal(element, source);
  });
  return arr;
}

function myReplace(str, before, after) {
  var afterVal = "";

  var beforeVals = before.split('');
  beforeVals.forEach(function (element, i) {
    if (i < after.length) {
      if (element === element.toUpperCase()) { afterVal += after[i].toUpperCase(); }
      else { afterVal += after[i].toLowerCase(); }
    }
  });

  afterVal += after.substring(before.length, after.length);

  return str.replace(before, afterVal);
}

// translate a string to pig-latin
function translate(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var letters = str.split('');

  if (vowels.indexOf(letters[0]) >= 0) { str += "way"; }
  else {
    var consonants = "";
    while (vowels.indexOf(letters[0]) < 0) { consonants += letters.shift(); }
    letters.push(consonants + "ay");
    str = letters.join('');
  }
  return str;
}

function pair(str) {
  var pairs = {
    A: "T",
    C: "G",
    G: "C",
    T: "A"
  };
  var dna = str.split('');
  var pairedDNA = [];
  dna.forEach(function (element) {
    pairedDNA.push([element, pairs[element]]);
  });
  return pairedDNA;
}

function fearNotLetter(str) {
  var letters = str.split('');
  var returnLetter = "";
  letters.forEach(function (letter, i) {
    // check to see if the next letter is correct
    if (i < letters.length - 1) {
      var nextLetter = String.fromCharCode(letter.codePointAt() + 1);
      if (letters[i + 1] !== nextLetter) { returnLetter = nextLetter; }
    }
  });
  if (returnLetter === "") { return undefined; }
  else { return returnLetter; }
}

function unite(arr1, arr2, arr3) {
  var numArrays = arguments.length;
  var arrays = [];
  if (numArrays < 2) { return arr1; }
  if (numArrays < 3) { arrays.push(arr1, arr2); }
  else { for (var i = 0; i < numArrays; i++) { arrays.push(arguments[i]); } }
  // flattten arrays. i don't think javascript has flatmap
  var flattened = arrays.reduce(function (a, b) { return a.concat(b); }, []);
  
  var exists = [];
  var union = [];
  flattened.forEach(function (element) {
    if (exists.indexOf(element) < 0) {
      // add element to union array
      union.push(element);
      // add element to exists array
      exists.push(element);
    }
  });
  return union;
}

function convertEscape(str) {
  // &colon;&rpar;
  var chars = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  };
  var letters = str.split('');
  var converted = letters.map(function (letter) {
    if (chars.hasOwnProperty(letter)) { return chars[letter]; }
    else { return letter; }
  });

  converted = converted.join('');
  converted = converted.replace(/"/g, "&quot;");
  converted = converted.replace(/'/g, "&apos;");

  return converted;
}

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var noSpaces = false;
  var underscoreRegex = /_/g;
  str = str.replace(underscoreRegex, " ");

  function upperToHyphenLower(match) {
    return '-' + match.toLowerCase();
    //return match.toLowerCase();
  }

  if (str.indexOf(" ") < 0) {
    str = str.replace(/[A-Z]/g, upperToHyphenLower);
    noSpaces = true;
  }

  if (str[0] === "-") { str = str.substring(1, str.length); }

  if (noSpaces) { return str; }
  else { return str.toLowerCase().split(' ').join('-'); }
}

function sumFibs(num) {
	
  // i don't really like this solution 
  // but it's what i came up with quickly
  // i would like to refactor it into something more elegant
	
  if (num === 1) { return 1; }
  if (num === 2 || num === 3) { return 2; }

  function fib(n) {
    var fib0 = 1;
    var fib1 = 1;
    var f_n = fib1;

    for (var i = 2; i < n; i++) {
      f_n = fib1 + fib0;
      fib0 = fib1;
      fib1 = f_n;
    }

    return f_n;
  }

  var sum = 0;
  var N = 1;
  var fibVal = fib(N);
  sum += fibVal;
  while (fibVal <= num) {

    N++;
    var nextFib = fib(N);

    if (nextFib <= num && (nextFib % 2) !== 0) { sum += nextFib; }

    fibVal = nextFib;

  }

  return sum;

}

function sumPrimes(num) {

  function isPrime(n) {
    if (n <= 1) { return false; }
    else if (n <= 3) { return true; }
    else if (n % 2 == 0 || n % 3 == 0) { return false; }

    for (var i = 5; i < n; i++) {
      if (n % i == 0) { return false; }
    }
    return true;
  }

  var sum = 0;
  var current = 2;
  var primes = 0;
  while (current <= num) {

    if (isPrime(current)) {
      sum += current;
      primes++;
    }
    current++;

  }

  return sum;

}

function smallestCommons(arr) {

  function range(a, b, step) {

    if (arguments.length < 3) { step = 1; }

    var rangeVals = [];
    if (step > 0) {
      for (var i = a; i <= b; i += step) { rangeVals.push(i); }
      return rangeVals;
    }
    else {
      for (var j = a; j >= b; j += step) { rangeVals.push(i); }
      return rangeVals;
    }
  }

  function dividesAll(ary, dividend) {
    function and(a, b) { return a && b; }
    function divides(element) { return (dividend % element) === 0; }
    return ary.map(divides).reduce(and);
  }

  var arrVals = [];
  if (arr[0] < arr[1]) { arrVals = range(arr[0], arr[1]); }
  else { arrVals = range(arr[1], arr[0]); }
  // console.log(arrVals.toString());

  var k = 2;
  while (!dividesAll(arrVals, k)) { k++; }

  return k;
}

// the filter one is arr.filter(func)[0];
// i don't feel like adding the whole function

function drop(arr, func) {
  // Drop them elements.
  var l = arr.length;
  for (var i = 0; i < l; i++) {
    if (func(arr[0])) { return arr; }
    else { arr.shift(); }
  }

  return arr;
}

// there is probably a faster way to do this without recursion
// i just haven't figured it out
function steamroller(arr) {
  function flatter(flat, flatten){
    if(Array.isArray(flatten)){ return flat.concat(steamroller(flatten)); }
    else{ return flat.concat(flatten); }
  }
  return arr.reduce(flatter, []);
}

function binaryAgent(str) {
  
  function byteToDecimal(byteString){
    var l = byteString.length - 1;
    var decimalValue = 0;

    for(var i = l; i >= 0; i--){
      decimalValue += (byteString[i] === "1" ? (Math.pow(2, l - i)) : 0);      
    }
    
    return decimalValue;
  }
  
  function concatString(a,b){ return a.concat(String.fromCharCode(b)); }
  
  var letters = str.split(' ').map(byteToDecimal).reduce(concatString,"");
  
  return letters;
}

function binaryAgentFast(str) {
  
  var byteVals = {};
  
  function byteToDecimal(byteString){
    var l = byteString.length - 1;
    var decimalValue = 0;
    
    if(byteVals.hasOwnProperty(byteString)){ decimalValue = byteVals[byteString]; }
    else{
      for(var i = l; i >= 0; i--){
        decimalValue += (byteString[i] === "1" ? (Math.pow(2, l - i)) : 0);      
      }
      byteVals[byteString] = decimalValue;
    }

    return decimalValue;
  }
  
  function concatString(a,b){ return a.concat(String.fromCharCode(b)); }
  
  var letters = str.split(' ').map(byteToDecimal).reduce(concatString,"");
  
  return letters;
}

function every(collection, pre) {
  // Is everyone being true?
  return collection.map(function(a){ return a[pre] ? true : false; })
                   .reduce(function(a,b){ return a && b; });
}

function add() {
  var l = arguments.length;
  var a = arguments[0];
  var b = arguments[1];
  
  if(l === 1 && typeof(a) !== "number"){ return undefined; }
  
  if(l == 2){ return (typeof(a) === "number" && typeof(b) === "number" ? a + b : undefined); }
  else{ return function(n){ return (typeof(n) === "number" ? a + n : undefined); }; }
  
}
