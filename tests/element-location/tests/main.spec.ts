import { test, expect, Page, Browser, chromium } from "@playwright/test";
import { Filter } from "../pages/FilterPage";

test.describe("Stock Validation Suite", () => {
  let browser: Browser;
  let url = "https://market.tase.co.il/he/market_data/securities/data/stocks";
  test.beforeAll(async () => {
    browser = await chromium.launch();
  });
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.setViewportSize({ width: 1920, height: 1080 });
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });
  test.afterAll(async () => {
    await browser.close();
  });

  test('Filter by " ניירות ערך " -> Sort Descending Order by "מס׳ ניע" -> Validate First Item Name', async ({
    page,
  }) => {
    const stocksPage = new Filter(page);

    await stocksPage.filterBySecurity();
    await stocksPage.sortByStockMarketDescendingOrder();

    const actualName = await stocksPage.getTheFirstNameInTable();
    expect(actualName).toBe("דלק רכב");
  });

  test('Filter by " ניירות ערך " -> Sort Ascending Order by "מס׳ ניע" -> Validate First Item Name', async ({
    page,
  }) => {
    const stocksPage = new Filter(page);

    await stocksPage.filterBySecurity();
    await stocksPage.sortByStockMarketAscendingOrder();

    const actualName = await stocksPage.getTheFirstNameInTable();
    expect(actualName).toBe("טיב טעם");
  });

  test('Filter by " מק"מ  " -> Sort Descending Order by "מס׳ ניע" -> Validate First Item Name', async ({
    page,
  }) => {
    const stocksPage = new Filter(page);

    await stocksPage.filterByWarrants();
    await stocksPage.sortByStockMarketAscendingOrder();

    const actualName = await stocksPage.getTheFirstNameInTable();
    expect(actualName).toBe("מ.ק.מ. 1114");
  });

  test('Filter by " מק"מ " -> Sort Ascending Order by "מס׳ ניע" -> Validate First Item Name', async ({
    page,
  }) => {
    const stocksPage = new Filter(page);

    await stocksPage.filterByWarrants();
    await stocksPage.sortByStockMarketAscendingOrder();

    const actualName = await stocksPage.getTheFirstNameInTable();
    expect(actualName).toBe("מ.ק.מ. 1213");
  });
});
