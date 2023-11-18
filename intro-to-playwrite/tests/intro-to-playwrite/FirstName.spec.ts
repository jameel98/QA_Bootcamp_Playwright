import { test, expect, Browser, Page } from "@playwright/test";
import { chromium } from "playwright";

test.describe("name validation", () => {
  let browser: Browser;
  let page: Page;
  let url = "https://www.activetrail.com/free-trial/";
  let inputNum = "name123"
  let inputSChar = "name#@$"
  let expectedErrorMessage = "Invalid value.";
  let FIRSTNAME_INPUT_LOCATOR = "//input[@placeholder='First Name*']";
  let SUBMIT_BUTTON_LOCATOR = "//input[@type='submit']";
  let ERROR_LABEL_LOCATOR = "//label[@id = 'your-name-error']";

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });
  test.beforeEach(async () => {
    page = await browser.newPage();
    await page.goto(url);
});
  test.afterEach(async () => {
    await page.close();
  });
  test.afterAll(async () => {
    await browser.close();
  });

  test(`empty input should show error message: '${expectedErrorMessage}'`, async () => {
    const firstNameInput = page.locator(FIRSTNAME_INPUT_LOCATOR);
    await firstNameInput.fill("");
    const submitBtn = page.locator(SUBMIT_BUTTON_LOCATOR);
    await submitBtn.click();

    const errorMessage = page.locator(ERROR_LABEL_LOCATOR)
    expect(await errorMessage.isVisible());
  });

  test(`invalid input with numbers should show error message: '${expectedErrorMessage}'`, async () => {
    const firstNameInput = page.locator(FIRSTNAME_INPUT_LOCATOR);
    await firstNameInput.fill(inputSChar);
    const submitBtn = page.locator(SUBMIT_BUTTON_LOCATOR);
    await submitBtn.click();
    
    const errorMessage = page.locator(ERROR_LABEL_LOCATOR)
    expect(await errorMessage.isVisible());
  });

});