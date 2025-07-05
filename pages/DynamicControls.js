// This file defines the Dynamic Controls page object for the test suite.
// It contains methods to interact with the dynamic controls page, such as checking the initial state,
// removing and adding a checkbox, enabling and disabling a textbox, and verifying the expected behavior.
import { expect } from '@playwright/test';

export class dynamicControlsPage {

    // The constructor initializes the page object with the Playwright page instance
    // and sets up locators for various elements on the dynamic controls page.
    constructor(page) {
        this.page = page;
        this.dynamicControlsHeader = page.getByRole('heading', { name: 'Dynamic Controls', exact: true });
        this.dynamicControlsCheckboxContainer = page.getByText('A checkbox').locator('..');
        this.dynamicControlsCheckboxInput = page.getByRole('checkbox');
        this.dynamicControlsRemoveButton = page.getByRole('button', { name: 'Remove' });
        this.dynamicControlsAddButton = page.getByRole('button', { name: 'Add' });
        this.dynamicControlsMessage = page.locator('#message');
        this.loadingAnimation = page.locator('#loading');
        this.loadingImage = page.locator('#loading img');
        this.dynamicControlsTextbox = page.getByRole('textbox');
        this.dynamicControlsEnableButton = page.getByRole('button', { name: 'Enable' });
        this.dynamicControlsDisableButton = page.getByRole('button', { name: 'Disable' });
    }

    // This method checks the initial state of the dynamic controls page.
    // It verifies that the page URL is correct, the header text is as expected,
    // the checkbox input is not checked, the checkbox container contains the text 'A checkbox',
    // the remove button has the text 'Remove', the textbox is disabled, and the enable button has the text 'Enable'.
    async checkInitialDynamicControlsPage() {
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/dynamic_controls');
        await expect(this.dynamicControlsHeader).toHaveText('Dynamic Controls');
        await expect(this.dynamicControlsCheckboxInput).not.toBeChecked();
        await expect(this.dynamicControlsCheckboxContainer).toContainText('A checkbox');
        await expect(this.dynamicControlsRemoveButton).toHaveText('Remove');
        await expect(this.dynamicControlsTextbox).toBeDisabled();
        await expect(this.dynamicControlsEnableButton).toHaveText('Enable');
    }

    // This method removes the checkbox from the dynamic controls page.
    // It first checks that the checkbox input is visible, then checks it,
    // clicks the remove button, and waits for the loading animation to disappear.
    // It verifies that the message indicates the checkbox is gone, and that the checkbox container is not visible.
    // Finally, it checks that the add button has the text 'Add'.
    async removeCheckbox() {
        await expect(this.dynamicControlsCheckboxInput).toBeVisible();
        await this.dynamicControlsCheckboxInput.check();
        await expect(this.dynamicControlsCheckboxInput).toBeChecked();
        await this.dynamicControlsRemoveButton.click();
        await expect(this.loadingAnimation.first()).toBeVisible();
        await expect(this.loadingAnimation.first()).toHaveText('Wait for it... ');
        await expect(this.loadingImage.first()).toHaveAttribute('src', '/img/ajax-loader.gif');
        await this.loadingAnimation.first().waitFor({ state: 'hidden', timeout: 5000 });
        await expect(this.loadingAnimation.first()).not.toBeVisible();
        await expect(this.dynamicControlsMessage).toHaveText('It\'s gone!');
        await expect(this.dynamicControlsCheckboxContainer).not.toBeVisible();
        await expect(this.dynamicControlsAddButton).toHaveText('Add');
    }

    // This method adds the checkbox back to the dynamic controls page.
    // It clicks the add button, waits for the loading animation to disappear,
    // and verifies that the message indicates the checkbox is back.
    // It also checks that the checkbox container and input are visible.
    async addCheckbox() {
        await this.dynamicControlsAddButton.click();
        await expect(this.loadingAnimation.first()).toBeVisible();
        await expect(this.loadingAnimation.first()).toHaveText('Wait for it... ');
        await expect(this.loadingImage.first()).toHaveAttribute('src', '/img/ajax-loader.gif');
        await this.loadingAnimation.first().waitFor({ state: 'hidden', timeout: 5000 });
        await expect(this.loadingAnimation.first()).not.toBeVisible();
        await expect(this.dynamicControlsMessage).toHaveText('It\'s back!');
        await expect(this.dynamicControlsCheckboxContainer).toBeVisible();
        await expect(this.dynamicControlsCheckboxInput).toBeVisible();
    }

    // This method enables the textbox on the dynamic controls page.
    // It clicks the enable button, waits for the loading animation to disappear,
    // and verifies that the textbox is enabled, the disable button has the text 'Disable',
    // and the message indicates that the textbox is enabled.
    async enableTextBox() {
        await this.dynamicControlsEnableButton.click();
        await expect(this.loadingAnimation.first()).toBeVisible();
        await expect(this.loadingAnimation.first()).toHaveText('Wait for it... ');
        await expect(this.loadingImage.first()).toHaveAttribute('src', '/img/ajax-loader.gif');
        await this.loadingAnimation.first().waitFor({ state: 'hidden', timeout: 5000 });
        await expect(this.loadingAnimation.first()).not.toBeVisible();
        await expect(this.dynamicControlsTextbox).toBeEnabled();
        await expect(this.dynamicControlsDisableButton).toHaveText('Disable');
        await expect(this.dynamicControlsMessage).toHaveText('It\'s enabled!');
    }

    // This method disables the textbox on the dynamic controls page.
    // It first clicks the textbox to focus it, fills it with a test value,
    // clicks the disable button, waits for the loading animation to disappear,
    // and verifies that the textbox is disabled, retains the test value,
    // the enable button has the text 'Enable', and the message indicates that the textbox is disabled.
    async disableTextBox() {
        await this.dynamicControlsTextbox.click();
        await this.dynamicControlsTextbox.fill('Test');
        await this.dynamicControlsDisableButton.click();
        await expect(this.loadingAnimation.first()).toBeVisible();
        await expect(this.loadingAnimation.first()).toHaveText('Wait for it... ');
        await expect(this.loadingImage.first()).toHaveAttribute('src', '/img/ajax-loader.gif');
        await this.loadingAnimation.first().waitFor({ state: 'hidden', timeout: 5000 });
        await expect(this.loadingAnimation.first()).not.toBeVisible();
        await expect(this.dynamicControlsTextbox).toBeDisabled();
        await expect(this.dynamicControlsTextbox).toHaveValue('Test');
        await expect(this.dynamicControlsEnableButton).toHaveText('Enable');
        await expect(this.dynamicControlsMessage).toHaveText('It\'s disabled!');
    }
}