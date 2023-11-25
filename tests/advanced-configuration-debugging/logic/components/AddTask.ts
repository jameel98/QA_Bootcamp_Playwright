import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class AddTask extends BasePage {
  private TASK_NAME: Locator;
  private TASK_DESCRIPTION: Locator;
  private TASK_DATE: Locator;
  private DATE_INPUT: Locator;
  private TASK_PRIORITY: Locator;
  private ADD_BUTTON: Locator;

  constructor(page: Page) {
    super(page);

    this.TASK_NAME = page.locator(
      '//[@id="todoist_app"]/div[1]/div[2]/main/div/div/div/div/div/div/div/li/section/div/ul/li/button'
    );
    this.initPage();
  }
  initPage = async () => {
    await this.page.waitForLoadState();
  };

  async fillName(name: string) {
    await this.TASK_NAME.fill(name);
  }
  async fillDescription(describtion: string) {
    await this.TASK_DESCRIPTION.fill(describtion);
  }

  async pickDate(date: string) {
    await this.TASK_DATE.click();
  }
  async pickPriority(priority: number) {
    await this.TASK_PRIORITY.click();
  }

  async clickAddBtn() {
    await this.ADD_BUTTON.click();
  }

}
