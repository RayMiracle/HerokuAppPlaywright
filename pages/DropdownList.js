// This file defines the Dropdown List page object for the test suite.
// It contains methods to interact with the dropdown list elements and perform actions like checking the page and selecting options.
import { expect } from '@playwright/test';

export class dropdownListPage {

    // The constructor initializes the page object with the Playwright page instance
    // and locates the header, dropdown list, and options elements on the dropdown list page.
    constructor(page) {
        this.page = page;
        this.dropdownListHeader = page.getByRole('heading', { name: 'Dropdown List', exact: true });
        this.dropdownList = page.locator('#dropdown');
        this.options = this.dropdownList.locator('option');
    }

    // This method checks if the dropdown list page is displayed correctly.
    // It verifies the URL, the header text of the dropdown list page, the count of options,
    // the default value of the dropdown list, and the text of each option.
    async checkDropdownListPage() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/dropdown');
        await expect(this.dropdownListHeader).toHaveText('Dropdown List');
        await expect(this.options).toHaveCount(3);
        await expect(this.dropdownList).toHaveValue('');
        await expect(this.options.nth(0)).toHaveText('Please select an option');
        await expect(this.options.nth(1)).toHaveText('Option 1');
        await expect(this.options.nth(2)).toHaveText('Option 2');
    }

    // This method selects options from the dropdown list and verifies the selected value.
    // It selects 'Option 1' and 'Option 2' in sequence, checking the value after each selection.
    async selectDropdownListOption() {
        await this.dropdownList.selectOption({ label: 'Option 1' });
        await expect(this.dropdownList).toHaveValue('1');
        await this.dropdownList.selectOption({ label: 'Option 2' });
        await expect(this.dropdownList).toHaveValue('2');
    }
}