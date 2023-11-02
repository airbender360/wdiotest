import { Given, When, Then } from '@wdio/cucumber-framework';
import { ApiTasks } from '../Tasks/api.tasks';

const apiTasks = new ApiTasks();

When ("El usuario consulta la informacion", async () => {
    await apiTasks.getResults();
});