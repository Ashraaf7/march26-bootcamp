import { test } from '@playwright/test';

test('frame test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Sign in').click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/frames-windows/frames.html');
    await page.frameLocator().getByPlaceholder('Enter email').fill('test@example.com');
});


test('nested frame test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Sign in').click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/frames-windows/frames.html');
    await page.frameLocator().getByPlaceholder('Inner input').fill('test@example.com');
});