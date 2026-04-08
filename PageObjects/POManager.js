import {HomePage} from './HomePage'
import {RegistrationPage} from './RegistrationPage'
import { LoginPage } from './LoginPage'
import { OpenAccountPage } from './OpenAccountPage'


export class POManager
{
    constructor(page)
    {
        this.page = page
        this.homePage = new HomePage(this.page)
        this.registerPage = new RegistrationPage(this.page)
        this.loginPage = new LoginPage(this.page)
        this.openAccountPage = new OpenAccountPage(this.page)
    }

    getHomepage()
    {
        return this.homePage
    }

    getRegistrationPage()
    {
        return this.registerPage
    }

    getLoginPage()
    {
        return this.loginPage
    }

    getOpenAccountPage()
    {
        return this.openAccountPage
    }

}
