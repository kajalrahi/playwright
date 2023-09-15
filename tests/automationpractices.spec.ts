import { test, expect } from '@playwright/test';

test(' check that user can navigate to automationexercise.com and verify the logo is shown', async ({ page }) => {
    //Visit automation exercise
    await page.goto('https://automationexercise.com/')

    //Verify title    
    await  expect (page).toHaveTitle('Automation Exercise')

    //Logo should be displayed
    //const logoVisible = await page.getByAltText('Website for automation practice').isVisible()
    //expect(logoVisible).toBeTruthy
    await expect(page.getByAltText('Website for automation practice')).toBeVisible()
})



test('Check that home button is working', async({page})=> {
    

    // Step1: Enter the Automation exercise URL on browser
    await page.goto('https://automationexercise.com/')

    // Step2:  Verify Home link is visible
    await expect (page.getByRole('link', { name: ' Home' })).toBeVisible()

    // Step3: Click on Home button
    await page.getByRole('link', { name: ' Home' }).click()

    // Step4: Verify user remains on Home page only and the url is same
    await expect(page).toHaveURL('https://automationexercise.com/')

    
})


    

test('Check that the Product button works and user navigates on product page', async({page})=> {

    // Step1: Enter the Automation exercise URL on browser
    await page.goto('https://automationexercise.com/')

    // Step2:  Verify product link is visible
    await expect (page.getByRole('link', { name: 'Products' })).toBeVisible()

    // Step3: Click on product button
    await page.getByRole('link', { name: 'Products' }).click()
    //await page.pause()
    
    // Step4: Close the popup 
    await page.frameLocator('iframe[name="aswift_6"]').frameLocator('iframe[name="ad_iframe"]').getByLabel('Close ad').click();
 // await page.waitForTimeout(5000)

    // Step5: Verify  url: 
    await expect (page).toHaveURL('https://automationexercise.com/products')
    
})

test('check that the cart button works and the user navigates on cart page',async({page})=> {

    // Step1: Enter the Automation exercise URL on browser
    await page.goto('https://automationexercise.com/')

    // Step2:  Verify Cart link is visible
    await expect (page.getByRole('link', { name: 'Cart' })).toBeVisible()

    // Step3: Click on Cart button
    await page.getByRole('link', { name: 'Cart' }).click()

    // Step4: Verify user navigates to cart page
     await expect(page).toHaveURL('https://automationexercise.com/view_cart')
     
     //  Verify Cart is empty text 
     await expect (page.getByText('Cart is empty!')).toBeVisible()


})

test('login',async({page})=> {

    // Step1: Enter the Automation exercise URL on browser
    await page.goto('https://automationexercise.com/')

    // Step2:  Verify Signup/Login link is visible
    await expect (page.getByRole('link', { name: ' Signup / Login' })).toBeVisible()

    // Step3: Click on signup/Login button
    await page.getByRole('link', { name: ' Signup / Login' }).click()

    //await page.pause()

    // Enter emailid 
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('kajaldev20@gmail.com')
    
    // password
    await page.getByPlaceholder('Password').fill('1234')
    
    // click on login
    await page.getByRole('button', { name: 'Login' }).click()  
})

test('Signup',async({page})=> {

    // Step1: Enter the Automation exercise URL on browser
    await page.goto('https://automationexercise.com/')

    // Step2:  Verify Signup/Login link is visible
    await expect (page.getByRole('link', { name: ' Signup / Login' })).toBeVisible()

    // Step3: Click on signup/Login button
    await page.getByRole('link', { name: ' Signup / Login' }).click()

    //step4: Enter name
    await page.getByPlaceholder('Name').fill('kajal kumari')

    // step5: Enter Email
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('kajaldev20@gmail.com')

    //Step5: Click on signup button
    await page.getByRole('button',{name: 'Signup'}).click()

    //Verify user is navigated to signup page
    await expect (page).toHaveURL('https://automationexercise.com/signup')

    await page.pause()
})







