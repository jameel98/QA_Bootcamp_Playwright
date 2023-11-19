import { Locator, Page } from "playwright/test";
import { BasePage } from "../pages/BasePage";

export class SideMenu extends BasePage{

  private pim: Locator;
  private myInfo: Locator;

  constructor(page: Page) {
    super(page)
    this.pim = page.locator("//span[text()='PIM']");
    this.myInfo = page.locator("//span[text()='My Info']");
  }

  async clickOnPim() {
    await this.pim.click();
  }
  async clickOnMyInfo() {
    await this.myInfo.click();
  }
}
