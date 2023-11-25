import { Locator, Page } from "playwright/test";

export class LoginPage {
  page: Page;
  //locators
  private USER_NAME: Locator;
  private PASSWORD: Locator;
  private LOGIN_BUTTON: Locator;

  constructor(page: Page) {
    this.page = page;
    this.USER_NAME = page.locator("//input[@name='username']");
    this.PASSWORD = page.locator("//input[@name='password']");
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
