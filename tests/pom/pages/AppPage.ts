import { Page } from "playwright";
import { BasePage } from "./BasePage";
import { SideMenu } from "../components/SideMenu";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export class AppPageBase extends BasePage {
  public sideMenu: SideMenu;
  public footer: Footer
  public header: Header
  constructor(page: Page) {
    super(page);
    this.sideMenu = new SideMenu(page);
    this.footer = new Footer(page)
    this.header = new Header(page)
  }
}
