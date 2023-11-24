import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { AddTask } from "../components/AddTask";

export class TasksPage extends BasePage {
  private Add_Button: Locator;
  task: AddTask;

  constructor(page: Page) {
    super(page);
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

  async addTaskFullProcesss(name: string, desc:string, priority: number, date: string) {
    this.task = new AddTask(this.page)
    this.task.fillName(name)
    this.task.fillDescription(desc)
    this.task.pickPriority(priority)
    this.task.pickDate(date)
    this.task.clickAddBtn()
  }
}
