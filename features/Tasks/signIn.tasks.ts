import { SignInPage } from "../pageobjects/signIn.page";


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
}