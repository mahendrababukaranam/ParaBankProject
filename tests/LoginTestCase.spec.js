import { POManager } from "../PageObjects/POManager";

import { customtest as test,expect } from "../fixtures/testfixture";

test('Login Page', async({page,testdataForregistration})=>{

    //POManager
    const poManager = new POManager(page)
    const homePage = poManager.getHomepage()

    //Application Launch
    await homePage.goTo() 

    const loginPage = poManager.getLoginPage()

    await loginPage.validateFields

    //Enter Username, Passowrd and Click on Login
    await loginPage.loginToApplication
    (
        await testdataForregistration.username,
        await testdataForregistration.password
    )

    await expect(page).toHaveURL("https://parabank.parasoft.com/parabank/overview.htm")


await page.waitForTimeout(3000)
})