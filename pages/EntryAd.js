// This file defines the Entry Ad page object for the test suite.
// It contains methods to interact with the entry ad modal window on the Entry Ad page.
import { expect } from '@playwright/test';

export class entryAdPage {

    // The constructor initializes the page object with the Playwright page instance
    // and sets up locators for the entry ad header, modal window, and close button.
    constructor(page) {
        this.page = page;
        this.entryAdHeader = page.getByRole('heading', { name: 'Entry Ad', exact: true });
        this.entryAdModal = page.locator('#modal');
        this.closeModalButton = page.getByText('Close', { exact: true });
    }

    // This method checks if the modal window appears when the user navigates to the Entry Ad page.
    // It waits for the modal to be visible, verifies its content, and then closes it.
    // After closing, it checks that the modal is hidden and the page URL is correct.
    // It also verifies that the entry ad header is still visible.
    async checkModalWindow() {
        await expect(this.entryAdModal).toBeVisible();
        await expect(this.entryAdModal).toMatchAriaSnapshot(`
    - heading "This is a modal window" [level=3]
    - paragraph: It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).
    - paragraph: Close
    `);
        await this.closeModalButton.click();
        await expect(this.entryAdModal).toBeHidden();
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/entry_ad');
        await expect(this.entryAdHeader).toBeVisible();
    }
}