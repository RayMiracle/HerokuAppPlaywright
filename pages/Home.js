// This file defines the Home page object for the test suite.
// It contains methods to interact with the home page elements and perform actions like navigating to the authentication form.
export class homePage {

    // The constructor initializes the page object with the Playwright page instance
    // and locates the link to the Form Authentication page and the Dropdown link.
    constructor(page) {
        this.page = page;
        this.formAuthenticationLink = page.getByRole('link', { name: 'Form Authentication' });
        this.dropdownLink = page.getByRole('link', { name: 'Dropdown' });
    }

    // This method navigates to the home page of the application.
    // It uses the Playwright page.goto method to open the specified URL.
    async openHomePage() {
        await this.page.goto('https://the-internet.herokuapp.com');
    }   

    // This method clicks on the link to the Form Authentication page.
    // It uses the Playwright locator to find the link by its role and name.
    async goToAuthenticationForm() {
        await this.formAuthenticationLink.click();
    }

    // This method clicks on the link to the Dropdown page.
    // It uses the Playwright locator to find the link by its role and name.
    async goToDropdownList() {
        await this.dropdownLink.click();
    } 
}