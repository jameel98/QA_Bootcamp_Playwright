import { test, Page, expect, Browser, chromium } from "playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { myInfo } from "../pages/MyInfo";
import { PimPage } from "../pages/PimPage";
import { DashboardPage } from "../pages/DashboardPage";

test.describe("all tests ", () => {
  let browser: Browser;

  let login: LoginPage;

  const username: string = "Admin";
  const password: string = "admin123";
  const url = "https://opensource-demo.orangehrmlive.com/";

  test.beforeAll(async () => {
    browser = await chromium.launch();
  });

  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    login = new LoginPage(page);
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test.afterAll(async () => {
    await browser.close();
  });

  test("Login successfuly ", async ({ page }) => {
    await login.loginFullProccess(username, password);
    new DashboardPage(page);
    expect(page.url()).toBe(
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });

  test.describe("after login", async () => {
    let dashboardPage: DashboardPage;
    test.beforeEach(async ({ page }) => {
      await login.loginFullProccess(username, password);
      dashboardPage = new DashboardPage(page);
    });

    test("Update my information test", async ({ page }) => {
      await dashboardPage.sideMenu.clickOnMyInfo();
      const info = new myInfo(page);
      await info.updateInfromation("john", "harvy");
      await info.reload();
      let profileName = info.profileNameLocator;
      console.log(profileName);
      await expect(profileName).toHaveText("john harvy");
    });
    test("adding new employee test", async ({ page }) => {
      await dashboardPage.sideMenu.clickOnPim();
      const pim = new PimPage(page);
      let id = Math.floor(Math.random() * 100000);
      await pim.addEmployeeFullProccess("terey", "henrey", id.toString());
      await pim.reload();
      let name = await pim.profileNameAfterAdd();
      expect(name).toContain("terey henrey");                
    });
    test("search by id test", async ({ page }) => {
      await dashboardPage.sideMenu.clickOnPim();
      const pim = new PimPage(page);
      await pim.addEmployeeFullProccess("zidan", "zezo", "1122");
      await pim.sideMenu.clickOnPim();
      let isExist = await pim.searchById("1122");
      expect(isExist).toBe(true);
    });
   
  });
});
