import { test, expect } from '@playwright/test';
import LoginPage from '../page-object/onboarding/LoginPage';
const testData = JSON.parse(JSON.stringify(require('../test-data/test-data.json')))

test('check that user can navigate to automationexercise.com and verify the logo is shown', async ({ page }) => {
    //Visit automation exercise
    await page.goto(testData.url)

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
    await page.pause()

    
})

test.skip('Check that the Product button works and user navigates on product page', async({page})=> {

    // Step1: Enter the Automation exercise URL on browser
    await page.goto('https://automationexercise.com/')

    // Step2:  Verify product link is visible
    await expect (page.getByRole('link', { name: 'Products' })).toBeVisible()

    // Step3: Click on product button
    await page.getByRole('link', { name: 'Products' }).click()
     
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

test.skip('Signup',async({page})=> {

     //await page.waitForTimeout(50000);
    //await page.pause()

    // Step1: Enter the Automation exercise URL on browser
    await page.goto('https://automationexercise.com/')

    // Step2:  Verify Signup/Login link is visible
    await expect (page.getByRole('link', { name: ' Signup / Login' })).toBeVisible()

    // Step3: Click on signup/Login button
    await page.getByRole('link', { name: ' Signup / Login' }).click()

    //step4: Enter name
    await page.getByPlaceholder('Name').fill('kajal kumari')

    // step5: Enter Email
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('kajraj16@gmail.com')

    //Step5: Click on signup button
    await page.getByRole('button',{name: 'Signup'}).click()

    //Verify user is navigated to signup page
    await expect (page).toHaveURL('https://automationexercise.com/signup')

    //Enter Account information text should be visible
     await page.getByText('Enter Account Information').isVisible()

    // Title text should be visible
    await page.getByText('Title').isVisible()
    
    // Mr.text button should be visible
    await page.getByLabel('Mr.').isVisible()

    // Click Mrs.text button 
    await page.getByLabel('Mrs.').click()

    //Verify name
    await expect (page.getByLabel('Name *',{exact:true})).toBeVisible()
    //Verify email
    await expect (page.getByLabel('Email *',{exact:true})).toBeVisible()

    // Set password
    await page.getByLabel('Password *').fill('Ivaanrahi@2056')
    // Verify Date of Birth text 
    await page.getByText('Date of Birth').isVisible()

    //Select days
    await page.locator('#days').selectOption('20')

    //Select months
    await page.locator('#months').selectOption('December')

    // Select year
    await page.locator('#years').selectOption('1995')

    // Click text button Sign up for our newsletter
    await page.getByLabel('Sign up for our newsletter!').click()

    //Verify recieve special offers text
    await page.getByLabel('Receive special offers from our partners!').isVisible()

    // Verify Address information text
    await page.getByText('Address Information').isVisible()

    // Enter first name
   await page.getByLabel('First name *').fill('kajal')

    //Enter last name
   await page.getByLabel('Last name *').fill('kumari')

    //Check that company text button is visible
    await page.getByLabel('Company', { exact: true }).fill('mdh')

    //Fill address
    await page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)').fill('Kings bed')

    //Check Address2 text button is visible
    await expect (page.getByLabel('Address 2')).toBeVisible()

    // Select Country
    await page.getByLabel('Country *').selectOption('India')

    //Enter State
    await page.getByLabel('State *').fill('Bihar')

    //Enter City
    await page.getByLabel('City *' ).fill('Darbhanga')

    //Enter Zipcode
    await page.locator('#zipcode').fill('846009')

    //Enter Mobile number
    await page.getByLabel('Mobile Number *').fill('+919234439495')

    // Click on create Account
    await page.getByRole('button', { name: 'Create Account' }).click()

    //Verify Sbuscription button is visible
    await page.getByRole('heading', { name: 'Subscription' }).isVisible()

    //Account Created message should be Visible
    await expect (page.getByText('Account Created!')).toBeVisible()

    //Click on continue button
    await page.getByRole('link', { name: 'Continue' }).click()

    //Verify thatlogged in as username is visible
    await page.getByRole('link', { name: ' Logout' })

    //click on delete button
    await page.getByRole('link', { name: ' Delete Account' })

    // Verify Account Deletd
    await page.getByText('Account Deleted!')

    //click on continue button
   await page.getByRole('link', { name: 'Continue' })

   // Verify user navigates on home page
   await expect (page).toHaveURL('https://automationexercise.com/')

})

