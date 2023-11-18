import { test, expect, Browser, Page } from "@playwright/test";
import { chromium } from "playwright";

test.describe("Phone Number validation", () => {
  let browser: Browser;
  let page: Page;
  let url = "https://www.activetrail.com/free-trial/";

  let expectedErrorMessage = "Invalid value.";
  let TELEPHONE_INPUT_LOCATOR = "//input[@placeholder='Telephone*']";
  let SUBMIT_BUTTON_LOCATOR = "//input[@type='submit']";
  let ERROR_LABEL_LOCATOR = "//label[@id = 'phone-error']";

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
    const input = page.locator(TELEPHONE_INPUT_LOCATOR);
    await input.fill('');
    await page.locator(SUBMIT_BUTTON_LOCATOR).click();

    const errorMsg = await page.locator(ERROR_LABEL_LOCATOR).textContent();
    expect(errorMsg).toBe(expectedErrorMessage)
});

});
