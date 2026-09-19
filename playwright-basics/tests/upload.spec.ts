import { test, expect } from '@playwright/test';
import path from 'node:path';

test('file upload test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Sign in').click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/file-operations/uploadFile.html');
    await page.locator('#regularFileInput').setInputFiles(path.resolve(__dirname, '../.gitignore'))
    await page.locator('#regularFileInput').setInputFiles([])
});