import { Page } from "playwright";
import { AppPageBase } from "./AppPage";

export class DashboardPage extends AppPageBase {
  constructor(page: Page) {
    super(page);
  }

}
