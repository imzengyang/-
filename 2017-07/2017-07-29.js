/**
 * 创建一个手机模拟器
 */

require('chromedriver');
var webdriver = require('selenium-webdriver');

var By = webdriver.By;
const Key = webdriver.Key;
var until = webdriver.until;
var chrome= require('selenium-webdriver/chrome');
var option = new chrome.Options().setMobileEmulation({deviceName:"iPhone 6"});
var driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(option).build();
driver.get('http://192.168.219.129:3000/');
driver.sleep(10000);
