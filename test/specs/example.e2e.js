import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('/')
        expect(await LoginPage.enterPWDLink).toHaveTextContaining('Enter using password')
        await LoginPage.enterPWDLink.click()
        await LoginPage.inputPassword.setValue('port80')
        await LoginPage.enterBtn.click()
        await LoginPage.acceptCookieBtn.click()
    })
})


