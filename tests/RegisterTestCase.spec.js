//import {test,expect} from '@playwright/test'
//import { HomePage } from '../PageObjects/HomePage'
//import { RegistrationPage } from '../PageObjects/RegistrationPage'
import { POManager } from '../PageObjects/POManager'
//import testdata from '../Utils/ParaBank.json' assert {type:'json'}
import {customtest as test,expect} from '../fixtures/testfixture'

/*
test('Registration', async ({page})=>{

    //POManager
    const poManager = new POManager(page)
    const homePage = poManager.getHomepage()
    await homePage.goTo()
    await homePage.clickOnSigninButton()

    const registerPage = poManager.getRegistrationPage()

    // const homepage = new HomePage(page)
    // await homepage.goTo()
    // await homepage.clickOnSigninButton()

    // const registerPage = new RegistartionPage(page)
    await registerPage.registerNewUser
    (
        'Mahendra',
        'K',
        'Kukkatpally',
        'Hyderabad',
        'Telangana',
        '500045',
        '7565675654',
        '12345',
        'Mahendra',
        'Mahendra123',
        'Mahendra123'
    )

    await registerPage.registerButtonClick()
   
await page.waitForTimeout(3000)    
})
*/


//DataDriven Testing using JSON
/*for(const data of testdata)
{
    test(`Registration ${data.username}`, async ({page})=>{

        //POManager
        const poManager = new POManager(page)
        const homePage = poManager.getHomepage()
        await homePage.goTo()
        await homePage.clickOnSigninButton()

        const registerPage = poManager.getRegistrationPage()

        // const homepage = new HomePage(page)
        // await homepage.goTo()
        // await homepage.clickOnSigninButton()

        // const registerPage = new RegistartionPage(page)
        await registerPage.registerNewUser
        (
            data.firstname,
            data.lastname,
            data.address,
            data.city,
            data.state,
            data.zipcode,
            data.phonenumber,
            data.ssn,
            data.username,
            data.password,
            data.confirmpassword
        )

        await registerPage.registerButtonClick()
        await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

    await page.waitForTimeout(3000)    
    })    
}*/

test.describe.serial('Parallel Testing', ()=>{

    //DataDriven Testing using Fixture File
    test('@smokeRegister User', async ({page,testdataForregistration})=>{

        //POManager
        const poManager = new POManager(page)
        const homePage = poManager.getHomepage()
        await homePage.goTo()
        await homePage.clickOnSigninButton()
        const registerPage = poManager.getRegistrationPage()

        // const homepage = new HomePage(page)
        // await homepage.goTo()
        // await homepage.clickOnSigninButton()

        // const registerPage = new RegistartionPage(page)

        //Validation of Fields
        await registerPage.ValidateFields()

        await registerPage.registerNewUser
        (
            testdataForregistration.firstname,
            testdataForregistration.lastname,
            testdataForregistration.address,
            testdataForregistration.city,
            testdataForregistration.state,
            testdataForregistration.zipcode,
            testdataForregistration.phonenumber,
            testdataForregistration.ssn,
            testdataForregistration.username,
            testdataForregistration.password,
            testdataForregistration.confirmpassword
        )

        await registerPage.registerButtonClick()
        await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm')

    await page.waitForTimeout(3000)
    })

    test('@smoke@regressionLogin Page', async({page,testdataForregistration})=>{

        //POManager
        const poManager = new POManager(page)
        const homePage = poManager.getHomepage()

        //Application Launch
        await homePage.goTo() 

        const loginPage = poManager.getLoginPage()

        //Enter Username, Passowrd and Click on Login
        await loginPage.loginToApplication
        (
            testdataForregistration.username,
            testdataForregistration.password
        )


    await page.waitForTimeout(3000)
    })
})
