// Invoke each function you write with an example and console.log the result

// multiply
function multiply(num1, num2){
	return num1 * num2;
}
console.log("multiply 3 & 5: ", multiply(3,5));

// whatForLunch
function whatForLunch(name, food){
	return name + " had " + food + " for lunch today";
}
console.log("whatForLunch: ", whatForLunch('Liam', 'cake'));

// isLargerThan100
function isLargerThan100(num){
	if (num > 100){
		return num + " is larger than 100";
	}
	else{
		return num + " is not larger than 100";
	}
};
console.log("isLargerThan100: ", isLargerThan100(115));

// anyEvens
function anyEvens(myArray){
	var answer = false;
	for (var i=0; i<myArray.length; i++){
		if (myArray[i] % 2 === 0){
			return true;
		}
		else {
			return answer;
		}
	}
};
var randomNumTrue = [2,3,11,13];
var randomNumFalse = [3,7,11,13];
console.log("anyEvens of [2,3,11,13]: ", anyEvens(randomNumTrue));
console.log("anyEvens of[3,7,11,13]: ",anyEvens(randomNumFalse));

// printDataType


// isDivisibleBy
function isDivisibleBy(num1, num2){
	if (num1 % num2 === 0){
		return true;
	}
	else {
		return false;
	}
	}
console.log("isDivisibleBy 10 & 5: ",isDivisibleBy(10,5));
console.log("isDivisibleBy 10 & 3: ",isDivisibleBy(10,3));

// fizzBuzz
function FizzBuzz(numArray){
	console.log("isDivisibleBy 10 & 3: ",isDivisibleBy(10,3));
	for (var i = 0; i < numArray.length; i++){
		if (isDivisibleBy(numArray[i], 3) && isDivisibleBy(numArray[i], 5)){
			return "FizzBuzz";
		}
		else if(isDivisibleBy(numArray[i], 3)){return "Fizz";
		}
		else if(isDivisibleBy(numArray[i], 5)){
			return "Buzz";
		}
	}
}
var arrayOne = [15,3,8];
var arrayTwo = [25,5];
console.log("array 15, 3, 8 FizzBuzz: ", FizzBuzz(arrayOne));
console.log("array 25, 5 Buzz: ", FizzBuzz(arrayTwo));