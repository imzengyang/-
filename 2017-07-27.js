/**
 * 文件操作
 * 
 * Node.js 使用fs模块来实现所有文件以及目录的如下操作
 * 读取
 * 创建
 * 写入
 * 删除
 */

//  // readFileSync  同步
 var fs = require('fs');
//  var data = fs.readFileSync('./readme.md');
//  console.log(data.toString());


 // readFile 异步
// fs.readFile('./readme.md',(Error,data)=>{
//     if(Error){
//         console.log(Error);
//     }else{
//         console.log(data.toString());
//     }
   
// })

// // writeFileSync

// fs.writeFileSync('./01.txt',"hello world",'utf8');

// fs.writeFile('01.txt','hellowold12',function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("create a file ")
//     }
// })

// // mkdirSync
// fs.mkdirSync('./testuser2')

// if(!fs.existsSync('./testuser')){
//     fs.mkdir('./testuser',(err)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log("mkdir")
//         }
//     })
// }


//exists
// fs.exists('testuser',(isexist)=>{
//     console.log("file",isexist)
// })
//existsSync
// fs.existsSync('testuser2')

// if(fs.existsSync('./testuser2')){
//     fs.rmdir('./testuser2',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("removedir")
//     }
// })
// }
// fs.rmdirSync('testuser')



// fs.unlink('01.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("delete the file")
//     }
// })

fs.unlinkSync('01.txt')