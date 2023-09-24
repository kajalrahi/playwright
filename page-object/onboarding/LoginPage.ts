import { Locator, Page } from "@playwright/test";

const { expect } = require('@playwright/test');

class LoginPage {
    page: Page
    textEmailId: Locator
    textPassword: Locator
    loginButton: Locator

    constructor(page){
        this.page = page;
        this.textEmailId = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.textPassword = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    async loginOnAutomationExercise(emailId: string, password: string) {
        await this.textEmailId.fill(emailId)
        await this.textPassword.fill(password)
        await this.loginButton.click()
    }
}

export default LoginPage