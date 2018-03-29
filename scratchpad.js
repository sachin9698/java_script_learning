// var a=10;
// var b=20;
// var c=a+b;
// var d="hello";
// var e=true;
// console.log(c);
// console.log(d);
// console.log(e);

// *************************understanding null and indefined
// var a;
// a=null;
// console.log(a);

// using typeof
// var a=10;
// console.log(typeof a);
// var b=null;
// console.log(typeof b);

//**********************using Type Coersion and the === operator

// var a=10;
// var b="10";
// if(a===b){
//   console.log("they are equal !");
// }
// else
//   {
//      console.log("they are not equal !");
//   }

//eg-2

// var a=0;
// if(a){
//   console.log("a is true!");
// }
// else
//   {
//      console.log("a is false!");
//   }


// ********************************objects

// var myobj={};
// myobj.prop="hello";
// myobj.prop2=123;
// console.log(myobj);
// console.log("the prop of object is "+myobj.prop2)


//***************************** object literals 
//               // another way of initialising objects
// var myobj={
//   "name":"sachin",
//   "roll_no":586,
//   "bool":true
// }

// var avtar="name";
// console.log(myobj[avtar]);


//******************************nested objects

// var myobj={
//   "name":"sachin",
//   "roll_no":586,
//   "bool":true,
//   "objprop":{
//     "innerprop":"inner property"
//   }
// }

// console.log(myobj.objprop.innerprop)
// console.log(myobj.objprop["innerprop"])
// console.log(myobj["name"])

//******************revisiting === opertaor for objects

// var myobj={
//   "myprop":"hello"
// };

// var myobj2;
// myobj2=myobj;
// console.log(myobj2.myprop);
// if(myobj2===myobj){
//   console.log("both objects are equal");
// }


//*********************delete operator with object property

// var myobj={
//   "first_name":"sachin",
//   "middle_name":null,
//   "last_name":"kumar",
//   "age":21
// };
// delete myobj.age; 
// console.log(myobj);

//****************************array

// var array=[1,2,3,4,5,6,7,8,9,0];
// array[3]=15;
// array[201]=201;
// console.log(array);
// console.log(array.length);  //length

//********************wraper objects

var str="hello sachin";
console.log(str);
console.log(str.length);
console.log(typeof str);
































/*
Exception: SyntaxError: missing : after property id
@Scratchpad/1:98
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:104
*/
/*
Exception: ReferenceError: myobj is not defined
@Scratchpad/1:104:1
*/
/*
Exception: ReferenceError: coonsole is not defined
@Scratchpad/1:117:1
*/