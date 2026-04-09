import {test,expect} from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');    
});