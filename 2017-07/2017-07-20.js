/**
 * JavaScript Promise
 * var promise = new Promise(function(resolve, reject) {
 * // 异步操作的代码
 *  if ( 异步操作成功 ){
 *      resolve(value);
 *  } else {
 *      reject(error);
 *  }
 * });
 * 
 * 
 * promise.then(function(fromresolve){
 *  console.log(fromresolve)
 * }).catch(function(fromreject){
 *  console.log(fromreject)
 * })
 * 
 * 参考 http://javascript.ruanyifeng.com/advanced/promise.html
 */


// let promiseToCleanRoom = new Promise(function(resolve,reject){
//     let isClean = true;   //异步操作的代码
//     if(isClean){
//         resolve("yes is clean");
//     }else{
//         reject("not clean");
//     }
// })

// promiseToCleanRoom.then(function(fromresolve){
//     console.log("ok:"+fromresolve)
// }).catch(function(fromreject){
//     console.log("no:"+fromreject)
// })




 function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(new Error('图片加载失败：' + request.statusText));
      }
    };
    request.onerror = function() {
      reject(new Error('发生网络错误'));
    };
    request.send();
  });
}

imgLoad('http://dn-cnode.qbox.me/FlwW5i2h_UuKpnBXXvD3AqyrwjHP').then((status)=>{
    console.log(status);
})

