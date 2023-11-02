import { $ } from '@wdio/globals'
import Page from './page';

export class SignInPage extends Page {

    public open (ref:string) {
        return super.open(ref);
    }

    public get signIn() {
        return $('[data-nav-ref="nav_custrec_signin"]')
    }

    public get emailInput() {
        return $('#ap_email')
    }

    public get continueBtn() {
        return $('input#continue')
    }

    public get passwordInput() {
        return $('#ap_password')
    }

    public get signInBtn() {
        return $('#signInSubmit')
    }
}

export default new SignInPage();