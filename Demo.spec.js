import { test, expect } from '@playwright/test';

test('Register', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.getByPlaceholder('First Name').fill('Mohamed')
    await page.getByPlaceholder('Last Name').fill('Reda')
    await page.locator('textarea').fill('Hdayek el ahram')
    await page.locator('input[type="email"]').fill('mohamedreda199895@gmail.com')
    await page.locator('input[type="tel"]').fill('01126714888')
    await page.getByLabel('Male', { exact: true }).click()
    await page.locator('#checkbox2').click()
    await page.locator('#msdd').click()
    await page.locator('li').filter({ hasText: 'Arabic' }).click();
    await page.locator('#secondpassword').click();
    await page.locator('#Skills').selectOption('Android');  //>>Static
    await page.getByLabel('', { exact: true }).click(); //>>dynamic  
    await page.getByRole('treeitem', { name: 'Denmark' }).click();
    await page.locator('#yearbox').selectOption('1995')

    await page.locator('#basicBootstrapForm div').filter({ hasText: 'Date Of Birth year' }).getByRole('combobox').nth(1).selectOption('June')
    await page.locator('#daybox').selectOption('13')
    await page.locator('#firstpassword').fill('M7mdreda@123')
    await page.locator('#secondpassword').fill('M7mdreda@123')
    await page.locator('#submitbtn').click();

 

    //  const dropdownlist = page.locator('#msdd')

    //dropdownlist.selectOption('Arabic');


    await page.waitForTimeout(6000)


})

