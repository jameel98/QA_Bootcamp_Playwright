import { test, expect, Browser, Page } from "@playwright/test";
import { chromium } from "playwright";

test.describe("Email validation", () => {
  let browser: Browser;
  let page: Page;
  let url = "https://www.activetrail.com/free-trial/";
  let input = "asdasd"
  let expectedErrorMessage = "Invalid value.";
  let EMAIL_INPUT_LOCATOR = "input[type='email']";
  let SUBMIT_BUTTON_LOCATOR = "//input[@type='submit']";
  let ERROR_LABEL_LOCATOR = "//label[@id = 'your-email-error']";

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
    const emailInput = page.locator(EMAIL_INPUT_LOCATOR);
    await emailInput.fill("");
    const submitBtn = page.locator(SUBMIT_BUTTON_LOCATOR);
    await submitBtn.click();

    const errorMessage = page.locator(ERROR_LABEL_LOCATOR)
    expect(await errorMessage.isVisible());
  });

  test(`invalid input should show error message: '${expectedErrorMessage}'`, async () => {
    const emailInput = page.locator(EMAIL_INPUT_LOCATOR);
    await emailInput.fill(input);
    const submitBtn = page.locator(SUBMIT_BUTTON_LOCATOR);
    await submitBtn.click();
    
    const errorMessage = page.locator(ERROR_LABEL_LOCATOR)
    expect(await errorMessage.isVisible());
  });

});