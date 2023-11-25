import { Locator, Page } from "@playwright/test";
import { BasePage } from "./Base";
import { Header } from "../components/Header";

export class HomePage extends BasePage {

    private readonly SEARCH_INPUT_LOC = "//input[@name='criteria']";
    private readonly SEARCH_BUTTON_LOC = "//input[@type='image']";
    private readonly CARDS_NAME_LOC = "//div[@class='name']";


    private searchInput: Locator;
    private searchBtn: Locator;
    private cardsName: Locator;

    header: Header;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator(this.SEARCH_INPUT_LOC);
        this.searchBtn = page.locator(this.SEARCH_BUTTON_LOC);
        this.header = new Header(page);
    }


    async searchForCard(input: string) {
        await this.searchInput.fill(input);
        await this.searchBtn.click();
    }

    async getCardNameAfterSearch() {
        this.cardsName = this.page.locator(this.CARDS_NAME_LOC).nth(0);
        return await this.cardsName.textContent();
    }

    // Header functions
    async clickHomeInHeader() {
        await this.header.clickHome();
    }

    async clickSignIn() {
        await this.header.clickSignIn();
    }

    async getUserName() {
        return await this.header.getUserName();
    }

}