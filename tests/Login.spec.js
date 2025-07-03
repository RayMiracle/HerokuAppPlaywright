import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/Login.js';

test('Successful login', async ({ page }) => {

    const login = new loginPage(page);

    await login.goToLoginPage();
    await login.login('tomsmith', 'SuperSecretPassword!');
});