import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals'
import { ProductVerifyTask } from '../Tasks/productVerify.tasks';
import productVerifyPage from '../pageobjects/productVerify.page';
import axios from 'axios';

const apiTasks = new ApiTasks();

