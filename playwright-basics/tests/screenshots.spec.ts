import { test, expect } from '@playwright/test';


test('screenshot test', async ({ page }) => {
    await page.goto('https://www.google.com/')
    const screenshotsDir = './screenshots';
    await page.screenshot({ path: `${screenshotsDir}/screenshot.png` });
    await page.getByRole('img', { name: 'Google' }).screenshot({ path: `${screenshotsDir}/googleLogo.png` });
    await page.screenshot({ fullPage: true, path: `${screenshotsDir}/fullPageScreenshot.png` });
});