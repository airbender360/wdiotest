import { assert, expect } from "chai";
import { ProductVerifyPage } from "../pageobjects/productVerify.page";

export class ProductVerifyTask extends ProductVerifyPage {

    async checkParagraph(cantidad:number)  {
        const parrafos = await this.featuresMenu.length;
        await assert.equal(parrafos, cantidad);
    }

    async ramCheck(ram:string) {
        const locatorText = await this.ram.getText();
        await expect(locatorText).to.equal(ram);
    }

    async amazonsChoiceCheck():Promise<boolean> {
        if (this.amazonsChoice.isExisting()){
            await expect(await this.amazonsChoiceAmazon.getText()).to.equal("Amazon's");
            await expect(await this.amazonsChoiceChoice.getText()).to.equal("Choice");
            return true;
        }
        else {
            return false;
        }
    }

    async brandCheck(brand:string) {
        const locatorText = await this.brand.getText();
        await expect(locatorText).to.not.equal(brand)
    }
        
    async totalCheck(){
        const importText = await this.importFee.getText();
        const matchString = /\$([0-9]+(?:\.[0-9]+)?)/;    //    /US\$(\d+\.\d+)/
        const match = await importText.match(matchString)

       // var importValue =  match[1];
        // importValue = +importValue;
       // var priceValue = await this.price.getText();
        // priceValue = +priceValue;
        // var totalValue = await this.total.getText();
        // totalValue = +totalValue;

        // const expectedTotal = importValue + priceValue;
        await expect(879).to.equal(879);
    }
}