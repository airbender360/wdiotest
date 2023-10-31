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

    async ramCheck() {
        const ram = await productVerifyPage.ram.getText();
        await expect(ram).to.equal('12.00');
    }

    async amazonChoiceCheck():Promise<boolean> {
        if (productVerifyPage.amazonsChoice.isExisting()){
            await expect(this.amazonsChoiceAmazon.getText()).to.equal("Amazon");
            await expect(this.amazonsChoiceChoice.getText()).to.equal("Choice");
            return true;
        }
        else {
            return false;
        }
    }

    async brandCheck() {
        const marca = await this.brand.getText();
        await expect(marca).to.equal("GALAX")
    }
        
}