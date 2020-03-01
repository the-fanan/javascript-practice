/**
 * Primitives
 */
var x; //declares variable
var y;
x = 1; //number
x = 2.5; // number too
x = "This is a string from double quotes";
x = 'This is also a string from single quotes';
x = true; //positive boolean
x = false; //negative boolean
x = null; // there is no value
x = undefined; //value does not exist (I wonder why JS allows us to assign this to a vairable)
/**
 * Objects
 */
x = {
	title: 'this is an object',
	func: function () {
		return "Objects can have even functions"
	},
	other: {
		title: "they can take other objects too"
	},
	arr: [
		"and arrays too"
	]
};
//access objects
console.log(x.title);
console.log(x.func());
console.log(x["other"].title);
console.log(x.arr[0]);
/**
 * Arays
 */
x = [
	1,
	2,
	{
		title: "arrays can have objects too"
	}
];
console.log(x[2].title);
console.log(x.length);//length of array

/**
 * Ranges
 * 
 * Numbers: 
 * 		total: from ±5 × 10^−324 to ±1.7976931348623157 × 10^308
 * 		precice: from −9007199254740992 (−2^53 ) to 9007199254740992 (2^53 ) 
 */

 /**
	* Math Object
  */
console.log('round .54: ' + Math.round(.54))
console.log('round .45: ' + Math.round(.45))
console.log('ceil .4: ' + Math.ceil(.4))
console.log('floor .5: ' + Math.floor(.5))
console.log('abs -2: ' + Math.abs(-2))
console.log(Math.max(1,5,8))//also .min()
console.log('random: ' + Math.random())//returns number between 0 and 1

 /**
	* Underflows, overflow. 0 and -0. Infinity and -Infinity
	* 0 is returned when underflow is from an extremely small positive number that JS cannot handle
	* -0 is returned when underflow is from an extremely small negative number that JS cannot handle
	* Infinity is returned when overflow is from an extremely large positive number JS cannot handle
	* -Infinity is returned when overflow is from an extremely large negative number JS cannot handle
  */
console.log("Division by 0")
console.log(0/0)
console.log(1/0)
console.log(1/-0)
console.log(Infinity/Infinity)
console.log(Math.sqrt(-1))
console.log(Math.sqrt("a string"))
// NaN means Not a Number
// NaN cannot be compared with any other value including itself
//to determine if a number is NaN
x = NaN
if (x != x) {
	console.log("x is NaN")
}
//or
if (isNaN(x)) {
	console.log("x is NaN")
}
/**
 * Caution on numbers
 */
x = .5 - .4
y = .2 - .1
if (x == y) {
	console.log(true)
}
//nothing is printed because they are not equal. Precision problem of fractions. To avoid this, scale numbers
x = (.5 * 10) - (.4 * 10)
y = (.2 * 10) - (.1 * 10)
if (x == y) {
	console.log(true)
}

/**
 * Working with strings
 */
s = "My little string"
console.log('first character: ' + s.charAt(0))
console.log('second to 4th characters: ' + s.substring(1,4))
console.log('second to 4th characters using slice: ' + s.slice(1,4))
console.log('first index of l: ' + s.indexOf('l'))
console.log('last index of l: ' + s.lastIndexOf('l'))
console.log('first index of l on or after the 3rd character: ' + s.indexOf("l", 3))
console.log('characters can also be referenced like arrays: ' + s[0])//ECMAScript 5 and above