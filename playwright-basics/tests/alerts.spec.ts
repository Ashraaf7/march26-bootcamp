import { test } from '@playwright/test';


test('alert test', async ({ page }) => {
    //Listen for the alert dialog and accept it
    page.on('dialog', async dialog => {
        console.log('Dialog is appearing');
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept('Test');
    });
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Sign in').click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/dialogs/alerts.html');
    await page.getByRole('button', { name: 'Prompt' }).click();
});


test('auth alert test', async ({ page }) => {
    // await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth')// Method 1
    await page.goto('https://the-internet.herokuapp.com/basic_auth')// Method 1
});


