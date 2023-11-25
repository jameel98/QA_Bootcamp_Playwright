import { Page, Locator } from "playwright";
import { BasePage } from "./BasePage";

export class Filter extends BasePage{
  private page: Page;

  //locators

  private SORT_BY_STOCK_MARKET_HIGH_TO_LOW_BTN: Locator;
  private SORT_BY_STOCK_MARKET_LOW_TO_HIGH_BTN: Locator;
  private FILTER_OPTION_SELECT: Locator;
  private FILTER_BUTTON: Locator;
  private STOCK_MARKET_FIRST_NAME: Locator;
  private STOCK_MARKET_FIRST_TYPE: Locator;

  constructor(page: Page) {
    super(page)

    //init locators on page
    this.SORT_BY_STOCK_MARKET_HIGH_TO_LOW_BTN = this.page.locator(
      "(//button[@class = 'glyphicon glyphicon-menu-down sorting_button'])[3]"
    );
    this.SORT_BY_STOCK_MARKET_LOW_TO_HIGH_BTN = this.page.locator(
      "(//button[@class = 'glyphicon glyphicon-menu-up sorting_button'])[3]"
    );
    this.FILTER_OPTION_SELECT = this.page
      .locator("//select[@id = 'filterOptions' ]")
      .first();
    this.FILTER_BUTTON = this.page.locator(
      "//button[@class='sort_table sort_action_buttons btn-block']"
    );
  }

  // Sort from high to low by stock market
  async sortByStockMarketDescendingOrder() {
    await this.SORT_BY_STOCK_MARKET_HIGH_TO_LOW_BTN.click();
  }

  // Sort from low to high by stock market
  async sortByStockMarketAscendingOrder() {
    await this.SORT_BY_STOCK_MARKET_LOW_TO_HIGH_BTN.click();
  }

  async filterBySecurity() {
    await this.FILTER_OPTION_SELECT.selectOption(" ניירות ערך ");
    await this.FILTER_BUTTON.scrollIntoViewIfNeeded();
    await this.FILTER_BUTTON.click();
  }

  async filterByWarrants() {
    await this.FILTER_OPTION_SELECT.selectOption("  מק\"מ  ");
    await this.FILTER_BUTTON.scrollIntoViewIfNeeded();
    await this.FILTER_BUTTON.click();
  }
  async getTheFirstNameInTable() {
    // Wait for the loading screen to disappear
    await this.page.waitForSelector("//iframe", { state: "detached" });
    await this.page.waitForTimeout(2000);
    this.STOCK_MARKET_FIRST_NAME = this.page
      .locator("//tbody//tr")
      .first()
      .locator("//td")
      .first();

    return await this.STOCK_MARKET_FIRST_NAME.textContent();
  }

  async getTheFirstTypeInTable() {
    // Wait for the loading screen to disappear
    await this.page.waitForSelector("//iframe", { state: "detached" });
    await this.page.waitForTimeout(2000);
    this.STOCK_MARKET_FIRST_TYPE = this.page
      .locator("//tbody//tr")
      .first()
      .locator("//td")
      .nth(4);

    return await this.STOCK_MARKET_FIRST_TYPE.textContent();
  }
}
