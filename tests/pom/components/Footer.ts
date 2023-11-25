import { Locator, Page } from "playwright/test";
import { BasePage } from "../pages/BasePage";

export class Footer extends BasePage {

  private COMPANY_LINK: Locator;

  constructor(page: Page) {
    super(page);
    this.COMPANY_LINK = page.locator(
      '//[@id="app"]/div[1]/div[2]/div[3]/p[2]/a'
    );
  }

  async clickCompanyLink() {
    await this.COMPANY_LINK.click;
  }
}
