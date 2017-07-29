/**
 * JavaScript 数据类型, 拥有动态类型
 * 
 * 字符串(String) 数字（Number） 布尔（Boolean） 数组（Array） 对象(Object) 空（null） 未定义（Undefined）
 * JavaScript 字符串
 * 
 * JavaScript 数字
 * 
 * JavaScript 布尔
 * 
 * JavaScript 数组
 * 
 * JavaScript 对象
 * 
 * Undefined 和 Null
 * 
 *
 * 
 */

var x;
console.log(x);
var x = 6;
console.log(typeof(x));
var x = "hello";
console.log(typeof(x));

var y = 'hell';  //string
var x = '1'; //string

var num = 1.01 ; // number
var bool = true; 
var b = false; //boolean
// array 1
var arr = new Array()//  

arr[0] = "hello";
arr[1] = 1;
arr[2] = false;

console.log("arr:",arr)

// array 2

var temp = ['hello',0,1,false]
console.log("temp",temp)

//get data from array
//1 . for (var i ,i ++)

for(var i=0;i<temp.length;i++){
    console.log(temp[i]);

}

// 2 for ..in 
for(var i in temp){
    console.log(i)

}

// for .. of

for(var val of temp){
    console.log(val)
}


// object
var user = {
    'age':12,
    'sex': 'man',
    'address':'xxxx.xxxxx'
}
console.log("user age ",user.age);


 //空（null） 未定义（Undefined）

 var abc;
 console.log("abc",abc);

    abc= null;
 console.log(abc);

// new 变量类型

var carname = new String;
var number = new Number;
var boolead = new Boolean;
var arrr = new Array;
var person = new Object;