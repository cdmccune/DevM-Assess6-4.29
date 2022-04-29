
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
  
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    // await driver.sleep(1000)
    expect(displayed).toBe(true)
})

const checkDraw = async (driver) =>  {
    await driver.findElement(By.id("draw")).click()
    // await driver.sleep(1000)
    const botsList = await driver.findElement(By.xpath("//div[contains(@class,'bot-card outline')]"))
    const displayed = botsList.isDisplayed()
    expect(displayed).toBeTruthy()
}

test("Draw button displays the bots", async ()=> {
    await checkDraw(driver)
})

const checkAddToDuo = async (driver) =>  {
    // await driver.findElement(By.xpath("//button[@class='bot-btn']")).click()
    // await driver.findElement(By.xpath('//[contains(@onclick,"chooseBot")]')).click()
    // await driver.findElement(By.xpath("//[contains(@onclick,'submitData('chooseBot')')]"))
    //a[contains(@onclick,'submitData('updateShortcodeAdmin')')]
    // '//*[contains(@onclick, "chooseBot(4)")]'
    await driver.sleep(1000)
    const newDuo = await driver.findElement(By.xpath("//div[contains(@id,'player-duo')]/div[contains(@class,'bot-card outline')"))
    const displayed = newDuo.isDisplayed()
    expect(displayed).toBeTruthy()
}

test("Draw button displays the bots", async ()=> {
    await checkAddToDuo(driver)
})