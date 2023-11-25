import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
  private readonly DATE_INPUT_LOC: string = "#mat-input-0";
  private readonly CATEGORY_SELECT_LOC: string = "#selectByCutSingle";
  private readonly FILTER_BTN_LOC: string =
    "//button[@class='sort_table sort_action_buttons btn-block']";
  private readonly TABLE_CONTENT_LOC: string =
    "//div[@class='col-md-8 col-lg-9']";
  private readonly DOWNLOAD_BTN_LOC: string =
    "//button[@class='font_icon icon-download']";
  private readonly CSV_OPTION_DOWNLOAD_LOC: string =
    "//ul[@class='dropdown-menu']//li[1]";
  private readonly NUMBER_OF_RECORDS_LOC: string =
    "(//span[@class='ng-star-inserted'])";
  
  private readonly ROW_IN_RECORDS_BY_INDEX_LOC: string = "//tbody//tr";
  private readonly SECURITY_GROUP_BY_INDEX_LOC: string = "//td[1]";
 
  private dateInput: Locator;
  private categorySelect: Locator;
  private filterBtn: Locator;
  private downloadBtn: Locator;
  private csvOptionDownload: Locator;
 
  private recordsNumber: Locator;
  private securityGroup: Locator;
 
  constructor(page: Page) {
    super(page);
    this.initPage();

    this.dateInput = page.locator(this.DATE_INPUT_LOC);
    this.categorySelect = page.locator(this.CATEGORY_SELECT_LOC);
    this.filterBtn = page.locator(this.FILTER_BTN_LOC);
    this.downloadBtn = page.locator(this.DOWNLOAD_BTN_LOC);
  }
  async initPage() {
    await this.waitForLoad();
  }


  private async fillDateInput(date: string) {
    await this.dateInput.fill(date);
  }

  private async chooseCategory(category: string) {
    await this.categorySelect.selectOption(category);
  }

  private async pressOnFilter() {
    await this.filterBtn.click();
  }

  async fullFilterProccess(date: string, category: string) {
    await this.fillDateInput(date);
    await this.chooseCategory(category);
    await this.pressOnFilter();
    await this.page.waitForSelector(this.TABLE_CONTENT_LOC);
  }

  async downloadCurrentData() {
    await this.downloadBtn.click();
    this.csvOptionDownload = this.page.locator(this.CSV_OPTION_DOWNLOAD_LOC);
    await this.csvOptionDownload.click();
    const downloadPromise = this.page.waitForEvent("download");
    const download = await downloadPromise;
    return download;
  }

  async getNumberOfRecords() {
    this.recordsNumber = this.page.locator(this.NUMBER_OF_RECORDS_LOC).nth(2);
    const text = await this.recordsNumber.textContent();
    if (text) {
      const match = text.match(/\d+/);
      const numberValue = match ? parseInt(match[0], 10) : null;
      return numberValue;
    } else {
      console.error("No Records Found!");
    }
  }

  async getSecurityGroupByRowIndex(index: number) {
      this.securityGroup = this.page.locator(this.ROW_IN_RECORDS_BY_INDEX_LOC).nth(index).locator(this.SECURITY_GROUP_BY_INDEX_LOC);
      return await this.modifyStringToMatchFile(await this.securityGroup.textContent());
  }

  private async modifyStringToMatchFile(originalString: string | null) {
      if (originalString)
          return originalString.replace(/"/g, "''");
      console.error("Cant Parse This String: ", originalString);
  }

  
}
