import { test, expect, Browser, Page } from "@playwright/test";
import { chromium } from "playwright";

test.describe("Password validation", () => {
  let browser: Browser;
  let page: Page;
  let url = "https://www.activetrail.com/free-trial/";

  const UpperLetter = "A";
  const smallLetter = "a";
  const num = "1";
  const specialChar = "@";
  const restSmall = "bcdefgh";
  const restUpper = "BCDEFGH";

  let expectedErrorMessage = "Invalid value.";
  let PASSWORD_INPUT_LOCATOR = "input[type='password']";
  let SUBMIT_BUTTON_LOCATOR = "//input[@type='submit']";
  let ERROR_LABEL_LOCATOR = "//label[@id = 'password-error']";

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
    const input = page.locator(PASSWORD_INPUT_LOCATOR);
    await input.fill('');
    await page.locator(SUBMIT_BUTTON_LOCATOR).click();

    const errorMsg = await page.locator(ERROR_LABEL_LOCATOR).textContent();
    expect(errorMsg).toBe(expectedErrorMessage)
});

test(`missing lower case input should show error message: '${expectedErrorMessage}'`, async () => {
    const input = page.locator(PASSWORD_INPUT_LOCATOR);
    await input.fill(num + specialChar + restUpper);
    await page.locator(SUBMIT_BUTTON_LOCATOR).click();

    const errorMsg = await page.locator(ERROR_LABEL_LOCATOR).textContent();
    expect(errorMsg).toBe(expectedErrorMessage)
});
test(`missing upper case input should show error message: '${expectedErrorMessage}'`, async () => {
    const input = page.locator(PASSWORD_INPUT_LOCATOR);
    await input.fill(num + specialChar + restSmall);
    await page.locator(SUBMIT_BUTTON_LOCATOR).click();

    const errorMsg = await page.locator(ERROR_LABEL_LOCATOR).textContent();
    expect(errorMsg).toBe(expectedErrorMessage)
});

test(`missing special char case input should show error message: '${expectedErrorMessage}'`, async () => {
    const input = page.locator(PASSWORD_INPUT_LOCATOR);
    await input.fill(num + smallLetter + restUpper);
    await page.locator(SUBMIT_BUTTON_LOCATOR).click();

    const errorMsg = await page.locator(ERROR_LABEL_LOCATOR).textContent();
    expect(errorMsg).toBe(expectedErrorMessage)
});
test(`missing num input should show error message: '${expectedErrorMessage}'`, async () => {
    const input = page.locator(PASSWORD_INPUT_LOCATOR);
    await input.fill(smallLetter + specialChar + restUpper);
    await page.locator(SUBMIT_BUTTON_LOCATOR).click();

    const errorMsg = await page.locator(ERROR_LABEL_LOCATOR).textContent();
    expect(errorMsg).toBe(expectedErrorMessage)
});

});
