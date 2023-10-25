import { assert } from "chai";
import { ProductVerifyPage } from "../pageobjects/productVerify.page";
import { browser } from '@wdio/globals'


export class ProductVerifyTask extends ProductVerifyPage {

       async checkParagraph():Promise<boolean>  {

        await browser.pause(10000)
        const parrafos = await this.featuresMenu;

        parrafos.forEach(async (element: any) => {
            console.log(await element.getText())
        });

        assert.equal(parrafos.lenght, 5);
        return true;
    }
}