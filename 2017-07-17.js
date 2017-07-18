/**
 * Javascript 闭包
 */

// var num = 0;
// var add = function(){
//     num +=1 ;
//     console.log(num);
// }
// add();
// add();
// console.log("num",num)
// add();
// console.log("num",num)


var add = function(){
     var count = 0;
     return function(){
        return count += 1;
     }
 }

var addtwo = add();

//  addtwo ===>   function(){
    //     return count += 1;
    //  }
console.log(addtwo());
console.log(addtwo());
console.log(addtwo());

console.log('count',count);