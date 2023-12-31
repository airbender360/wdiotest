import { Given, When, Then } from '@wdio/cucumber-framework';
import { SignInTasks } from '../Tasks/signIn.tasks';

const signInTasks = new SignInTasks();

Given("El usuario ingresa a la pagina {int} y hace click en iniciar sesion", async (ref:number) => {
    await signInTasks.open(ref)
    await signInTasks.signInClick();
});

When ("Ingresa los datos de inicio {string} {string}", async (email:string, password:string) => {
    await signInTasks.signInDataInsert(email,password);
});


Then ("Se valida el inicio de sesion exitoso con el mensaje Hola, {string}", async (user:string) => {
    await signInTasks.signInCheck(user);
});
