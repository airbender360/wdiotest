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

Then(/^Se verifican los 5 parrafos$/, async () => {
    await browser.pause(1000);
    await productVerifyTask.checkParagraph();
});

Then(/^Se verifica la ram$/, async () => {
    await productVerifyTask.ramCheck();
});

Then(/^Se verifica la marca$/, async () => {
    await productVerifyTask.brandCheck();
});
