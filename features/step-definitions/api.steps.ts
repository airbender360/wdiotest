import { Given, Then } from '@wdio/cucumber-framework';
import { ApiTasks } from '../Tasks/api.tasks';

const apiTasks = new ApiTasks();

Given (/^El usuario consulta la informacion$/, async () => {
    await apiTasks.get();
});

Then (/^El usuario crea un post$/, async () => {
    await apiTasks.post();
});