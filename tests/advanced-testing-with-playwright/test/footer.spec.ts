import { test, expect, Browser, chromium } from '@playwright/test';
          import { Footer } from '../logic/components/Footer';

const BASE_URL = 'https://www.pokellector.com/';

test.describe('Footer component Validations Suite', () => {

    let browser: Browser;

    test.beforeAll(async () => {
        browser = await chromium.launch();
    });
    test.beforeEach(async ({ page }) => {
        await page.goto(BASE_URL);
    });
    test.afterEach(async ({ page }) => {
        await page.close();
    });
    test.afterAll(async () => {
        await browser.close();
    });

    test(`Go to Main Page -> Click at Contact Us -> Validate the page navigation `, async ({ page }) => {
        const expectedUrl = "https://www.pokellector.com/contact";

        const footer = new Footer(page);
        await footer.clickContactUs()
        await footer.waitForLoad();

        let currentUrl = await footer.getCurrentUrl();
        expect(currentUrl).toBe(expectedUrl);
    });

    test(`Go to Main Page -> Click at tesrms of use -> Validate the page navigation `, async ({ page }) => {
        const expectedUrl = "https://www.pokellector.com/terms";

        const footer = new Footer(page);
        await footer.clickTerms()
        await footer.waitForLoad();

        let currentUrl = await footer.getCurrentUrl();
        expect(currentUrl).toBe(expectedUrl);
    });

    test(`Go to Main Page -> Click at privacy policy -> Validate the page navigation `, async ({ page }) => {
        const expectedUrl = "https://www.pokellector.com/privacy";

        const footer = new Footer(page);
        await footer.clickPolicy()
        await footer.waitForLoad();

        let currentUrl = await footer.getCurrentUrl();
        expect(currentUrl).toBe(expectedUrl);
    });
  
    test(`@bug because not logged in Go to Main Page -> Click at submit scans -> Validate the page navigation `, async ({ page }) => {
        const expectedUrl = "https://www.pokellector.com/submit";

        const footer = new Footer(page);
        await footer.clickSubmitScans()
        await footer.waitForLoad();

        let currentUrl = await footer.getCurrentUrl();
        expect(currentUrl).toBe(expectedUrl);
    });
});