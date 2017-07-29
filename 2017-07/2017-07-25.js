/**
 * Node.js path 模块提供了一些用于处理文件路径的小工具
 */

var path = require('path')

console.log(path.basename('D:\\tranning\\-\\2017-05-25.js'))
console.log(path.dirname('D:\\tranning\\-\\2017-05-25.js'))

console.log(__dirname)

var dir = path.join(__dirname,'includefile','gherkin.png')
console.log("dir",dir)