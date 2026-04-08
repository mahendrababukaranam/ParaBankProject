import { test, expect } from '@playwright/test';

test.describe('Open New Account Suite', () => {
  test('Validate Open New Account Form Fields', async ({ page }) => {
    // Navigate to https://parabank.parasoft.com/parabank/index.htm
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');

    // Enter 'john_doe' in the username field
    await page.locator('input[name="username"]').fill('john_doe');

    // Enter 'password123' in the password field
    await page.locator('input[name="password"]').fill('password123');

    // Click the 'Log In' button
    await page.locator('input[value="Log In"]').click();
    await expect(page).toHaveURL(/.*overview\.htm$/);

    // Click the 'Open New Account' link
    await page.locator('a[href="openaccount.htm"]').click();

    // Verify the account type dropdown is present
    await expect(page.locator('#type')).toBeVisible();
    await expect(page.locator('#type')).toBeEnabled();

    // Verify the 'from account' dropdown is present
    await expect(page.locator('#fromAccountId')).toBeVisible();
    await expect(page.locator('#fromAccountId')).toBeEnabled();

    // Verify the 'Open New Account' button is present
    await expect(page.locator('input[value="Open New Account"]')).toBeVisible();
    await expect(page.locator('input[value="Open New Account"]')).toBeEnabled();
  });
});