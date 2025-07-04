// This file contains a Playwright test for the dropdown functionality of the HerokuApp.
// The test suite includes a single test that checks the dropdown list page and selects options from the dropdown list.
import { test, expect } from '@playwright/test';
import { homePage } from '../pages/Home.js';
import { dropdownListPage } from '../pages/DropdownList.js';

test('Dropdown selection', async ({ page }) => {

    const home = new homePage(page);
    const dropdownList = new dropdownListPage(page);

    await home.openHomePage();
    await home.goToDropdownList();
    await dropdownList.checkDropdownListPage();
    await dropdownList.selectDropdownListOption();
});