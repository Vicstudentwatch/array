let arr0 = ["john","james","Janet","Alex","Mary","Janet"];
let arr1 = ["Sarah","Purity"];

//create copy
let arr0Copy = [...arr0];
console.log("copy of arr0 => "+ arr0Copy)



//To String
console.log(arr0.toString());

//To String but separator is specified
console.log(arr0.join(" => "));

//Join 2 arrays together
console.log(arr0.concat(arr1));

// //Splice array
// --Can remove array and even replace arrays Value
//affect the aray
arr0Copy.splice(1,3,"Richard","Njoki","kariuki")
console.log(arr0Copy);

//Slice array From the specified index to the last specified index
//Does not affect the array
arr0Copy.slice(2,4)
console.log(arr0Copy.slice(2,4));

//last index of and last index
console.log(arr0.indexOf("Janet"));
console.log(arr0.lastIndexOf("Janet"));

