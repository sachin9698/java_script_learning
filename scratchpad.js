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

// var str="hello sachin";
// console.log(str);
// console.log(str.length);
// console.log(typeof str);


//**********************functions

// function sayhello(){
//   console.log("hello sachin");
// }

// sayhello();

// function sayhello(name){
//   console.log("hello "+name);
// }

// sayhello("sachin");


//**************************function return

// function sayhello(name){
//     return "hello "+name;
// }

// var return_value=sayhello("sachin");
// console.log(return_value);

//********************function expression

// var a=function sayhello(){
//   console.log("hello sachin");
// }
// a();
// console.log(typeof a);


//***********************anonymous function expression

// var a=function (){                           //without naming the function
//   console.log("hello sachin");
// }
// a();

//*************************function as arguement

// var f= function(){
//   console.log("hello sachin");
// }

// var executor=function(fn){
//   fn();
// }

// executor(f);

//*****************************function on object

// var myobj={
//   "myprop":"sachin"
// }

// myobj.mymethod=function(){
//   console.log("function on object");
// }

// myobj.mymethod();

//***************************** this keyword

// var myobj={
//   "firstname":"sachin",
//   "lastname":"kumar",
//   "getfullname":function(){
//   return this.firstname+" "+this.lastname
// }
// }

// var myobj2=myobj;
// var myobj={};
// var fullname=myobj2.getfullname();


// console.log(fullname);

//****************************exercise

// var myobj={
//   "firstname":"sachin",
//   "lastname":"kumar",
//   "getfullname":function(){
//   return this.firstname+" "+this.lastname
//                           },
//   "addres":{
//   "city":"modinagar",
//   "state":"gzb",
//          },
//   "isstate":function(name){
//     if(name===this.addres.state){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
// }

// var res=myobj.isstate("gzb");
// console.log(res);


//*********************** default fuction arguments

// var add=function()
// {
//   var i,sum=0;
//   for(i=0; i<arguments.length; i++){
    
//     sum=sum+arguments[i];
//   }
//   return sum;
// }

// var s=add(1,2,3,4,5);
// console.log(s);


//********************************array methods

// myarr=[1,2,3,4,5];
// // myarr.push(6);  //add element at last
// // myarr.pop();    //remove element from last
// // myarr.shift();  //remove element from first
// // myarr.unshift(25);   //add element at first
// console.log(myarr);

//**************************forEach method for array

// myarr=[1,2,3,4,5,6];
// var func=function(item,index){
//   console.log("item is "+item+" an index is "+index);
// }

// myarr.forEach(func);

//***************************************
var dat=new date();
console.log(dat);



















/*
Exception: TypeError: date is not a constructor
@Scratchpad/1:264:10
*/
/*
Exception: ReferenceError: date is not defined
@Scratchpad/1:264:5
*/