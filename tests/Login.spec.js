// This file contains a Playwright test for the login functionality of the HerokuApp.
// It uses page objects to interact with the home page, login page, and secure area page.
// This test suite includes two tests: one for successful login and logout, and another for handling incorrect username or password attempts.
import { test, expect } from '@playwright/test';
import { homePage } from '../pages/Home.js';
import { loginPage } from '../pages/Login.js';
import { secureAreaPage } from '../pages/SecureArea.js';

test.beforeEach(async ({ page }) => {
    
    const home = new homePage(page);
    const login = new loginPage(page);
    
    await home.openHomePage();
    await home.goToAuthenticationForm();
    await login.checkLoginPage();
});

test('Successful login', async ({ page }) => {

    const login = new loginPage(page);
    const secureArea = new secureAreaPage(page);
    
    await login.login('tomsmith', 'SuperSecretPassword!');
    await secureArea.checkLoginSuccess();
    await secureArea.logout();
    await login.checkLoginPage();
});

test('Login with incorrect username or password', async ({ page }) => {

    const login = new loginPage(page);

    await login.login('Test', 'SuperSecretPassword!');
    await login.checkLoginUsernameInvalid();
    await login.login('tomsmith', 'Test');
    await login.checkLoginPasswordInvalid();
});