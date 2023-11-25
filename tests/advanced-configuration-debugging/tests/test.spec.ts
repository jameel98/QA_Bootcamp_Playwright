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

test.describe("State Stock Table Validation Suite", () => {
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

  test.describe("after login", async () => {
    home.clickLoginButton();
    let tasks: TasksPage;
    test.beforeEach(async ({ page }) => {
      await login.loginFullProccess(email, password);
      tasks = new TasksPage(page);
    });

    test("add new task today -> go to today -> check the task", async () => {
      let data = { tname: "task1", description: "cook dinner" };
      const currentDate: Date = new Date();
      const formattedDate: string = Utils.formatDateToString(currentDate);
      tasks.clickAddTask();
      tasks.addTaskFullProcesss(data.tname, data.description, 4, formattedDate);
      await expect(page.locator(".items li")).toHaveText("task1");
    });

    test("add new task for future date -> go to inbox -> check the task", async () => {
      let data = { tname: "task2", description: "cook dinner" };
      const futureDate: Date = Utils.getDateRelativeToNow(7); // 7 days in the future
      const formattedDate: string = Utils.formatDateToString(futureDate);
      tasks.clickAddTask();
      tasks.addTaskFullProcesss(data.tname, data.description, 4, formattedDate);

      await expect(page.locator(".items li")).toHaveText("task2");
    });

    test("add new project -> go to my projects -> check the project", async () => {});
  });
});
