require('chromedriver');
var childprocess = require('child_process');
var webdriver = require("selenium-webdriver")
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();
var path = require('path');
driver.get('http://www.baidu.com/')
driver.sleep(3000);
driver.findElement(By.css('.soutu-btn')).click();
let filepath = path.join(__dirname,'includefile','gherkin.png');
console.log(filepath)
driver.findElement(By.css('.upload-pic')).sendKeys(filepath);

// driver.findElement(By.css('.upload-pic')).click().then(()=>{
//     childprocess.execFileSync('./includefile/uploadfile.exe');
// })