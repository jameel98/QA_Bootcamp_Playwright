import { Page } from "playwright";

export class BasePage {
  protected _page: Page;

  constructor(page: Page) {
    this._page = page;
  }

  reload = async () => {
    await this._page.reload();
  };
}
