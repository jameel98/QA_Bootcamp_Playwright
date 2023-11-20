import { test, expect, Page, BrowserContext } from "@playwright/test";
import { MainPage } from "../pages/MainPage";
import { CompanyDetailsPage } from "../pages/CompanyDetailsPage";

const BASE_URL = "https://tase.co.il";
const DATE = "05/11/2023";
const CATEGORY_VALUE = "02";

test.describe("State Stock Table Validation Suite", () => {
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    page = await context.newPage();
  });

  test.beforeEach(async () => {
    await page.goto(BASE_URL);
  });

  test.afterAll(async () => {
    await context.close();
  });

  test("Choose 05/11/2023 date -> Select   מדדי שווי שוק  -> Filter The Table -> Validate the first security group in table", async () => {
    const mainPage = new MainPage(page);
    await mainPage.fullFilterProccess(DATE, CATEGORY_VALUE);

    expect(await mainPage.getSecurityGroupByRowIndex(0)).toBe('ת"א-EW125');
  });

  test("Choose 05/11/2023 date -> Select  מדדי שווי שוק -> Filter The Table -> Validate the date of the table", async () => {
    const mainPage = new MainPage(page);
    await mainPage.fullFilterProccess(DATE, CATEGORY_VALUE);

    const companyPage = new CompanyDetailsPage(page);

    expect(await companyPage.getDateOfTable()).toBe(DATE);
  });

  test(" Choose 05/11/2023 date -> Select  מדדי שווי שוק -> Filter The Table -> Validate table header", async () => {
    const mainPage = new MainPage(page);
    await mainPage.fullFilterProccess(DATE, CATEGORY_VALUE);
    const companyPage = new CompanyDetailsPage(page);
    expect(await companyPage.getHeaderOfTable()).toContain("מדדי שווי שוק ");
  });

  // Parameterized Tests
  const dateAndCategoryData = [
    {
      date: "01/10/2023",
      categoryValue: "12",
      categoryName: 'מדדי אג"ח סוף יום',
      rowToValidate: 0,
    },
    {
      date: "05/11/2023",
      categoryValue: "02",
      categoryName: "מדדי שווי שוק",
      rowToValidate: 0,
    },
    {
      date: "01/11/2023",
      categoryValue: "04",
      categoryName: "מדדים מיוחדים",
      rowToValidate: 0,
    },
    {
      date: "01/10/2023",
      categoryValue: "15",
      categoryName: "מדדי תל בונד",
      rowToValidate: 0,
    },
  ];
  for (const data of dateAndCategoryData) {
    test(`Filter The Table (Date = ${data.date}, Category = ${data.categoryName}) -> Download file as CSV -> Validate all the data in row = ${data.rowToValidate}`, async () => {
      const mainPage = new MainPage(page);
      await mainPage.fullFilterProccess(data.date, data.categoryName);
      const download = await mainPage.downloadCurrentData();

      expect(await download.failure()).toBeNull();
    });
  }
});
