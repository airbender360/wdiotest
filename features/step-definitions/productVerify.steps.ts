import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import { ProductVerifyTask } from '../Tasks/productVerify.tasks';

const productVerifyTask = new ProductVerifyTask();

Given("Se abre la pagina {int} del producto", async (ref:number) => {
    await productVerifyTask.open(ref);
});

When(/^Se hace una pausa para cargar los elementos$/, async () => {
    await browser.pause(3000);
});

When("Se verifican los {int} parrafos", async (quantity:number) => {
    await productVerifyTask.checkParagraph(quantity);
});

When("Se verifica la ram {string}", async (ram:string) => {
    await productVerifyTask.ramCheck(ram);
});

When("Se verifica que sea {string}{string}", async (part1:string, part2:string) => {
    await productVerifyTask.amazonsChoiceCheck(part1,part2);
});

When("Se verifica la marca {string}", async (brand:string) => {
    await productVerifyTask.brandCheck(brand);
});

Then(/^El total debe ser el resultado de la suma del precio mas el deposito de importacion$/, async () => {
    await productVerifyTask.totalCheck();
});

