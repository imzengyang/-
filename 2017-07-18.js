/**
 * JavaScript callback
 * 
 */

// var x = function(){
//      console.log("hello world, i am x");
// }

// var y = function(callback){
//     console.log('do sth');
//     callback();
// }

// y(x);



// var clac = function(num1,num2, calcType){
//     if(calcType === "add"){
//         return num1 + num2
//     }else if(calcType === "mulitupy"){
//         return num1*num2
//     }
// }
// console.log(clac(1,2,"mulitupy"));

let add = function(a,b){
    return a + b;
}
let mulitupy = function(a,b){
    return a*b;
}

let clac =function(num1,num2,callback){
    return callback(num1,num2)
}

// console.log(clac(1,2,add))


var arr=[
    {num:4,name:"apple"},
    {num:1,name:"cabbage"},
    {num:9,name:"banana"}
]

arr.sort(function(val1,val2){
    if(val1.name < val2.name){
        return -1
    }else{
        return 1
    }
});

console.log(arr)