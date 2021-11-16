const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5500/automation/movieList/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})

test('Movie List Add Test', async () => {

    await driver.findElement(By.xpath('(//input)')).sendKeys('Gladiator\n')
    
    await driver.findElement(By.xpath('(//button)')).click()
})