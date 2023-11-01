import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import { ProductVerifyTask } from '../Tasks/productVerify.tasks';
import productVerifyPage from '../pageobjects/productVerify.page';

const productVerifyTask = new ProductVerifyTask();

Given(/^Se abre la pagina$/, async () => {
    await productVerifyPage.open();
});

When(/^Se hace una pausa para cargar los elementos$/, async () => {
    await browser.pause(2000);
});

Then("Se verifican los {string} parrafos", async (cantidad:string) => {
    await browser.pause(1000);
    await productVerifyTask.checkParagraph(cantidad);
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

When ("El usuario consulta la informacion", async () => {
    await productVerifyTask.getResults();
});