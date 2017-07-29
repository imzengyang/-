/**
 * Javascript 条件语句
 * 
 * if ... else 
 * if ... else if .... else 
 * 
 * JavaScript switch 语句
 * 
 * switch (n):
 *  case 1:
 *  ....
 *  break;
 * case 2:
 *  ....
 *  break;
 * default:
 *  ....
 *  break;
 * 
 * JavaScript for 循环
 * 
 * for(... ){....}
 * 
 * JavaScript while , do{} while()
 * while( 条件){.....}
 * do{ } while()
 * 
 * JavaScript break 和 continue
 *  break 跳出循环 
 *  continue 继续执行
 * 
 * 
 */



 // if .... else
 // 0 = false
 // 1 = true
// if(0){
//     console.log('0 is true ')
// }else{
//     console.log('0 is false')
// }

// var d = new Date();
// var time = d.getHours();
// if (time<10)
// {
// 	console.log("早上好");
// }
// else if (time>=10 && time<16)
// {
// 	console.log("今天好");
// }
// else
// {
// 	console.log("晚上好!");
// }

// // switch
// var a=1;
// switch (a) {
//     case 0:
//         console.log("a=0")
//         break;

//     default:
//         console.log("a=?")
//         break;
// }

// var x;
// var d=new Date().getDay();
// switch (d){
//     case 0:x="今天是星期日";
//     break;
//     case 1:x="今天是星期一";
//     break;
//     case 2:x="今天是星期二";
//     break;
//     case 3:x="今天是星期三";
//     break;
//     case 4:x="今天是星期四";
//     break;
//     case 5:x="今天是星期五";
//     break;
//     case 6:x="今天是星期六";
//     break;
// }
// console.log("x",x);
// //while 
// var i=0
// while (i<5)
// {
//     console.log("The number is " + i );
//     i++;
   
// }

// // do ... while
// var x = 0

// // do{
// //     xxxxx
// // }while()
// do{
//     console.log("The number is " + x );
//     x++;
// }while(x<5)

// var i=0;
// for (i=0;i<10;i++){
//     if (i==3){
//             break;
//         }
    
//     console.log("该数字为 " + i)
// }

var x="",i=0;
for (i=0;i<10;i++){
    if (i==3){
            continue;
        }
    
    console.log("该数字为 " + i)
}