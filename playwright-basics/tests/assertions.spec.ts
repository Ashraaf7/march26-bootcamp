import { test, expect } from '@playwright/test';
import { time } from 'node:console';


test('auto-retry assertions test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Remember me ').click();
    await page.getByLabel('Sign in').click();
    const heading = page.getByRole('heading', { name: 'Practice Modules' });
    const logoutButton = page.getByRole('button', { name: 'Logout' });
    await expect(heading).toHaveText('Practice Modules', { timeout: 10000 });
    await expect(logoutButton).toBeVisible({ timeout: 10000 });
});

test('non-retry assertions test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Remember me ').click();
    await page.getByLabel('Sign in').click();
    const heading = page.getByRole('heading', { name: 'Practice Modules' });
    const text = await heading.innerText();
    expect(text).toBe('Practice Modules');
});

test('non-retry flaky assertions test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Remember me ').click();
    await page.getByLabel('Sign in').click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html')
    const locator = page.getByRole('button', { name: 'Download CV' }).first();
    await locator.click();
    // await expect(locator).toHaveAttribute('value', 'Downloaded!', { timeout: 10000 });
    const text = await locator.getAttribute('value');
    expect(text).toBe('Downloaded!');
});

test('non-retry non-flaky assertions test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Remember me ').click();
    await page.getByLabel('Sign in').click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/tables/tables.html')
    const locator = page.locator('[data-testid="download-cv-btn-1"]');
    await locator.click();

    await expect.poll(async () => {
        const text = await locator.getAttribute('value');
        return text;
    }, { timeout: 10000 }).toBe('Downloaded!');
});




test('hard assertions test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Remember me ').click();
    await page.getByLabel('Sign in').click();
    const heading = page.getByRole('heading', { name: 'Practice Modules' });
    const logoutButton = page.getByRole('button', { name: 'Logout' });
    await expect(heading).toHaveText('Ahmed', { timeout: 10000 });
    await expect(logoutButton).toBeVisible({ timeout: 10000 });
});

test('soft assertions test', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Remember me ').click();
    await page.getByLabel('Sign in').click();
    const heading = page.getByRole('heading', { name: 'Practice Modules' });
    const logoutButton = page.getByRole('button', { name: 'Logout' });
    await expect.soft(heading).toHaveText('Ahmed', { timeout: 10000 });
    await expect.soft(logoutButton).toBeHidden({ timeout: 10000 });
});