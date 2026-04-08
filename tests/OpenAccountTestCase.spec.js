import { POManager } from "../PageObjects/POManager";
import { customtest as test, expect } from "../fixtures/testfixture";

function generateRandomUser() {
  const id = Math.floor(Math.random() * 1000000);
  return {
    username: `user${id}`,
    password: `Pass${id}!`,
    firstName: 'Random',
    lastName: 'User',
    address: '123 Main St',
    city: 'San Jose',
    state: 'California',
    zipcode: '95131',
    phone: '4085551234',
    ssn: '123456789'
  };
}

test('Open New Account with random user', async ({ page }) => {
  const poManager = new POManager(page);
  const homePage = poManager.getHomepage();
  const registrationPage = poManager.getRegistrationPage();
  const loginPage = poManager.getLoginPage();
  const openAccountPage = poManager.getOpenAccountPage();

  const user = generateRandomUser();

  await homePage.goTo();
  await homePage.clickOnSigninButton();

  await registrationPage.registerNewUser(
    user.firstName,
    user.lastName,
    user.address,
    user.city,
    user.state,
    user.zipcode,
    user.phone,
    user.ssn,
    user.username,
    user.password
  );
  await registrationPage.registerButtonClick();

  await homePage.goTo();
  await loginPage.loginToApplication(user.username, user.password);
  await expect(page).toHaveURL(/.*overview\.htm$/);

  await openAccountPage.goToOpenNewAccount();
  await openAccountPage.selectAccountType('SAVINGS');
  await openAccountPage.selectFromAccount(0);
  await openAccountPage.clickOpenNewAccount();
  await openAccountPage.validateResult();
});

test('Validate Open New Account fields', async ({ page }) => {
  const poManager = new POManager(page);
  const homePage = poManager.getHomepage();
  const loginPage = poManager.getLoginPage();
  const openAccountPage = poManager.getOpenAccountPage();
  await homePage.goTo();
  await homePage.clickOnSigninButton();
  await loginPage.loginToApplication('john_doe', 'password123');
  await expect(page).toHaveURL(/.*overview\.htm$/);     
  await openAccountPage.goToOpenNewAccount();
  await openAccountPage.validateFields(); 
  
});