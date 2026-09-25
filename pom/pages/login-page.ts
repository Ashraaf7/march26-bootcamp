import { type Page, expect, type Locator } from '@playwright/test';
export class LoginPage {

    //Locators 
    private readonly USERNAME: Locator;
    private readonly PASSWORD: Locator;
    private readonly REMEMBER_ME: Locator;
    private readonly LOGIN_BUTTON: Locator;
    private readonly ERROR_MESSAGE: Locator;


    //Variables
    private readonly url: string = 'https://aa-practice-test-automation.vercel.app/index.html';
    private readonly errorMessageText: string = 'Invalid credentials. Use admin/admin';
    private readonly page: Page;


    //Constructor
    constructor(page: Page) {
        this.page = page;
        this.USERNAME = page.getByPlaceholder('enter your username');
        this.PASSWORD = page.getByPlaceholder('enter your password');
        this.REMEMBER_ME = page.getByLabel('Remember Me');
        this.LOGIN_BUTTON = page.getByRole('button', { name: 'Sign in' });
        this.ERROR_MESSAGE = page.getByRole('alert');
    }
    //Actions
    async navigateToLoginPage() {
        await this.page.goto(this.url);
    }
    async login(username: string, password: string) {
        await this.USERNAME.fill(username);
        await this.PASSWORD.fill(password);
        await this.REMEMBER_ME.check();
        await this.LOGIN_BUTTON.click();
    }
    //Assertions
    async verifyThatTheUserIsLoggedIn() {
        await expect(this.page).toHaveURL(/.*\/main.html/);
    }

    async verifyThatAnErrorIsShownForInvalidLogin() {
        await expect(this.ERROR_MESSAGE).toHaveText(this.errorMessageText);
    }
}