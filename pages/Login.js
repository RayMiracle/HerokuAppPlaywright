// This file defines the Login page object for the test suite.
// It contains methods to interact with the login page elements and perform actions like checking the page and logging in.
import { expect } from '@playwright/test';

export class loginPage {

    // The constructor initializes the page object with the Playwright page instance
    // and locates the elements on the login page.
    constructor(page) {
        this.page = page;
        this.loginPageHeader = page.getByRole('heading', { name: 'Login Page', exact: true });
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: ' Login' });
    }

    // This method checks if the login page is displayed correctly.
    // It verifies the URL and the header text of the login page.
    async checkLoginPage() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/login');
        await expect(this.loginPageHeader).toHaveText('Login Page');
    }   

    // This method performs the login action by filling in the username and password fields
    // and clicking the login button.
    // It takes the username and password as parameters.
    // It uses the Playwright locator to find the input fields and button by their roles and names.
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}