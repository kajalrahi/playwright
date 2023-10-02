import {test, expect} from '@playwright/test'
import LoginPage from '../../page-object/onboarding/LoginPage'
import HomePage from '../../page-object/home/HomePage'

const testData = JSON.parse(JSON.stringify(require('../../test-data/test-data.json')))

test('Login on automation exercise with invalid credential',async({page}) => {
    let homePage = new HomePage(page)
    let loginPage = new LoginPage(page)

    // Step1: Enter the Automation exercise URL on browser
    // await homePage.goToAutomationExerciseURL()
     await homePage.goToAutomationExerciseURL(testData.url)

    // Step2: Verify signup/Login link is visible
    await homePage.verifySignupOrLoginLinkIsVisible()
    
    // Step3: Click on signup/Login button
    await homePage.clickSignupOrLoginLink()

    //Step4: Login on automation exericse
    await loginPage.loginOnAutomationExercise(testData.emailId, testData.password)
    //await page.pause()

     //Step5: Verify login error message is shown
     await loginPage.verifyErrorMessageOnInvalidLogin()
})