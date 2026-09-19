import { test } from '@playwright/test';

test('dropdown test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Sign in').click();
    await page.getByRole('link', { name: 'Dropdown' }).click();
    await page.pause();
    await page.getByRole('combobox', { name: 'Years of Experience' }).selectOption({ label: '5-9 Years' });
    await page.getByRole('combobox', { name: 'Years of Experience' }).selectOption({ value: '10+' });
    await page.getByRole('combobox', { name: 'Years of Experience' }).selectOption({ index: 1 });
});


test('non-select dropdown test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Sign in').click();
    await page.getByRole('link', { name: 'Dropdown' }).click();
    await page.pause();
    await page.locator('#custom-dropdown-toggle').click();
    await page.getByText('⚡ JavaScript').click();
});
