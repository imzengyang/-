/** JavaScript 类型转换 
 * 
 * 数字转换为字符串
 * 
 * 布尔类型转换为字符串
 * 
 * 日期转换为字符串
 * 
 *  String()  toString();
 * 字符串转换为数字
 * 
 * 布尔类型转换为数字
 * 
 * 日期转换为数字
 * 
 * Number();
 * 
 * 
*/

// string  toString() String(xxx)
//数字转换为字符串

// // //1. toString()
// var num = 1;
// console.log(typeof(num));

// console.log(typeof(num.toString()));
// // //2 + ""
// console.log(typeof(num+""))

// // // String()
// console.log(typeof(String(num)))


// // // toString()
// var bool =false;
// console.log(typeof(bool.toString()));
// // // String()
// console.log(typeof(String(bool)))

// var date = new Date()
// console.log(typeof(date))
// console.log(date)

// // console.log(date.getDate());

// // // toString();
// console.log(typeof(date.toString()));
// // //String()

// console.log(typeof(String(date)))

// // NaN 

// var str1 = "1";
// console.log(typeof(str1)); //
// console.log(typeof(+str1))
// console.log(typeof(Number(str1))); //
// var str2 ="helloweodddsdfasadsa"
// console.log(+str2)  

// // // Number()
// console.log(typeof(Number(str2)));
// console.log(Number(str2));

// //
var bool= false
// console.log(Boolean(-1))
console.log(Number(bool));
console.log(typeof(Number(bool)))

// //Number()

var d = new Date();
console.log(typeof(d))
console.log(Number(d))
console.log(typeof(Number(d)))

