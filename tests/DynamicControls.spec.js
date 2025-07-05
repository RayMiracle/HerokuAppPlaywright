// This file contains a Playwright test for the dynamic controls functionality of the HerokuApp.
// It includes tests for removing and adding a checkbox, as well as enabling and disabling a textbox.
import { test, expect } from '@playwright/test';
import { homePage } from '../pages/Home.js';
import { dynamicControlsPage } from '../pages/DynamicControls.js';

test.beforeEach(async ({ page }) => {
    
    const home = new homePage(page);
    const dynamicControls = new dynamicControlsPage(page);
    
    await home.openHomePage();
    await home.goToDynamicControls();
    await dynamicControls.checkInitialDynamicControlsPage();
});

test('Remove and Add checkbox', async ({ page }) => {

    const dynamicControls = new dynamicControlsPage(page);

    await dynamicControls.removeCheckbox();
    await dynamicControls.addCheckbox();
    await dynamicControls.checkInitialDynamicControlsPage();
});

test('Enable and Disable textbox', async ({ page }) => {

    const dynamicControls = new dynamicControlsPage(page);

    await dynamicControls.enableTextBox();
    await dynamicControls.disableTextBox();  
});