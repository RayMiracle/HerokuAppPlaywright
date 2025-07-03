// This file contains a Playwright test for the login functionality of the HerokuApp.
// It uses page objects to interact with the home page, login page, and secure area page.
// The test checks if a user can successfully log in and then log out, verifying the expected behavior at each step.
import { test, expect } from '@playwright/test';
import { homePage } from '../pages/Home.js';
import { loginPage } from '../pages/Login.js';
import { secureAreaPage } from '../pages/SecureArea.js';

test('Successful login', async ({ page }) => {

    const home = new homePage(page);
    const login = new loginPage(page);
    const secureArea = new secureAreaPage(page);

    await home.openHomePage();
    await home.goToAuthenticationForm();
    await login.checkLoginPage();
    await login.login('tomsmith', 'SuperSecretPassword!');
    await secureArea.checkLoginSuccess();
    await secureArea.logout();
    await login.checkLoginPage();
});