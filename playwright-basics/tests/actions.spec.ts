import { test } from '@playwright/test'


test('fill TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
});

test('click TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByLabel('Sign in').click();
});

test('check & uncheck TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Remember me ').click();
    await page.getByLabel('Sign in').click();
    await page.goto('https://aa-practice-test-automation.vercel.app/Pages/basic-actions/checkbox_Radio.html')
    await page.getByRole('checkbox', { name: 'Al-Ahly' }).check()
    await page.getByRole('radio', { name: 'High School' }).check()
    await page.getByRole('checkbox', { name: 'Al-Ahly' }).uncheck()
});

test('hover TC', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    await page.getByAltText('User Avatar').nth(1).hover()
});


test('focus & blur TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').blur()
    await page.getByPlaceholder('enter your password').focus()
});


test('press TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('ahmed')
    await page.getByPlaceholder('enter your username').press('Control+a')
    await page.getByPlaceholder('enter your username').press('Backspace')
});

test('clear TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('ahmed')
    await page.getByPlaceholder('enter your username').clear()
});


test('press sequentially TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').pressSequentially('ahmed', { delay: 500 })
});