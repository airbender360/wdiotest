import { assert } from "chai";
import productVerifyPage, { ProductVerifyPage } from "../pageobjects/productVerify.page";
import { browser } from '@wdio/globals'
import { expect } from 'chai';


export class ProductVerifyTask extends ProductVerifyPage {

    async checkParagraph():Promise<boolean>  {

        await browser.pause(10000)
        const parrafos = await this.featuresMenu;
        assert.equal(parrafos.length, 5);
        return true;
    }

    async ramCheck():Promise<boolean> {
        const ram = productVerifyPage.ram.getText();
        await expect(ram).to.equal("12.00");
        return true;
    }
}