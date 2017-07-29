/**
 * selenium-webdrvier Key
 * 
 */
require('chromedriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
var By = webdriver.By;
const Key = webdriver.Key;
var until = webdriver.until;

driver.get("http://192.168.219.129:3000/signin");
driver.findElement(By.id("name")).sendKeys('imzack');
driver.findElement(By.id("pass")).sendKeys('123456');
driver.findElement(By.id("pass")).submit();
driver.findElement(By.id('create_topic_btn')).click();

driver.actions().mouseMove(driver.findElement(By.css('.CodeMirror-scroll'))).click().perform();


driver.actions().keyDown(Key.CONTROL).sendKeys('k').keyUp(Key.CONTROL).perform();
driver.actions().keyDown(Key.CONTROL).sendKeys('a').keyUp(Key.CONTROL).perform();