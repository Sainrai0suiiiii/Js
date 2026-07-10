// collection of elements of any data types is called array in js

let productColors = ['blue', 'green'];

productColors[0] = 334;

console.log(productColors[0]);
console.log(typeof productColors);

// creating array using literal involves square bracket[] to define and initialize the array

let a  =[];
console.log(a);

let b = [10,20,30,40];
console.log(b);

// creating array using new keyword ( constructor )
let a1 = new Array(10,200,30);
console.log(a1);

// basic operations on javascript arrays
// accessing elements of an array using index number
let c = ['sain','rai','kulung','sandhaya','lawati','limbu'];
console.log(c[0]);
console.log(c[3]);
console.log(c[1]);

//accessing first and last element
let fst = c[2];
console.log("second Name:", fst);
let lst = c[5];
console.log("Last Name:", lst);

//modifying the array element by assigning new value to their corresponding index
let d = ['football','cricket','basketball','volleyball'];
console.log(d);

d[1]= 'futsal';
console.log(d);

//adding elements to the array using methods like push()=add element at the end of an array
//  and unshift()= add element at the starting of an array.

let e = ['spiderman','batman','superman','captain america','hulk'];
console.log(e);
e.push('shaktiMan');
e.unshift('Iron Man');
console.log(e);

// removing elements from array using method pop()= removes the last element,shift()= removes the first element,
// slice()= remove the element from the array.

let f = ['hari','krishna','bhim','ram', ' Bramha', 'vishnu'];
console.log(f);

let last = f.pop();
console.log("After removing the last:",f);

let first = f.shift();
console.log("after removing first:",f);

let random = f.slice(2,3);
console.log("after removing index 2 and 3:", f);

// array length 
let g = [1,2,3,4,5,6,6];
console.log(g);
let len = g.length;
console.log("length of the array:"+ len);
g.length = 10;
console.log("after increasing array length:",g);
g.length = 6;
console.log("after decresement:",g)

//iterating Through array elements using for loop and forEach loop
//forloop
let h = ['sain','kulung','rai','lal',0,0,2,3,4];
for (let i = 0 ;i<h.length; i++){
    console.log(h[i])
};
//forEach loop array.forEach()
let i = ['masu','daru','sutta','water','bong'];
i.forEach(function myfunc(x){
    console.log(x)
});

//array concatenation (combining two or more array using concat()method which return 
//new array by combining two arrays)

let j = ['ramos','ronaldo','pepe','ozil','kross'];
let k = ['kaka','pele','messi','inista','xavi'];
let legends = j.concat(k);
console.log(j);
console.log(k);
console.log("After concatenation:", legends);

// conversion of an array to string using built in method toString().

let l =['hari','ram','shaym','krishna',1,2,3];
console.log(l)
console.log(typeof l);
console.log(l.toString());
console.log(typeof l);
console.log('using Array.isArray() method:', Array.isArray(l));
console.log('using instanceof method:', j instanceof Array);

//
// it says it contains elements
const m = [5];
console.log(m);

// its empty box
const n = new Array(5);
console.log(n);


