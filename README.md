# bonfire-solutions
My Solutions From Free Code Camp Bonfires

## tester.js
This is a simple console tester I made for testing my bonfire solutions.
I wanted to make a simple way to write tests while I was working on solutions.
Most of the javascript test frameworks seemed like overkill when I just wanted something that I could look at quickly.
I like to use the console for debugging while I'm working and having the tests run at the same time helped me.

### using tester.js
To use the test, add the script to the html document along with your solution and tests files:
```html
<!doctype html>
	<html lang="en">
   	<head>
   		<meta charset="utf-8">
   		<title>My HTML File</title>
   		<script src="tester.js"></script>
   		<script src="freecodecampbonfire2.js"></script>
   		<script src="bonfire2test.js"></script>
 	</head>
   	<body>
   	 Nothing here, it's all in the console <br>
   	</body>
</html>
```
Next, create a test file. This is bonfire2tests.js for my example.
Each test consists of an array of tests. Each tests is in `[testName,testValue,testShouldBe]` format.
-testName: a name for the test
-testValue: the value that will be tested
-testShouldBe: what the resulting value for testValue should be

Next, create a Tester object by creating a var and passing the name of the function being tested and the tests.
Finally, call the tester function on the Tester object created above to run the tests. 
An example of the test created for the first summAll test:
```javascript
var summAllTests = [
	["testing sumAll of range 1,4: ",sumAll([1,4]),10],
	["testing sumAll of range 4,1: ",sumAll([4,1]),10]
];
var sumAllTester = new Tester("sumAll",summAllTests);
sumAllTester.tester();`
```

#Limitations
This was created for me to have a simple way to test small functions with simple return values in the javascript console.
That being said it doesn't work very well when returning objects from a function.
In my tests I've written the actual objects to the console when the function returns an object.
An example of this is in my test for whereProp in [bonfire2](https://github.com/jarhoads/bonfire-solutions/blob/master/bonfire2test.js)