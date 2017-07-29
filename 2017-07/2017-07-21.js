
/**
 * Node.js Module export
 * 
 *
 * exports 导出 
 * test.js
 */

var name = "xiaoming";
var sayHello = function(user){
    console.log("hell0",user)
}

exports.user = name;
exports.say = sayHello;

// new file

var username = require('./test').user;
var say = require('./test').say;

console.log(username)

say(username)