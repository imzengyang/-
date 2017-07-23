require('chromedriver');
var childprocess = require('child_process');
var webdriver = require("selenium-webdriver")
var By = webdriver.By;
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('http://www.baidu.com/')
driver.sleep(3000);
driver.findElement(By.css('.soutu-btn')).click();
// driver.findElement(By.css('.upload-pic')).sendKeys("D:\\tranning\\-\\includefile\\gherkin.png");
driver.findElement(By.css('.upload-pic')).click().then(()=>{
    childprocess.execFileSync('./includefile/uploadfile.exe');
})