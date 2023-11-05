import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import { CreateAccountTasks } from '../Tasks/createAccount.tasks';

const createAccountTasks = new CreateAccountTasks();

Given("El usuario ingresa a la pagina {int} y hace click en empezar aqui", async (ref:number) => {
    await createAccountTasks.open(ref);
    await browser.pause(500);
    await createAccountTasks.startHereClick();
});

When("El usuario ingresa sus datos {string} {string} {string}" , async (name:string, email:string, password:string) => {
    await createAccountTasks.accountDataInsert(name,email,password);
}); 

When(/^Se verifica que el correo electronico no se encuentre registrado$/, async () => {
    await createAccountTasks.unregisteredEmailCheck();
}); 

When("Se verifica que la contraseña {string} tenga al menos {int} caracteres", async (password:string, length:number) => {
    await createAccountTasks.passwordLengthCheck(password,length);
}); 

When("Se verifica que la contraseña {string} tenga al menos {int} caracteres especiales", async (password:string,quantity:number) => {
    await createAccountTasks.passwordSpecialCharsCheck(password,quantity);
}); 

Then("Se verifica el OTP: {string} para crear la cuenta", async (otp:string) => {
    await createAccountTasks.otpWaitAndContinue(otp);
}); 

