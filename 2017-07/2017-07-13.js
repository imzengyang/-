
/**
 * Javascript 函数
 * 函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。
 * 
 * 代码块
 * 
 * 函数声明
 * 
 * 调用带参数的函数
 * JavaScript 函数有个内置的对象 arguments 对象。argument 对象包含了函数调用的参数数组。
 * 
 * 带有返回值的函数
 * 
 * 函数表达式
 * 
 * 自调用函数
 * 
 * toString()
 * 
 */

 // 代码块 可以直接执行
// {
//     console.log("我是代码块")
// }

// //函数声明

// function functionname1(){
//     console.log('我是基本函数');
// }
// // //当调用该函数时，会执行函数内的代码。
// functionname1();

// //调用带参数的函数
// function myFunction2(name,job){
//     console.log("Welcome " + name + ", the " + job);
// }
// myFunction2("xiaoming",'学生')
// myFunction2('xianhong','老师')

// //Arguments 对象
// // JavaScript 函数有个内置的对象 arguments 对象。
// // argument 对象包含了函数调用的参数数组。
// var x = sumAll(1, 123, 500, 115, 44, 88);
// function sumAll() {
//     var i, sum = 0;
//     for (i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log("x",x)


// //带有返回值的函数
// function sum(x,y){
//     return x + y;
// }
// var result = sum(1,2);
// console.log("result:",result)

// //函数表达式
// var x = function (a, b) {return a * b}; // ==> function x(a,b){return a * b}
// var z = x(4, 3);
// console.log(z)

// // 自调用函数
// (function(){
//     console.log('123456');
// })();


// (function(){
//     console.log("woshi zidiaoyong hanshu ") 
// })();
// //toString()方法将函数作为一个字符串返回:
function myFunction4(a, b) {
    return a * b;
}
var txt = myFunction4.toString();
console.log('text',txt)

