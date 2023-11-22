import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";
export class HomePage extends BasePage {
  private LOGIN_BUTTON: Locator;

  constructor(page: Page) {
    super(page);
    this.LOGIN_BUTTON = page.locator('//[@id="__next"]/div/div[1]/div/nav/div[2]/div/ul[2]/li[1]/a');
    this.initPage();
  }
  initPage = async () => {
    await this.page.waitForLoadState();
  };

  async clickLoginButton(){
    await this.LOGIN_BUTTON.click();
  }
}
