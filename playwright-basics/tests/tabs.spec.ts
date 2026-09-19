import { test, expect } from '@playwright/test';

test('tabs test', async ({ context, page }) => {
    const aaPage = page;
    await aaPage.goto('https://aa-practice-test-automation.vercel.app/index.html');
    const linkedInPage = context.waitForEvent('page');
    await aaPage.getByRole('link', { name: 'Ahmed Ashraf' }).click();

    await aaPage.getByPlaceholder('enter your username').fill('admin')


    console.log(`AA page Title: ${await aaPage.title()}`);
    console.log(`LinkedIn page title: ${await (await linkedInPage).title()}`);
});