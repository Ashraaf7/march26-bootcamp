import { test } from '@playwright/test'


test('shadowRoot TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Sign in').click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/form-controls/shadow-dom.html')
    await page.getByPlaceholder('This can be accessed from outside').fill('shadow root test');
});