/**
 * Primitives
 */
var x; //declares variable
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