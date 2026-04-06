export class HomePage
{
    constructor(page)
    {
        this.page = page
        this.signInbutton = page.getByText('Register')
    }

    async goTo()
    {
        await this.page.goto('/')
    }

    async clickOnSigninButton()
    {
        await this.signInbutton.click()
    }
}