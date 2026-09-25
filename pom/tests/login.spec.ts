import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import loginData from '../test-data/login-data.json';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
});

test('user can log in successfully', async ({ page }) => {
    await loginPage.login(loginData.valid.username, loginData.valid.password);
    await loginPage.verifyThatTheUserIsLoggedIn();
});

test('an error is shown for invalid username', async ({ page }) => {
    await loginPage.login(loginData.invalidUsername.username, loginData.invalidUsername.password);
    await loginPage.verifyThatAnErrorIsShownForInvalidLogin();
});

test('an error is shown for invalid password', async ({ page }) => {
    await loginPage.login(loginData.invalidPassword.username, loginData.invalidPassword.password);
    await loginPage.verifyThatAnErrorIsShownForInvalidLogin();
});

test.afterEach(async ({ page }) => {
    // Add any cleanup steps if necessary
    console.log('Cleaning up after test');
});