/**
 * Node.js  Child Processes
 * 
 * 主要参考 http://www.cnblogs.com/s1ihome/archive/2009/01/15/batTutorial.html
 *         https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html
 * http://www.infoq.com/cn/news/2011/09/nodejs-async-code
 * 
 */


// const spawn = require('child_process').spawn;
// const bat = spawn('cmd.exe', ['/c', 'my.bat']);

// bat.stdout.on('data', (data) => {
//   console.log(data.toString());
// });

// bat.stderr.on('data', (data) => {
//   console.log(data.toString());
// });

// bat.on('exit', (code) => {
//   console.log(`Child exited with code ${code}`);
// });


// const exec = require('child_process').exec;
// exec('ipconfig', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.log(`stderr: ${stderr}`);
// });

// const execFile = require('child_process').execFile;
// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });

const child_process = require('child_process')
// const result = child_process.spawnSync('cmd.exe',['/c','my.bat'])
// console.log(result.output.toString())


// let dirresult = child_process.execSync('dir')
// console.log(dirresult.toString())


child_process.exec('dir', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
