import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import { CreateAccountTasks } from '../Tasks/createAccount.tasks';

const createAccountTasks = new CreateAccountTasks();

Given("El usuario ingresa a la pagina {string} y hace click en empezar aqui", async (ref:string) => {
    await createAccountTasks.open(ref);
    await createAccountTasks.startHereClick();
});

When("El usuario ingresa sus datos {string} {string} {string}" , async (name:string, email:string, password:string) => {
    await createAccountTasks.accountDataInsert(name,email,password);
}); 

Then("Se verifica que el correo no se encuentre registrado en la plataforma", async () => {
    await createAccountTasks.unregisteredEmailCheck();
}); 

Then("Se verifica que la contraseña {string} tenga al menos {number} caracteres", async (password:string, length:number) => {
    await createAccountTasks.passwordLengthCheck(password,length);
}); 

Then("Se verifica que la contraseña {string} tenga al menos {number} caracteres especiales", async (password:string,quantity:number) => {
    await createAccountTasks.passwordSpecialCharsCheck(password,length);
}); 

Then("Se verifica el OTP: {string} para crear la cuenta", async (otp:string) => {
    await createAccountTasks.otpWaitAndContinue(otp);
}); 

