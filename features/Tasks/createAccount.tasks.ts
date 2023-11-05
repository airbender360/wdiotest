import { CreateAccountPage } from "../pageobjects/createAccount.page";
import { browser } from '@wdio/globals'
import { Assertions } from "../questions/assertions";

const assertions = new Assertions();

export class CreateAccountTasks extends CreateAccountPage {

    async startHereClick(){
        await this.startHere.click();
    }

    async accountDataInsert(name:string, email:string, password:string){
        await this.inputYourName.setValue(name);
        await browser.pause(2000);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await browser.pause(2000);
        await this.inputPasswordCheck.setValue(password);
        await this.continueButton.click();
    }

    async unregisteredEmailCheck(){
        var check = null;

        await(await this.registeredEmailWarning).isExisting() ? check = true : check = false;
        await assertions.isTrue(1, check);
    }

    async passwordLengthCheck(password:string,length:number){
        const passwordLength = password.length
        var check = null;

        passwordLength >= length ? check = true : check = false;
        await assertions.isTrue(0,check);
    }  

    async passwordSpecialCharsCheck(password:string, quantity:number){
        const match = /[^a-zA-Z0-9\s]/g;
        const specialChars = password.match(match); 
        const count = specialChars ? specialChars.length : 0;
        var check;

        count >= quantity ? check = true : check = false;
        await assertions.isTrue(0,check);
    }

    async otpWaitAndContinue(otp:string){
        await browser.pause(25000)
        await this.inputEnterOTP.setValue(otp)
        await browser.pause(2000)
        await this.createAccountButton.click()
    }
}