import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { browser } from '@wdio/globals'

import LoginPage from '../pageobjects/signin.page';

Given(/^El usuario ingresa a la pagina de registro$/, async () => {
    await LoginPage.open()
    await browser.pause(2000)
    await LoginPage.startHere.click()
    await browser.pause(2000)
});

When(/^El usuario registra los datos$/, async () => {
    await browser.pause(2000)
    await LoginPage.inputYourName.setValue("Santiago Sánchez")
    await LoginPage.inputEmail.setValue("santy.896dasd@gmail.com")
    await LoginPage.inputPassword.setValue("santysantysanty05")
    await LoginPage.inputPasswordCheck.setValue("santysantysanty05")
    await browser.pause(4000)
    await LoginPage.continueButton.click()
}); 

Then(/^Se crea la cuenta$/, async () => {
    await browser.pause(25000)
    await LoginPage.inputEnterOTP.setValue("12345")
    await browser.pause(10000)
    await LoginPage.createAccountButton.click()
}); 

