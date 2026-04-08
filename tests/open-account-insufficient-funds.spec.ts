import { test, expect } from '@playwright/test';

test.describe('Open New Account Suite', () => {
  test('Attempt to Open Account with Insufficient Funds', async ({ page }) => {
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

    // Select 'SAVINGS' from the account type dropdown
    await page.locator('#type').selectOption(['SAVINGS']);

    // Select an account with insufficient balance (e.g., 12456 with $0 available) from the 'from account' dropdown
    await page.locator('#fromAccountId').selectOption({ index: 0 });

    // Click the 'Open New Account' button
    await page.locator('input[value="Open New Account"]').click();
    await expect(page.locator('#openAccountResult')).toContainText('insufficient funds');
  });
});