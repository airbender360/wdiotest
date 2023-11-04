import { $ } from '@wdio/globals'
import Page from './page';

export class CreateAccountPage extends Page {

    public open(ref:string) {
        return super.open(ref);
    }
    
    public get startHere() {
        return $('(// * [contains (text (), "Start here")])[2]');
    }

    public get inputYourName() {
        return $('#ap_customer_name');
    }

    public get inputEmail() {
        return $('#ap_email');
    }

    public get registeredEmailWarning(){
        return $('#register-mase-inlineerror');   // #register-mase-inlineerror i+ .a-alert-content
    }
    
    public get inputPassword() {
        return $('#ap_password');
    }

    public get inputPasswordCheck() {
        return $('#ap_password_check');
    }
    
    public get continueButton() {
        return $('//input[@id="continue"]')
    }
    
    public get inputEnterOTP() {
        return $('//input[@name="code"]') // //div[@id="cvf-input-code-container"]
    }   

    public get createAccountButton() {
        return $('//input [contains(@aria-labelledby, "cvf-submit-otp-button-announce")]')
    }
}

export default new CreateAccountPage();
