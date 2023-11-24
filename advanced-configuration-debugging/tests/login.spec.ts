import { test, expect, Page, BrowserContext } from "@playwright/test";
import { LoginPage } from "../logic/pages/LoginPage";
import { HomePage } from "../logic/pages/HomePage";
import { TasksPage } from "../logic/pages/TasksPage";

const BASE_URL = "https://todoist.com/";
const email: string = "adminjameel@gmail.com";
const password: string = "admin123";

test.describe("State Stock Table Validation Suite", () => {
  let context: BrowserContext;
  let page: Page;

  let login: LoginPage;
  let home: HomePage;

  test.beforeAll(async () => {
    page = await context.newPage();
  });

  test.beforeEach(async () => {
    await page.goto(BASE_URL);
  });

  test.afterAll(async () => {
    await context.close();
  });

  test("Login successfuly ", async ({ page }) => {
    home.clickLoginButton();
    await login.loginFullProccess(email, password);
    new TasksPage(page);
    expect(page.url()).toBe(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });

  test("@bug Login unsuccessfuly: fill email without .com", async ({ page }) => {
    let error = "Please enter a valid email address."
    let errorLoc = page.locator('//[@id="element-2"]/span')
    home.clickLoginButton();
    await login.loginFullProccess("adminjameel@gmail", password);
    expect(errorLoc.textContent()).toBe(error)
  });

  test("@bug Login unsuccessfuly: fill email only", async ({ page }) => {
    let error = "Passwords must be at least 8 characters long."
    let errorLoc = page.locator('//[@id="element-5"]')
        home.clickLoginButton();
    await login.loginFullProccess(email, "");
    expect(errorLoc.textContent()).toBe(error)
  });
  test("@bug Login unsuccessfuly: fill email and wrong password", async ({ page }) => {
    let error = "Wrong email or password."
    let errorLoc = page.locator('//[@id="todoist_app"]/div/div/div[2]/div[1]/div/div/form/div[1]')
    home.clickLoginButton();
    await login.loginFullProccess(email, "aaaa1234");
    expect(errorLoc.textContent()).toBe(error)

  });
});