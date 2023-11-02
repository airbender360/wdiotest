import { Given, When, Then } from '@wdio/cucumber-framework';
import { SignInTasks } from '../Tasks/signIn.tasks';

const signInTasks = new SignInTasks();

Given("El usuario ingresa a la pagina {string} y hace click en iniciar sesion", async (ref:string) => {
    await signInTasks.open(ref)
    await signInTasks.signInClick();
});

When ("Ingresa los datos de inicio {string} {string}", async (email:string, password:string) => {
    await signInTasks.signInDataInsert(email,password);
});

