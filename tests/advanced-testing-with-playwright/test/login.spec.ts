import { test, expect, Browser, chromium } from "@playwright/test";
import { HomePage } from "../logic/pages/Home";
import { Login } from "../logic/pages/Login";

const BASE_URL = "https://www.pokellector.com/";

test.describe("SignIn Page Validations Suite", () => {
  let browser: Browser;

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test.afterAll(async () => {
    await browser.close();
  });

  const users = [
    { name: "pop", pass: "admin123", errmessage: "Username not found" },
    { name: "adminjameel", pass: "jameel", errmessage: "Invalid Password" },
    {
      name: "adminjameel",
      pass: "admin123",
      errmessage: "Welcome back adminjameel!",
    },
  ];
  for (const user of users) {
    test(`Go to SignIn -> Fill username:${user.name}  -> Fill password:${user.pass}  -> Validate site message: ${user.errmessage}`, async ({
      page,
    }) => {
      const homePage = new HomePage(page);
      await homePage.header.clickSignIn();

      const signInPage = new Login(page);
      await signInPage.waitForLoad();
      await signInPage.signInFullProccess(user.name, user.pass);

      let message = await signInPage.getSiteMessage();
      expect(message).toBe(user.errmessage);
    });
  }
});
