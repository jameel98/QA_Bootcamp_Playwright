import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CompanyDetailsPage extends BasePage {
  private readonly DATE_OF_THE_TABLE_LOC: string =
    "//span[@class='ng-star-inserted']//b";
  private readonly TABLE_HEADER_LOC: string =
    "//div[@class='general_popover_inner']//h2";

    private dateOfTable: Locator;
    private headerOfTable: Locator;

  constructor(page: Page) {
    super(page);
    this.initPage();
  }

  async initPage() {
    await this.waitForLoad();
  }

  async getDateOfTable() {
    this.dateOfTable = this.page.locator(this.DATE_OF_THE_TABLE_LOC);
    return await this.dateOfTable.textContent();
  }

  async getHeaderOfTable() {
    this.headerOfTable = this.page.locator(this.TABLE_HEADER_LOC);
    return await this.headerOfTable.textContent();
  }
}
