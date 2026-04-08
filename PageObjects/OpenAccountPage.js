import { expect } from "@playwright/test";

const OPEN_NEW_ACCOUNT_TEXT = "Open New Account";
const OPEN_ACCOUNT_BUTTON_VALUE = "Open New Account";
const ACCOUNT_OPENED_TEXT = "Account Opened!";
const OPENACCOUNT_URL_PATTERN = /.*openaccount\.htm$/;
const DEFAULT_ACCOUNT_TYPE = 'SAVINGS';

export class OpenAccountPage {
    constructor(page) {
        this.page = page;
        this.openNewAccountLink = page.locator(`a:has-text("${OPEN_NEW_ACCOUNT_TEXT}")`);
        this.accountTypeSelect = page.locator('#type');
        this.fromAccountSelect = page.locator('#fromAccountId');
        this.openAccountButton = page.locator(`input[value="${OPEN_ACCOUNT_BUTTON_VALUE}"]`);
        this.openAccountResult = page.locator('#openAccountResult');
    }

    async goToOpenNewAccount() {
        await this.openNewAccountLink.click();
        await expect(this.page).toHaveURL(OPENACCOUNT_URL_PATTERN);
    }

    async selectAccountType(type = DEFAULT_ACCOUNT_TYPE) {
        await this.accountTypeSelect.selectOption({ label: type });
    }

    async selectFromAccount(index = 0) {
        await this.fromAccountSelect.selectOption({ index });
    }

    async clickOpenNewAccount() {
        await this.openAccountButton.click();
    }

    async validateResult() {
        await expect(this.openAccountResult).toBeVisible();
        await expect(this.openAccountResult).toContainText(ACCOUNT_OPENED_TEXT);
    }

    async validateFields() {
        const fields = [
            this.accountTypeSelect,
            this.fromAccountSelect,
            this.openAccountButton
        ];

        for (const field of fields) {
            await expect(field).toBeVisible();
            await expect(field).toBeEnabled();
        }
    }

    async validateAccountTypeSelectIsVisible() {
        await expect(this.accountTypeSelect).toBeVisible();
    }

    async validateFromAccountSelectIsVisible() {
        await expect(this.fromAccountSelect).toBeVisible();
    }

    async validateOpenAccountButtonIsVisible() {
        await expect(this.openAccountButton).toBeVisible();
    }

    async validateOpenNewAccountLink() {
        await expect(this.openNewAccountLink).toBeVisible();
        await expect(this.openNewAccountLink).toBeEnabled();
    }

    async validateAccountTypeSelect() {
        await expect(this.accountTypeSelect).toBeVisible();
        await expect(this.accountTypeSelect).toBeEnabled();
    }

    async validateFromAccountSelect() {
        await expect(this.fromAccountSelect).toBeVisible();
        await expect(this.fromAccountSelect).toBeEnabled();
    }

    async validateOpenAccountButton() {
        await expect(this.openAccountButton).toBeVisible();
        await expect(this.openAccountButton).toBeEnabled();
    }

    async validateOpenAccountResult() {
        await expect(this.openAccountResult).toBeVisible();
    }

    async validateAllElements() {
        await this.validateOpenNewAccountLink();
        const validations = [
            () => this.validateOpenNewAccountLink(),
            () => this.validateAccountTypeSelect(),
            () => this.validateFromAccountSelect(),
            () => this.validateOpenAccountButton(),
            () => this.validateOpenAccountResult()
        ];

        for (const validate of validations) {
            await validate();
        }
    }
}