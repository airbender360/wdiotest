import { CreateAccountPage } from "../pageobjects/createAccount.page";
import { browser } from '@wdio/globals'
import { Assertions } from "../questions/assertions";
import { isExisting } from "webdriverio/build/commands/element";

const assertions = new Assertions();

export class CreateAccountTasks extends CreateAccountPage {

    public startHereClick(){
        this.startHere.click();
    }

    async accountDataInsert(name:string, email:string, password:string){
        await this.inputYourName.setValue(name)
        await browser.pause(2000)
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password)
        await browser.pause(2000)
        await this.inputPasswordCheck.setValue(password)
        await this.continueButton.click()
    }

    async unregisteredEmailCheck(){
        var check = null;
        if (await this.registeredEmailWarning.isExisting()){
            check = true;
        }
        else{
            check = false;
        }
        await assertions.isTrue(1, check)
    }

    async passwordLengthCheck(password:string,length:number){
        const passwordLength = password.length
        await assertions.toEqual(0,passwordLength,length)
    }  

    async passwordSpecialCharsCheck(password:string, quantity:number){
        const match = /[^a-zA-Z0-9\s]/g;
        const specialChars = password.match(match); 
        const count = specialChars ? specialChars.length : 0;
        var check;

        if (count >= quantity){
            check = true;
        }
        else {
            check = false;
        }

        await assertions.isTrue(0,check);
    }

    async otpWaitAndContinue(otp:string){
        await browser.pause(25000)
        await this.inputEnterOTP.setValue(otp)
        await browser.pause(2000)
        await this.createAccountButton.click()
    }
    
}