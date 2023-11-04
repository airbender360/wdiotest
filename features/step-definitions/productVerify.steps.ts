import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import { ProductVerifyTask } from '../Tasks/productVerify.tasks';

const productVerifyTask = new ProductVerifyTask();

Given("Se abre la pagina {int} del producto", async (ref:number) => {
    await productVerifyTask.open(ref);
});

When(/^Se hace una pausa para cargar los elementos$/, async () => {
    await browser.pause(2000);
});

Then("Se verifican los {string} parrafos", async (quantity:number) => {
    await browser.pause(1000);
    await productVerifyTask.checkParagraph(quantity);
});

Then("Se verifica la ram {string}", async (ram:string) => {
    await productVerifyTask.ramCheck(ram);
});

Then (/^Se verifica que sea opcion amazon$/, async () => {
    await productVerifyTask.amazonsChoiceCheck();
});

Then("Se verifica la marca {string}", async (brand:string) => {
    await productVerifyTask.brandCheck(brand);
});

Then ("El total debe ser el resultado de la suma del precio + deposito de importacion", async () => {
    await productVerifyTask.totalCheck();
});

