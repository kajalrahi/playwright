import { Locator, Page } from "@playwright/test";

const { expect } = require('@playwright/test')
const testData = JSON.parse(JSON.stringify(require('../../test-data/test-data.json')))

class Homepage {
    page: Page
    linkSignupLogin: Locator

    constructor(page) {
        this.page = page
        this.linkSignupLogin = page.getByRole('link', { name: ' Signup / Login' })
    }

    async verifySignupOrLoginLinkIsVisible() {
        await expect(this.linkSignupLogin).toBeVisible()
    }

    async goToAutomationExerciseURL() {
        this.page.goto(testData.url)
    }

    async clickSignupOrLoginLink() {
        this.linkSignupLogin.click()
    }
}
export default Homepage
