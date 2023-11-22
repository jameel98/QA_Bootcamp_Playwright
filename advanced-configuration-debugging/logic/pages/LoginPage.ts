import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private USER_NAME: Locator;
  private PASSWORD: Locator;
  private LOGIN_BUTTON: Locator;

  constructor(page: Page) {
    super(page)
 
    this.page = page;
    this.USER_NAME = page.locator("//input[@id='element-0']");
    this.PASSWORD = page.locator("//input[@id='element-3']");
    this.LOGIN_BUTTON = page.locator("//button[@type='submit']");
    this.initPage();
  }
  initPage = async () => {
    await this.page.waitForLoadState();
  };

  async loginFullProccess(username: string, passwrod: string) {
    await this.USER_NAME.fill(username);
    await this.PASSWORD.fill(passwrod);
    await this.LOGIN_BUTTON.click();
  }
}
