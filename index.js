//find the length of an array
var arr=["apple","banana","orange","mango",1,2,3];
console.log(arr.length);

//add an element at the end of an array
var arr1=arr.push("mani","nagamani")
console.log(arr);

//remove last element from array
var arr=["apple","banana","orange","mango",1,2,3];
var arr2=arr.pop()
console.log(arr);

//add an element at the begining of the array
var arr3=arr.unshift("nagani","money")
console.log(arr);
var arr3=arr.unshift({name:"mani",lastname:"chirithoti"})
console.log(arr);

// remove first element from an array
var ar=[1,2,3,4,"xyz","hello"]
var a1=ar.shift();
console.log(a1);

//reverse the order of elements in an array
var arr=["apple","banana","orange","mango",1,2,3];
var a2=arr.reverse();
console.log(a2);

// code to find specific index of an element in array;
var a3=ar.indexOf("hellooo");
console.log(a3);
var a4=ar.indexOf(4);
console.log(a4);

// code to check whether an element present in array or not
var a5=ar.includes("javascript")
console.log(a5);
var a6=ar.includes("integrity");
console.log(a6);

// code to sort the elements in ascending order
var a7=ar.sort()
console.log(a7);

// code to convert an array into string by separting them with commas
var a8=ar.join(",");
console.log(a8);

// code snippet that adds an element to the end of an array, then removes the first element.
var array=["cricket","kabbadi","tennis","druv jurel","anup kumar",23,45,1,55,88]
var array1=array.push("bhuvi")
var array2=array.shift();
console.log(array);

// code to reverse an array and then join the elements into a string
var array3=array.reverse();
console.log(array);

var array4=array.join(" ");
console.log(array4);

//  code that first sorts an array in ascending order, then removes the last element
var b=["cricket","kabbadi","tennis","druv jurel","anup kumar",23,45,1,55,88];
var b1=b.sort()
console.log(b1);
var b2=b1.pop()
console.log(b);

// code to add two elements at the beginning of an array, then remove the first element and find the length of the array
var c=["cricket","kabbadi","tennis","druv jurel","anup kumar",23,45,1,55,88];
var c1=c.unshift("srh","kohli","sony")
console.log(c);
var c3=c.shift();
console.log(c);
console.log(c.length);

// code to combine two arrays, sort the combined array, and then remove the last element
var d=["cricket","kabbadi","tennis","druv jurel","anup kumar",23,45,1,55,88,{name:"kavya",surname:"shivannagari"}];
var e=["unemployed","jobless","bankrupt"];
var f=d.concat(e);
console.log(f);
var g=f.pop();
console.log(f);