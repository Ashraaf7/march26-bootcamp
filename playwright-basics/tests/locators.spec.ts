import { test } from '@playwright/test'


test('byRole TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByRole('', { name: 'user' }).fill('admin');
    await page.getByRole('textbox', { name: 'password' }).fill('admin');
    await page.getByRole('button').click();
    const pageHeader = await page.getByRole('heading', { name: 'Practice Modules' }).innerText();
    console.log(pageHeader);
});


test('byLabel TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByLabel('user').fill('admin')
    await page.getByLabel('Password').fill('admin')
    await page.getByLabel('Remember me ').click();
    await page.getByLabel('Sign in').click();
});


test('byPlaceholder TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByPlaceholder('enter your username').fill('admin')
    await page.getByPlaceholder('enter your password').fill('admin')
    await page.getByLabel('Remember me ').click();
    await page.getByLabel('Sign in').click();
});

test('byText TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    const text = await page.getByText('Sign in to Practice').innerText();
    console.log(text);
});


test('byAltText TC', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByAltText('GitHub').click();
});

test('byTitle TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByTitle('za3bola').click();
});

test('byTestID TC', async ({ page }) => {
    await page.goto('https://aa-practice-test-automation.vercel.app/index.html');
    await page.getByTestId('username-input').fill('admin')
    await page.getByTestId('password-input').fill('admin')
    await page.getByTestId('login-button').click();
});