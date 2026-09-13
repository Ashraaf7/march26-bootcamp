import { test, chromium } from '@playwright/test';

test('go to TC', async ({ page }) => {
    // const browser = await chromium.launch();
    // const context = await browser.newContext();
    // const page = await context.newPage();
    await page.goto('https://www.google.com');
});


test('go back TC', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.goto('https://github.com/Ashraaf7/TAF');
    await page.goBack(); // Navigate back to the previous page (Google)
});

test('go forward TC', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.goto('https://github.com/Ashraaf7/TAF');
    await page.goBack(); // Navigate back to the previous page (Google)
    await page.goForward(); // Navigate forward to the next page (GitHub)
});

test('refresh TC', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.reload(); // Refresh the current page (Google)
});

test('title TC', async ({ page }) => {
    await page.goto('https://www.google.com');
    const title = await page.title();
    console.log(title);
});

test('url TC', async ({ page }) => {
    await page.goto('https://www.google.com');

    const url = page.url();
    console.log(url);
});