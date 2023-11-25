import { Locator, Page } from "playwright/test";
import { AppPageBase } from "./AppPage";

export class PimPage extends AppPageBase {
  private ADD_BUTTON: Locator;
  private FIRST_NAME: Locator;
  private LAST_NAME: Locator;
  private ID_INPUT: Locator;
  private SAVE_BUTTON: Locator;
  private NAME_AFTER_ADD: Locator;
  private ID_FOR_SEARCH: Locator;
  private SEARCH_BUTTON: Locator;
  private ID_IN_TABLE: Locator;
  private DELETE_BUTTON: Locator;
  private SURE_BUTTON: Locator;

  constructor(page: Page) {
    super(page);

    this.ADD_BUTTON = page.locator(
      "//div[@class='orangehrm-header-container']/button[@type='button']"
    );
    this.FIRST_NAME = page.locator("//input[@name='firstName']");
    this.LAST_NAME = page.locator("//input[@name='lastName']");
    this.ID_INPUT = page.locator(
      "//div[@class='oxd-grid-2 orangehrm-full-width-grid']//div//input"
    );
    this.SAVE_BUTTON = page.locator("//button[@type='submit']");
    this.NAME_AFTER_ADD = page.locator(
      "//h6[@class='oxd-text oxd-text--h6 --strong']"
    );
    this.ID_FOR_SEARCH = page.locator(
      "//div[@class='oxd-input-group oxd-input-field-bottom-space']//input[@class='oxd-input oxd-input--active']"
    );
    this.SEARCH_BUTTON = page.locator("//button[@type='submit']");
    this.DELETE_BUTTON = page.locator(
      "//div[@class='oxd-table-cell-actions']//button"
    );
    this.SURE_BUTTON = page.locator(
      "//div[@class='orangehrm-modal-footer']//button"
    );
    this.initPage()
  }
  initPage = async () => {
    await this._page.waitForLoadState();
  };
  clickOnAddButton = async () => {
    await this.ADD_BUTTON.click();
  };

  addEmployeeFullProccess = async (
    name: string,
    lastName: string,
    id: string
  ) => {
    await this.clickOnAddButton();
    await this.FIRST_NAME.fill(name);
    await this.LAST_NAME.fill(lastName);
    await this.ID_INPUT.fill(id);
    await this.clickOnSaveButton();
  };
  clickOnSaveButton = async () => {
    await this.SAVE_BUTTON.click();
  };
  profileNameAfterAdd = async () => {  
    return await this.NAME_AFTER_ADD.textContent();
  };
  searchById = async (id: string) => {
    await this.ID_FOR_SEARCH.fill(id);
    await this.SAVE_BUTTON.click();
    this.ID_IN_TABLE = this._page.locator(`//div[text()="${id}"]`);
    return this.ID_IN_TABLE.isVisible();
  };
  deletOrUpdateEmployee = async (num: number) => {
    await this.DELETE_BUTTON.nth(num).click();
    if (num === 0) await this.SURE_BUTTON.click();
  };
}
