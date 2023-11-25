import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/BasePage";

export class SideMenu extends BasePage {
  private SEARCH: Locator
  private INBOX: Locator
  private TODAY: Locator
  private UPCOMING: Locator
  private HOME: Locator

  constructor(page: Page) {
    super(page);
    this.SEARCH = page.locator('//[@id="top-menu"]/li[2]/div/div/a');
    this.INBOX = page.locator('//[@id="filter_inbox"]/div/div/a')
    this.TODAY = page.locator('//[@id="filter_today"]/div/div/a')
    this.UPCOMING = page.locator('//[@id="filter_upcoming"]/div/div/a')
    this.HOME = page.locator('//[@id="projects_list"]/div/div/li/div/div/a')
    this.initPage();
  }
  initPage = async () => {
    await this.page.waitForLoadState();
  };

  async clickSearchButton(){
    await this.SEARCH.click()
  }
  
  async clickInboxButton(){
    await this.INBOX.click()
  }
  
  async clickTodayButton(){
    await this.TODAY.click()
  }
  async clickUpComingButton(){
    await this.UPCOMING.click()
  }
  async clickHomeButton(){
    await this.HOME.click()
  }
  
}
