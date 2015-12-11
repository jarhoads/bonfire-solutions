function tester(val, shouldBe) {
  if (val === shouldBe) { return "pass " + "value: " + val; }
  else { return "fail " + "should be: " + shouldBe + " but got: " + val; }
}


function palindrome(str) {
  
  var lower = str
              .replace(/\s+/g,'')
              .replace(/,/g,'')
              .replace(/[._]/g,'')
              .replace(/\W+/g,'')
              .toLowerCase();
  var lwrRvs = lower
                .split('')
                .reverse()
                .join('')
                .replace(/,/g,'')
                .replace(/[._]/g,'')
                .replace(/\W+/g,'');
  
  //console.log("lower: " + lower + " lwrRvs: " + lwrRvs);
  
  return (lower === lwrRvs);
}

console.log("---testing palindrome");
console.log("testing eye as palindrome: " + tester(palindrome("eye"),true));
console.log("testing race car as palindrome: " + tester(palindrome("race car"),true));
console.log("testing not a palindrome as palindrome: " + tester(palindrome("not a palindrome"),false));
console.log("testing A man, a plan, a canal. Panama as palindrome: " + tester(palindrome("A man, a plan, a canal. Panama"),true));
console.log("testing never odd or even as palindrome: " + tester(palindrome("never odd or even"),true));
console.log("testing nope as a palindrome: " + tester(palindrome("nope"),false));
console.log("testing almostomla as a palindrome: " + tester(palindrome("almostomla"),false));
console.log("testing My age is 0, 0 si ega ym. as a palindrome: " + tester(palindrome("My age is 0, 0 si ega ym."),true));
console.log("testing 1 eye for of 1 eye. as a palindrome: " + tester(palindrome("1 eye for of 1 eye."),false));
console.log("testing 0_0 (: /-\ :) 0-0 as a palindrome: " + tester(palindrome("0_0 (: /-\ :) 0-0"),true));
console.log(" ");

function findLongestWord(str) {
  var words = str.split(' ');
  
  var lengths = words.map(function(val){
    return val.length;
  });
  
  var longest = lengths.sort(function(a,b){ return a - b; });
  //console.log(longest);
  return longest[longest.length - 1];
}

console.log("--- testing findLongestWord")
console.log("testing longest length in The quick brown fox jumped over the lazy dog : " + 
              tester(findLongestWord("The quick brown fox jumped over the lazy dog"),6));
console.log("testing May the force be with you : " + 
              tester(findLongestWord("May the force be with you"),5));
console.log("testing Google do a barrel roll : " + 
              tester(findLongestWord("Google do a barrel roll"),6));
console.log("testing What if we try a super-long word such as otorhinolaryngology : " + 
              tester(findLongestWord("What if we try a super-long word such as otorhinolaryngology"),19));
console.log("testing What is the average airspeed velocity of an unladen swallow : " + 
              tester(findLongestWord("What is the average airspeed velocity of an unladen swallow"),8));

function titleCase(str) {
  var words =  str.split(' ');
  var titled = words.map(function(word){
    var letters = word.split('');
    //console.log(letters);
    var firstLetter = letters.shift();
    var capLetter = firstLetter.toUpperCase();
    //console.log(firstLetter + " cap :" + capLetter);
    for(var i = 0; i < letters.length; i++){ 
      var nextLetter = letters.shift();
      var lowerLetter = nextLetter.toLowerCase();
      letters.push(lowerLetter);
    }
    letters.unshift(capLetter);
    
    return letters.join('');

  });
  
  return titled.join(' ');
}

console.log(' ');
console.log("--- testing findLongestWord");
console.log("testing I'm a little tea pot : " + tester(titleCase("I'm a little tea pot"),"I'm A Little Tea Pot"));
console.log("testing sHoRt AnD sToUt : " + tester(titleCase("sHoRt AnD sToUt"),"Short And Stout"));
console.log("testing HERE IS MY HANDLE HERE IS MY SPOUT : " + tester(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"),"Here Is My Handle Here Is My Spout"));

function largestOfFour(arr) {
  // You can do this!
  var largestNums = arr.map(function(inArray){
    var sortedNums = inArray.sort(function(a,b){ return a - b; });
    return sortedNums[inArray.length - 1];
  });
  
  return largestNums;
}

console.log(" ");
console.log("--- testing largestOfFour");
//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
//console.log("testing largestOfFour1: " + tester(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]),[27, 5, 39, 1001]));

function end(str, target) {
  var targetSize = target.length;
  var endOfStr = str.substr(-targetSize);
  return endOfStr === target;
}
console.log(" ");
console.log("--- testing end");
console.log("testing Bastian ends with n : " + tester(end("Bastian", "n"),true));
console.log("testing Connor ends with n : " + tester(end("Connor", "n"),false));
console.log("testing Connor ends test #3 : " + tester(end("Walking on water and developing software from a specification are easy if both are frozen.", "specification"),false));

function repeat(str, num) {
  // repeat after me
  var rpt = "";
  if(num >= 0){ 
    for(var i = 0; i < num; i++){ rpt += str; } 
  }
  
  return rpt;
}
console.log(" ");
console.log("--- testing repeat")
console.log("testing repeat abc 3 : " + tester(repeat("abc", 3),"abcabcabc"));
console.log("testing repeat * 3 : " + tester(repeat("*", 3),"***"));
console.log("testing repeat * 3 : " + tester(repeat("abc", -2),"")); 

function truncate(str, num) {
  // Clear out that junk in your trunk
  if(str.length <= num){ return str; }
  
  var dots = "...";
  var dotsLength = dots.length;
  if(str.length < 4){ dotsLength = 0; }
  
  
  var trunc = str.slice(0,(num - dotsLength));
  return trunc + dots;
}
console.log(" ");
console.log("--- testing truncate");
console.log(" truncate test # 1 : " + tester(truncate("A-tisket a-tasket A green and yellow basket", 11),"A-tisket..."));
console.log(" truncate test # 2 : " + tester(truncate("Peter Piper picked a peck of pickled peppers", 14),"Peter Piper..."));
console.log(" truncate test # 3 : " + tester(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length),"A-tisket a-tasket A green and yellow basket"));
console.log(" truncate test # 4 : " + tester(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2),"A-tisket a-tasket A green and yellow basket"));
console.log(" truncate test # 5 : " + tester(truncate("A-", 1),"A..."));

function chunk(arr, size) {
  // Break it up.
  var chunky = [];
 
  for(var i = 0; i < arr.length; i += size){
    var newArr = [];
    for(var j = 0; j < size; j++){ if((j+i) < arr.length){ newArr.push(arr[j+i]); } }
    console.log(newArr.toString());
    chunky.push(newArr);
  }
  console.log(chunky.toString());
  return chunky;
}
console.log(' ');
console.log(chunk(["a", "b", "c", "d"], 2));

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));

function mutation(arr) {
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase();
  
  if(str1 === str2){ return true; }
  //if(str1.length < str2.length){ return false; }
  
  for(var i = 0; i < str2.length; i++){ 
    if(str1.indexOf(str2[i]) < 0){ return false; }
  }
  return true;
}

console.log(' ');
console.log("--- testing mutation");
console.log("test mutation hello hey : " + tester(mutation(["hello", "hey"]),false));
console.log("test mutation zyxwvutsrqponmlkjihgfedcba qrstu : " + tester(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]),true));
console.log("test mutation Mary Aarmy : " + tester(mutation(["Mary", "Aarmy"]),true));


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(val){
      return (val !== false) && 
            (val !== null) &&
            (val !== 0) &&
            (val !== "") &&
            (val !== undefined) &&
            ((typeof val !== "number") || !isNaN(val)) ;
  });
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"])); 
console.log(bouncer([false, null, 0, NaN, undefined, ""]));

function destroyer(arr) {
  // Remove all the values
  var numArgs = arguments.length;
  //console.log("arguments length: " + arguments.length);
  var destroy = [];
  for(var i = 1; i < numArgs; i++){ destroy.push(arguments[i]); }
  //console.log("destroy: " + destroy);
  var removed = arr.filter(function(val){ return (destroy.indexOf(val) < 0); });
  return removed;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a - b;
  });
  
  var prev = arr[0];
  for(var i = 0; i < arr.length; i++){ 
    if(num > prev && num <= arr[i]){ return i; }
    prev = arr[i];
  }
  
  if(arr[arr.length - 1] > num){ return 0; }
  else{ return arr.length; }
  
}

console.log("where test 1: " + tester(where([40, 60], 50),1));
console.log("where test 2: " + tester(where([10, 20, 30, 40, 50], 30),2));
console.log("where test 3: " + tester(where([10, 20, 30, 40, 50], 35),3));
console.log("where test 4: " + tester(where([5, 3, 20, 3], 5),2));
console.log("where test 5: " + tester(where([2, 5, 10], 15),3));
