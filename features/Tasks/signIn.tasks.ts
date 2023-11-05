import { SignInPage } from "../pageobjects/signIn.page";
import { browser } from '@wdio/globals';
import { Assertions } from "../questions/assertions";

const assertions = new Assertions();

export class SignInTasks extends SignInPage {

    public signInClick(){
        this.signIn.click();
    }

    async signInDataInsert(email:string, password:string){
        await this.emailInput.setValue(email);
        await this.continueBtn.click();
        await this.passwordInput.setValue(password);
        await this.signInBtn.click();
    }

    async signInCheck(user:string){
        await browser.pause(5000);
        const locatorText = await this.helloUser.getText();
        const expected = "Hello, " + user;

        await assertions.toEqual(0,locatorText,expected);
    }
}