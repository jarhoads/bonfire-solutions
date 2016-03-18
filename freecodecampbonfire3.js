function telephoneCheck(str) {

    if (str.length < 10) { return false; }

    function validAreaCode(areaCode) {
        return (!isNaN(areaCode.charAt(0)) &&
            !isNaN(areaCode.charAt(1)) &&
            !isNaN(areaCode.charAt(2)));
    }

    function validLocalNumber(localNumber) {

        if (localNumber.length > 8 || localNumber.length < 7) { return false; }

        // all characters should be numbers

        // two options:
        // either the length is 8 and character 3 is -
        if (localNumber.length === 8) {
            if (localNumber.charAt(3) !== '-') { return false; }
            return (!isNaN(localNumber.charAt(0)) &&
                !isNaN(localNumber.charAt(1)) &&
                !isNaN(localNumber.charAt(2)) &&
                !isNaN(localNumber.charAt(4)) &&
                !isNaN(localNumber.charAt(5)) &&
                !isNaN(localNumber.charAt(6)) &&
                !isNaN(localNumber.charAt(7)));
        }
        // or the length is 7
        if (localNumber.length === 7) {
            return (!isNaN(localNumber.charAt(0)) &&
                !isNaN(localNumber.charAt(1)) &&
                !isNaN(localNumber.charAt(2)) &&
                !isNaN(localNumber.charAt(3)) &&
                !isNaN(localNumber.charAt(4)) &&
                !isNaN(localNumber.charAt(5)) &&
                !isNaN(localNumber.charAt(6)));
        }

        return false;

    }

    // use a simple regex to remove spaces
    str = str.replace(/\s+/g, '');

    // check length for easy returns
    if (str.length > 14) { return false; }

    if (str.charAt(0) === '1') {
        str = str.substring(1, str.length);
    }

    if (str.charAt(0) === '(') {
        if (str.charAt(4) !== ')') { return false; }
        str = str.substring(1, 4) + str.substring(5, str.length);
    }

    // validate area code and local number
    var area = str.substring(0, 4);
    var local = str.substring(3, str.length);

    if (local.charAt(0) === '-') {
        if (local.charAt(4) !== '-') { return false; }
        local = local.substring(1, local.length);
    }

    return validAreaCode(area) && validLocalNumber(local);
}

function sym(args) {

    function diff(a1, a2) {
        var args1 = a1;
        var args2 = a2;

        function inArr(a) {
            return (function(e) { return (a.indexOf(e) < 0); });
        }
        var one = args1.filter(inArr(args2));
        var two = args2.filter(inArr(args1));

        var diff = one.concat(two).sort();
        return diff;
    }

    var argsArray = Array.prototype.slice.call(arguments);
    if (argsArray.length === 2) { return diff(argsArray[0], argsArray[1]); }

    var argsUnique = [];
    argsArray.forEach(function(a) {
        var set = [];
        a.forEach(function(e) {
            if (set.indexOf(e) < 0) { set.push(e); }
        });
        argsUnique.push(set);
    });

    return argsUnique.reduce(diff);

}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]
function drawer(price, cash, cid) {

    var denoms = {
        "ONE HUNDRED": 100.00,
        "TWENTY": 60.00,
        "TEN": 10.00,
        "FIVE": 5.00,
        "ONE": 1.00,
        "QUARTER": 0.25,
        "DIME": 0.10,
        "NICKEL": 0.05,
        "PENNY": 0.01
    };

    function cidToObject(cidArr) {
        cidObj = {};
        cidArr.forEach(function(e) { cidObj[e[0]] = e[1]; });

        return cidObj;
    }

    function decimalSubtract(a, b) {
        var diff = (a - b).toFixed(2);
        return diff;
    }

    function decimalAdd(a, b) {
        var sum = (a + b);
        return sum;
    }

    var changeDue = decimalSubtract(cash, price);

    var cidSum = 0;
    cid.forEach(function(amt) { cidSum = decimalAdd(cidSum, amt[1]); });

    if (cidSum < changeDue) { return "Insufficient Funds"; }

    if (decimalSubtract(cidSum, changeDue) < 0.01) { return "Closed"; }

    var cids = cidToObject(cid);
    var values = Object.keys(denoms);
    var funds = true;
    var change = [];
    values.forEach(function(v) {
        var denomValue = denoms[v];
        var denomCount = 0;
        var cidAmount = cids[v];
        var cidEmpty = (cidAmount <= 0);

        if (cidSum < changeDue) { funds = false; }

        if (funds) {
            while (changeDue >= denomValue && !cidEmpty) {
                changeDue = (changeDue - denomValue).toFixed(2);
                denomCount++;

                cidAmount = (cidAmount - denomValue).toFixed(2);
                cidEmpty = (cidAmount <= 0);
            }
            var pushVal = (denomCount * denomValue);
            if (denomCount > 0) { change.push([v, parseFloat((denomCount * denomValue).toFixed(2))]); }
        }

        cidSum -= cidAmount;

    });

    return funds ? change : "Insufficient Funds";

}

function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    if (arguments.length < 2) { return []; }

    var items = arr1.concat(arr2);

    items.sort(function(a, b) {
        return a[1].localeCompare(b[1]);
    });

    if (arr1.length === 0) { return items; }
    if (arr2.length === 0) { return items; }

    var newInventory = [];
    var prevItemWhole = items.shift();
    var prevItem = prevItemWhole[1];
    var itemSum = prevItemWhole[0];
    items.forEach(function(item) {

        if (item[1] === prevItem) {
            itemSum += item[0];
        }
        else {

            // push itemSum onto array
            newInventory.push([itemSum, prevItem]);

            // set prevItem to item and itemSum to item amount
            prevItem = item[1];
            itemSum = item[0];

        }
    });

    newInventory.push([itemSum, prevItem]);

    return newInventory;
}

function permAlone(str) {
    // uses of Heap's algorithm (https://en.wikipedia.org/wiki/Heap%27s_algorithm)
    // I thought of Heap's becuase it's used to find anagrams
    // i'm finding the anagrams and filtering out the strings w/ repeat characters
    // there is probably a better and easier way to do this
    // but i can't think of one
    function swap(chars, i, j) {
        var tmp = chars[i];
        chars[i] = chars[j];
        chars[j] = tmp;
    }

    function getPerms(input) {
        var counter = [],
            permutations = [],
            chars = input.split(''),
            length = chars.length,
            i;

        for (i = 0; i < length; i++) {
            counter[i] = 0;
        }

        permutations.push(input);
        i = 0;
        while (i < length) {
            if (counter[i] < i) {
                swap(chars, i % 2 === 1 ? counter[i] : 0, i);
                counter[i]++;
                i = 0;
                permutations.push(chars.join(''));
            } else {
                counter[i] = 0;
                i++;
            }
        }

        return permutations;
    }

    var perms = getPerms(str);

    function repeatedLetter(cs) {

        lastC = cs[0];
        for (var i = 1; i < cs.length; i++) {
            if (cs[i] === lastC) { return true; }
            lastC = cs[i];
        }

        return false;
    }

    function dups(str) {
        return !repeatedLetter(str.split(''));
    }

    return perms.filter(dups).length;
}

function friendly(arr) {
    function month(m) {
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if (m < 1 || m > 12) { return months[0]; }
        return months[m - 1];
    }

    function addSuffix(d) {
        suffix = ["st", "nd", "rd", "th"];
        var dayPart = 0;
        var day = parseInt(d);
        if (day > 10) {

            if (d.substring(0, 1) === "1") { dayPart = 4; }
            else { dayPart = parseInt(d.substring(1)); }

        }
        else {
            dayPart = day;
        }

        if (dayPart > 3 || dayPart === 0) { dayPart = 4; }

        return (day.toString()) + suffix[dayPart - 1];
    }

    // dates in ccyy-mm-dd format
    var begin = arr[0].split('-');
    var end = arr[1].split('-');

    //console.log("begin: " + begin.toString() + " end: " + end.toString());

    var yearBegin = begin[0];
    var yearEnd = end[0];

    var monthBegin = begin[1];
    var monthEnd = end[1];

    var dayBegin = begin[2];
    var dayEnd = end[2];

    var range = [];

    if (parseInt(yearBegin) === parseInt(yearEnd)) {
        if (parseInt(monthBegin) === parseInt(monthEnd)) {
            if (parseInt(dayBegin) === parseInt(dayEnd)) {
                range = [month(parseInt(monthBegin)) + " " + addSuffix(dayBegin) + ", " + yearBegin];
            }
            else {
                range = [month(parseInt(monthBegin)) + " " + addSuffix(dayBegin), addSuffix(dayEnd)];
            }
        } else {
            range = [month(parseInt(monthBegin)) + " " + addSuffix(dayBegin) + ", " + yearBegin,
                month(parseInt(monthEnd)) + " " + addSuffix(dayEnd)];
        }
    } else {
        var yearFromBegin = parseInt(yearBegin) + 1;
        var yearFromMonthBegin = 12 - parseInt(monthBegin);
        var yearFromMonthEnd = yearFromMonthBegin + parseInt(monthEnd);
        //console.log("yearFromBegin: " + yearFromBegin + " yearFromMonthBegin: " + yearFromMonthBegin + " yearFromMonthEnd: " + yearFromMonthEnd);
        if (yearFromBegin === parseInt(yearEnd)) {
            if (yearFromMonthEnd < 12 ||
                (yearFromMonthEnd === 12 && parseInt(dayBegin) < parseInt(dayEnd))) {
                range = [month(parseInt(monthBegin)) + " " + addSuffix(dayBegin),
                    month(parseInt(monthEnd)) + " " + addSuffix(dayEnd)];
            } else {
                if (parseInt(dayBegin) <= parseInt(dayEnd)) {
                    range = [month(parseInt(monthBegin)) + " " + addSuffix(dayBegin) + ", " + yearBegin,
                        month(parseInt(monthEnd)) + " " + addSuffix(dayEnd) + ", " + yearEnd];
                } else {
                    range = [month(parseInt(monthBegin)) + " " + addSuffix(dayBegin) + ", " + yearBegin,
                        month(parseInt(monthEnd)) + " " + addSuffix(dayEnd)];
                }

            }


        } else {
            range = [month(parseInt(monthBegin)) + " " + addSuffix(dayBegin) + ", " + yearBegin,
                month(parseInt(monthEnd)) + " " + addSuffix(dayEnd) + ", " + yearEnd];
        }


    }

    return range;
}

var Person = function(firstAndLast) {
    var fullName = firstAndLast.split(' ');
    var firstName = fullName[0];
    var lastName = fullName[1];
    
    this.getFirstName = function() { return firstName; };
    this.getLastName = function() { return lastName; };
    this.getFullName = function() { return firstName + " " + lastName; };
    this.setFirstName = function(name) { firstName = name; };
    this.setLastName = function(name) { lastName = name; };
    this.setFullName = function(names) {
        var fullName = names.split(' ');
        firstName = fullName[0];
        lastName = fullName[1];
    };

};

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  function getOrbitPeriod(alt){
      a = alt + earthRadius;
      aCubed = a * a * a;
      return  (2 * Math.PI * Math.sqrt((aCubed / GM))).toFixed(0);
  }
  
  function orbitObject(altObject){
      return {name: altObject.name, orbitalPeriod: parseInt(getOrbitPeriod(altObject.avgAlt))};
  }
  
  return arr.map(orbitObject);
}

function pairWise(arr, arg) {

    if(arr.length === 0){ return 0; }

    function sum(a, b){ return a + b; }
    
    var sumArr = [];
    var used = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            var valueSum = arr[j] + arr[i];
            if(valueSum === arg && (i != j)){
                if((used.indexOf(j) < 0) && (used.indexOf(i) < 0)){
                    sumArr.push(j);
                    sumArr.push(i);
                    used.push(j);
                    used.push(i);
                } 
            }
        }
    }
    return sumArr.reduce(sum);
}