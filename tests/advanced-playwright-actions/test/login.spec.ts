import { test, expect, Page, chromium, BrowserContext } from '@playwright/test';
import { HomePage } from '../logic/pages/homePage';
import { setClearLoginRequest, setLoginData } from '../logic/api/request/login-request';
import { LoginApi } from '../logic/api/login-api';

const BASE_URL = 'https://www.rami-levy.co.il';
const EMAIL = "jameelmograbi@gmail.com";
const PASSWORD = "admin123"
const USERNAME = "jameel"

test.describe('State Stock Table Validation Suite', () => {

    let context: BrowserContext;
    let page: Page;

    test.beforeAll(async () => {
        context = await chromium.launchPersistentContext("userData");
        page = await context.newPage();
    });

    test.beforeEach(async () => {
        await page.goto(BASE_URL);
        await page.setViewportSize({ width: 1920, height: 1080 });

    });

    test.afterEach(async ({ request }) => {
        const requestDate = setClearLoginRequest();
        const loginApi = new LoginApi();
        await loginApi.login(requestDate)
    })

    test.afterAll(async () => {
        await context.close();
    });

    test('Login via api -> Validate login successfully', async ({ request }) => {

        const loginData = setLoginData();
        const loginApi = new LoginApi();
        const response = await loginApi.login(loginData)

        const bodyRes = await response.json();

        await page.reload();

        const homePage = new HomePage(page);
        const username = await homePage.getUserName();

        console.log("UserName: " + username);
        expect.soft(bodyRes.username).toBe(username);

    });


    // test('Login', async () => {
    //     const homePage = new HomePage(page);
    //     await homePage.pressLogin();

    //     const loginPopUp = await homePage.getLogInPopUp();
    //     await loginPopUp.fullProccessLogin(EMAIL, PASSWORD);

    //     await page.waitForTimeout(5000);
    // });




});