import { Locator, Page } from "@playwright/test";
import { BasePage } from "../pages/Base";

export class Footer extends BasePage {
  private readonly CONTACT_US_LOC =
    "//div[@id='siteFooter']//a[contains(string(),'Contact Us')]";
  private readonly TERMS_OF_USE_LOC =
    "//div[@id='siteFooter']//a[contains(string(),'Terms of Use')]";
  private readonly PRIVACY_POLICY_LOC =
    "//div[@id='siteFooter']//a[contains(string(),'Privacy Policy')]";
  private readonly SUBMIT_SCANS_LOC =
    "//div[@id='siteFooter']//a[contains(string(),'Submit Scans')]";
  
  private contactUs: Locator;
  private termsOfUse: Locator;
  private policy: Locator;
  private submitScans: Locator;

  constructor(page: Page) {
    super(page);
    this.contactUs = page.locator(this.CONTACT_US_LOC);
    this.termsOfUse = page.locator(this.TERMS_OF_USE_LOC);
    this.policy = page.locator(this.PRIVACY_POLICY_LOC);
    this.submitScans = page.locator(this.SUBMIT_SCANS_LOC);
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

}
