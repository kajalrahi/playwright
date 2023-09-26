import {test, expect} from '@playwright/test'
import LoginPage from '../../page-object/onboarding/LoginPage'
import HomePage from '../../page-object/home/HomePage'

const testData = JSON.parse(JSON.stringify(require('../../test-data/test-data.json')))

test.only('Login on automation exercise with invalid credential',async({page}) => {
    let loginPage = new LoginPage(page)
    let homePage = new HomePage(page)

    // Step1: Enter the Automation exercise URL on browser
    await homePage.goToAutomationExerciseURL()

    // Step2: Verify signup/Login link is visible
    await homePage.verifySignupOrLoginLinkIsVisible()
    
    // Step3: Click on signup/Login button
    await homePage.clickSignupOrLoginLink()

    //Step4: Login on automation exericse
    await loginPage.loginOnAutomationExercise(testData.emailId, testData.password)

     //Step4: Login on automation exericse
     await loginPage.verifyErrorMessageOnInvalidLogin()
})