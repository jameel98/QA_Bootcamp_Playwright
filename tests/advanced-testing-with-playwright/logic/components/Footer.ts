import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/Base";

export class Footer extends BasePage {
  private readonly CONTACT_US_LOC =
    "//div[@class='navigation']//a[contains(string(),'Home')]";
  private readonly TERMS_OF_USE_LOC =
    "//div[@class='userinfo']//a[contains(string(),'sign in')]";
  private readonly PRIVACY_POLICY_LOC =
    "//div[@class='userinfo']//[@class='username']";
    private readonly SUBMIT_SCANS_LOC =
    "//div[@class='userinfo']//[@class='username']";
    private readonly MANAGE_COOKIE_SETTINGS_LOC =
    "//div[@class='userinfo']//[@class='username']";

  private contactUs: Locator;
  private termsOfUse: Locator;
  private policy: Locator;
  private submitScans: Locator;
  private manageCookie: Locator;

  constructor(page: Page) {
    super(page);
    this.contactUs = page.locator(this.CONTACT_US_LOC);
    this.termsOfUse = page.locator(this.TERMS_OF_USE_LOC)
    this.policy =page.locator(this.PRIVACY_POLICY_LOC)
    this.submitScans = page.locator(this.SUBMIT_SCANS_LOC)
    this.manageCookie = page.locator(this.MANAGE_COOKIE_SETTINGS_LOC)
  }

  async clickContactUs() {
    await this.contactUs.click();
  }

  async clickTerms() {
    await this.termsOfUse.click();
  }
  async clickPolicy() {
    await this.policy.click();
  }

  async clickSubmitScans() {
    await this.submitScans.click();
  }
  async clickManageCookie() {
    await this.manageCookie.click();
  }

 
}
