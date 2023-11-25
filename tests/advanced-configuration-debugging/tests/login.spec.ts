import {
  test,
  expect,
  Page,
  BrowserContext,
  Browser,
  chromium,
} from "@playwright/test";
import { LoginPage } from "../logic/pages/LoginPage";
import { HomePage } from "../logic/pages/HomePage";
import { TasksPage } from "../logic/pages/TasksPage";

const BASE_URL = "https://todoist.com/";
const email: string = "adminjameel@gmail.com";
const password: string = "admin123";

test.describe("Todoist login tests", () => {
  let context: BrowserContext;
  let page: Page;
  let browser: Browser;

  let login: LoginPage;
  let home: HomePage;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
  });

  test.beforeEach(async () => {
    page = await context.newPage();
    await page.goto(BASE_URL);
    home = new HomePage(page);
  });

  test.afterAll(async () => {
    await context.close();
  });

  test("Login successfuly ", async () => {
    home.clickLoginButton();
    await login.loginFullProccess(email, password);
    expect(page.url()).toBe(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });

  test("@bug Login unsuccessfuly: fill email without .com", async () => {
    let error = "Please enter a valid email address.";
    let errorLoc = page.locator('//[@id="element-2"]/span');
    home.clickLoginButton();
    await login.loginFullProccess("adminjameel@gmail", password);
    expect(errorLoc.textContent()).toBe(error);
  });

  test("@bug Login unsuccessfuly: fill email only", async () => {
    let error = "Passwords must be at least 8 characters long.";
    let errorLoc = page.locator('//[@id="element-5"]');
    home.clickLoginButton();
    await login.loginFullProccess(email, "");
    expect(errorLoc.textContent()).toBe(error);
  });
  test("@bug Login unsuccessfuly: fill email and wrong password", async () => {
    let error = "Wrong email or password.";
    let errorLoc = page.locator(
      '//[@id="todoist_app"]/div/div/div[2]/div[1]/div/div/form/div[1]'
    );
    home.clickLoginButton();
    await login.loginFullProccess(email, "aaaa1234");
    expect(errorLoc.textContent()).toBe(error);
  });
});
