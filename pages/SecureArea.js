// This file defines the Secure Area page object for the test suite.
// It contains methods to interact with the secure area elements and perform actions like checking login success and logging out.
import { expect } from '@playwright/test';

export class secureAreaPage {

    // The constructor initializes the page object with the Playwright page instance
    // and locates the elements on the secure area page.
    constructor(page) {
        this.page = page;
        this.secureAreaHeader = page.getByRole('heading', { name: 'Secure Area', exact: true });
        this.flashSuccessMessage = page.locator('.flash.success');
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
    }

    // This method checks if the user has successfully logged in to the secure area.
    // It verifies the URL, the header text of the secure area, and the success message
    async checkLoginSuccess() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/secure');
        await expect(this.secureAreaHeader).toContainText('Secure Area');
        await expect(this.flashSuccessMessage).toContainText('You logged into a secure area!');
    }

    // This method logs out the user by clicking the logout button.
    // It uses the Playwright locator to find the button by its role and name.
    // After logging out, it is expected to return to the login page.
    async logout() {
        await this.logoutButton.click();
    }
}