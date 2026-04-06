const { test, expect } = require('@playwright/test');
const XLSX = require('xlsx');

const workbook = XLSX.readFile('./testdata/parabank_login_data.xlsx');
const sheet = workbook.Sheets['LoginData'];
const data = XLSX.utils.sheet_to_json(sheet);

for (const row of data) {

test(`Login Test ${row.TestCaseID}`, async ({ page }) => {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // wait for username field
    await page.locator('input[name="username"]').waitFor();

    await page.fill('input[name="username"]', row.Username || "");
    await page.fill('input[name="password"]', row.Password || "");

    await page.click('input[value="Log In"]');

    await page.waitForTimeout(2000);

});
}