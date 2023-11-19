import { Locator, Page } from "playwright/test";
import { BasePage } from "../pages/BasePage";

export class Header extends BasePage {
  private TITLE: Locator;

  constructor(page: Page) {
    super(page);
    this.TITLE = page.locator(
      '//[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6'
    );
  }

  async getPageTitle() {
    return this.TITLE.textContent();
  }
}
