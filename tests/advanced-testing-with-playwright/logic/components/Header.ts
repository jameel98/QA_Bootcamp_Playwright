import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/Base";

export class Header extends BasePage {
  private readonly HOME_BAR_BUTTON_LOC =
    "//div[@class='navigation']//a[contains(string(),'Home')]";
  private readonly SIGN_IN_BUTTON_LOC =
    "//div[@class='userinfo']//a[contains(string(),'sign in')]";
  private readonly USERNAME_LOC =
    "//div[@class='userinfo']//*[@class='username']";

  private homeBtn: Locator;
  private signInBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.homeBtn = page.locator(this.HOME_BAR_BUTTON_LOC);
  }

  async clickHome() {
    await this.homeBtn.click();
  }

  async clickSignIn() {
    this.signInBtn = this.page.locator(this.SIGN_IN_BUTTON_LOC);
    await this.signInBtn.click();
  }

  async getUserName() {
    return await this.page.locator(this.USERNAME_LOC).textContent();
  }
}
