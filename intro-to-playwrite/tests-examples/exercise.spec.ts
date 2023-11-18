import { test, expect, Browser, Page } from "@playwright/test";
import { chromium } from "playwright";

test.describe("My Test Suite", () => {
  let browser: Browser;
  let page: Page;
  let url = "https://www.activetrail.com/free-trial/";
  test.beforeAll(async () => {
    browser = await chromium.launch();
  });
  test.beforeEach(async () => {
    page = await browser.newPage();
  });
  test.afterEach(async () => {
    await page.close();
  });
  test.afterAll(async () => {
    await browser.close();
  });
  test("should navigate to ActiveTrial", async () => {
    await page.goto(url);
    expect(await page.title()).toBe(
      "Free account opening ActiveTrail e-mail system and automation."
    );
  });

  test("Verify illegal email error message", async () => {
    await page.goto(url);
    const emailInput = page.locator('input[id="your-email"]');
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="your-email-error"]');
    await emailInput.fill("bla bla");
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });

  test("Verify short password error message", async () => {
    await page.goto(url);
    const passInput = page.locator('input[id="your-password"]');
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="your-password-error"]');
    const UpperLetter = "A";
    const smallLetter = "a";
    const num = "1";
    const specialChar = "@";
    const resttoNine = "bcdef";
    await passInput.fill(UpperLetter + smallLetter + num + specialChar);
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });

  test("Verify password missing Upper letter error message", async () => {
    await page.goto(url);
    const passInput = page.locator('input[id="your-password"]');
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="your-password-error"]');
    const UpperLetter = "A";
    const smallLetter = "a";
    const num = "1";
    const specialChar = "@";
    const resttoNine = "bcdef";
    await passInput.fill("a" + smallLetter + num + specialChar + resttoNine);
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });

  test("Verify missing num error message", async () => {
    await page.goto(url);
    const passInput = page.locator('input[id="your-password"]');
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="your-password-error"]');
    const UpperLetter = "A";
    const smallLetter = "a";
    const num = "1";
    const specialChar = "@";
    const resttoNine = "bcdef";
    await passInput.fill(
      UpperLetter + smallLetter + "a" + specialChar + resttoNine
    );
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });
  test("Verify missing special charachter error message", async () => {
    await page.goto(url);
    const passInput = page.locator('input[id="your-password"]');
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="your-password-error"]');
    const UpperLetter = "A";
    const smallLetter = "a";
    const num = "1";
    const specialChar = "@";
    const resttoNine = "bcdef";
    await passInput.fill(UpperLetter + smallLetter + num + "a" + resttoNine);
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });

  test("Verify illegal first name number error message", async () => {
    await page.goto(url);
    const nameInput = page.locator('input[id="your-name"]');
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="your-name-error"]');
    const num = "1";
    const specialChar = "@";
    await nameInput.fill("bla bla" + num);
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });

  test("Verify illegal first name special charachter error message", async () => {
    await page.goto(url);
    const nameInput = page.locator('input[id="your-name"]');
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="your-name-error"]');
    const num = "1";
    const specialChar = "@";
    await nameInput.fill("bla bla" + specialChar);
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });

  test("Verify illegal last name number error message", async () => {
    await page.goto(url);
    const nameInput = page.locator('input[id="your-last-name"]');
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="your-last-name-error"]');
    const num = "1";
    const specialChar = "@";
    await nameInput.fill("bla bla" + num);
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });

  test("Verify illegal last name special charachter error message", async () => {
    await page.goto(url);
    const nameInput = page.locator('input[id="your-last-name"]');
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="your-last-name-error"]');
    const num = "1";
    const specialChar = "@";
    await nameInput.fill("bla bla" + specialChar);
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });

  test("Verify illegal phone error message", async () => {
    await page.goto(url);
    const phoneInput = page.locator('input[id="phone"]');
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="your-tel-base-error"]');
    await phoneInput.fill("512345678");
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });

  test("Verify terms and condition error message", async () => {
    await page.goto(url);
    const termsCheckBox = page.locator(
      '[@id="wpcf7-f66064-o1"]/form/div[2]/div/div[8]/div[1]/label/span'
    );
    const submitBtn = page.locator('input[type="submit"]');
    const errorMessage = page.locator('label[id="checkbox-tos-error"]');
    
    await submitBtn.click();
    expect(await errorMessage.isVisible());
  });
});
