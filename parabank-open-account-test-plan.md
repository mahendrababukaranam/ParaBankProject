# ParaBank Open Account Test Plan

## Application Overview

ParaBank is a demo online banking application provided by Parasoft. It simulates banking operations including account management, fund transfers, and bill payments. The Open New Account feature allows authenticated users to create new checking or savings accounts by transferring a minimum of $100 from an existing account.

## Test Scenarios

### 1. Open New Account Suite

**Seed:** ``

#### 1.1. Open New Savings Account

**File:** `tests/open-new-savings-account.spec.ts`

**Steps:**
  1. Navigate to https://parabank.parasoft.com/parabank/index.htm
    - expect: User is on the ParaBank homepage
  2. Enter 'john_doe' in the username field
    - expect: Username field is visible
  3. Enter 'password123' in the password field
    - expect: Password field is visible
  4. Click the 'Log In' button
    - expect: User is redirected to the accounts overview page
  5. Click the 'Open New Account' link
    - expect: Open New Account link is visible
  6. Select 'SAVINGS' from the account type dropdown
    - expect: Account type dropdown is visible with CHECKING selected by default
  7. Select an account with sufficient balance (e.g., 12567) from the 'from account' dropdown
    - expect: From account dropdown is visible with an account selected by default
  8. Click the 'Open New Account' button
    - expect: 'Account Opened!' message is displayed with a new account number

#### 1.2. Open New Checking Account

**File:** `tests/open-new-checking-account.spec.ts`

**Steps:**
  1. Navigate to https://parabank.parasoft.com/parabank/index.htm
    - expect: User is on the ParaBank homepage
  2. Enter 'john_doe' in the username field
    - expect: Username field is visible
  3. Enter 'password123' in the password field
    - expect: Password field is visible
  4. Click the 'Log In' button
    - expect: User is redirected to the accounts overview page
  5. Click the 'Open New Account' link
    - expect: Open New Account link is visible
  6. Ensure 'CHECKING' is selected in the account type dropdown
    - expect: Account type dropdown is visible with CHECKING selected by default
  7. Select an account with sufficient balance from the 'from account' dropdown
    - expect: From account dropdown is visible with an account selected by default
  8. Click the 'Open New Account' button
    - expect: 'Account Opened!' message is displayed with a new account number

#### 1.3. Validate Open New Account Form Fields

**File:** `tests/validate-open-account-fields.spec.ts`

**Steps:**
  1. Navigate to https://parabank.parasoft.com/parabank/index.htm
    - expect: User is on the ParaBank homepage
  2. Enter 'john_doe' in the username field
    - expect: Username field is visible
  3. Enter 'password123' in the password field
    - expect: Password field is visible
  4. Click the 'Log In' button
    - expect: User is redirected to the accounts overview page
  5. Click the 'Open New Account' link
    - expect: Open New Account link is visible
  6. Verify the account type dropdown is present
    - expect: Account type dropdown is visible and enabled
  7. Verify the 'from account' dropdown is present
    - expect: From account dropdown is visible and enabled
  8. Verify the 'Open New Account' button is present
    - expect: Open New Account button is visible and enabled

#### 1.4. Attempt to Open Account with Insufficient Funds

**File:** `tests/open-account-insufficient-funds.spec.ts`

**Steps:**
  1. Navigate to https://parabank.parasoft.com/parabank/index.htm
    - expect: User is on the ParaBank homepage
  2. Enter 'john_doe' in the username field
    - expect: Username field is visible
  3. Enter 'password123' in the password field
    - expect: Password field is visible
  4. Click the 'Log In' button
    - expect: User is redirected to the accounts overview page
  5. Click the 'Open New Account' link
    - expect: Open New Account link is visible
  6. Select 'SAVINGS' from the account type dropdown
    - expect: Account type dropdown is visible
  7. Select an account with insufficient balance (e.g., 12456 with $0 available) from the 'from account' dropdown
    - expect: From account dropdown is visible
  8. Click the 'Open New Account' button
    - expect: An error message is displayed indicating insufficient funds
