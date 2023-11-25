import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage";
import { AppPageBase } from "./AppPage";

export class myInfo extends AppPageBase {
  private page: Page;

  //locators
  private FIRST_NAME: Locator;
  private LAST_NAME: Locator;
  private SAVE_BUTTON: Locator;
  private PROFILE_NAME: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.FIRST_NAME = page.locator("//input[@name='firstName']");
    this.LAST_NAME = page.locator("//input[@name='lastName']");
    this.SAVE_BUTTON = page.locator(
      "//form[@class='oxd-form']/div[5][@class='oxd-form-actions']/button[@type='submit']"
    );
    this.PROFILE_NAME = page.locator(
      "//h6[@class='oxd-text oxd-text--h6 --strong']"
    );
    this.initPage();
  }
  initPage = async () => {
    await this.page.waitForLoadState();
  };
  async updateInfromation(name: string, lname: string) {
    await this.FIRST_NAME.fill("");
    await this.FIRST_NAME.fill(name);
    await this.LAST_NAME.fill("");
    await this.LAST_NAME.fill(lname);
    this.page.waitForTimeout(7000);
    await this.SAVE_BUTTON.click();
  }
  headerName = async () => {
    return this.header.getPageTitle()
  };

  get profileNameLocator() {
    return this.PROFILE_NAME;
  }
}
