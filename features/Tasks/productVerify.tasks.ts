import { ProductVerifyPage } from "../pageobjects/productVerify.page";
import { Assertions } from "../questions/assertions";

const assertions = new Assertions();

export class ProductVerifyTask extends ProductVerifyPage {
    
    async checkParagraph(quantity:number){
        const locatorLength = await this.featuresMenu.length;
        await assertions.toEqual(0,locatorLength,quantity);
    }

    async ramCheck(ram:string){
        const locatorText = await this.ram.getText();
        await assertions.toEqual(0,locatorText,ram);
    }

    async amazonsChoiceCheck(part1:string,part2:string){
        const locatorText = await this.amazonsChoice.getText();
        await assertions.toEqual(0,locatorText,part1 + "\n" + part2);
    }

    async brandCheck(brand:string) {
        const locatorText = await this.brand.getText();
        await assertions.toEqual(0,locatorText,brand);
    }
        
    public getValue(locatorText:string){
        const regular = /\D+/;
        const valuesArray = locatorText.split(regular);
        const value = +(valuesArray[1] + "." + valuesArray[2]);

        return value;
    }

    async totalCheck(){
        const feeText = await this.importFee.getText();
        const fee = this.getValue(feeText);
        const priceText = await this.price.getText();
        const price = this.getValue(priceText);
        await this.detailsButton.click();
        const totalText = await this.total.getText();
        const total = this.getValue(totalText);

        await assertions.toEqual(0,fee+price,total)
    }
}