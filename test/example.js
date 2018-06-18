const puppeteer = require('puppeteer');
const faker = require('faker');

const newPerson = faker.helpers.createCard();
const password = '12345678';

console.log(newPerson);
// newPerson.name
// newPerson.email

(async () => {
  const browser = await puppeteer.launch({headless:false, slowMo:20});
  const page = await browser.newPage();
  // const [response] = await Promise.all([
  //   page.waitForNavigation(waitOptions),
  //   page.click(#react-app > div > div.top-bar > div.top-bar-right > a:nth-child(2), clickOptions),
  // ]);
  await page.goto('http://localhost:3002');
  await page.click('#react-app > div > div.top-bar > div.top-bar-right > a:nth-child(2)')

  await page.screenshot({path: 'test/screenshots/initialDashboard.png'});


  await page.waitForSelector('input[name="name"]');
  await page.click('input[name="name"]');
  await page.keyboard.type(newPerson.name);

  await page.waitForSelector('input[name="email"]');
  await page.click('input[name="email"]');
  await page.keyboard.type(newPerson.email);

  await page.waitForSelector('input[name="password"]');
  await page.click('input[name="password"]');
  await page.keyboard.type(password);

  await page.click('#react-app > div > div.container > div > form > div.button-line > div > button > div > div > span');

  await page.screenshot({path: 'test/screenshots/login.png'});

  await page.waitForSelector('input[name="email"]');
  await page.click('input[name="email"]');
  await page.keyboard.type(newPerson.email);

  await page.waitForSelector('input[name="password"]');
  await page.click('input[name="password"]');
  await page.keyboard.type(password);

  await page.click('#react-app > div > div.container > div > form > div.button-line > div > button > div > div > span');

  await page.screenshot({path: 'test/screenshots/dashboard.png'});

  await page.click('button[type="delete"]');

  await page.screenshot({path: 'test/screenshots/doneHomescreen.png'});

  await browser.close();
})();
