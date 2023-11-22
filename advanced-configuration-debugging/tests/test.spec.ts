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

  let login: LoginPage
  let home : HomePage

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
    home.clickLoginButton()
    await login.loginFullProccess(email, password);
    new TasksPage(page);
    expect(page.url()).toBe(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });



  
});
