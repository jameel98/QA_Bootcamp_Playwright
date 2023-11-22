import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class TasksPage extends BasePage {
  private Add_Button: Locator;

  constructor(page: Page) {
    super(page);

    this.page = page;
    this.Add_Button = page.locator(
      '//[@id="todoist_app"]/div[1]/div[2]/main/div/div/div/div/div/div/div/li/section/div/ul/li/button'
    );
    this.initPage();
  }
  initPage = async () => {
    await this.page.waitForLoadState();
  };

  async clickAddTask() {
    await this.Add_Button.click();
  }
}
