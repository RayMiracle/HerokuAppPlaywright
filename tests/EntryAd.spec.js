// This file contains a Playwright test for the entry ad functionality of the HerokuApp.
// It includes a test that checks if the modal window appears when the user navigates to the Entry Ad page.
import { test, expect } from '@playwright/test';
import { homePage } from '../pages/Home.js';
import { entryAdPage } from '../pages/EntryAd.js';

test('Modal window', async ({ page }) => {

    const home = new homePage(page);
    const entryAd = new entryAdPage(page);

    await home.openHomePage();
    await home.goToEntryAd();
    await entryAd.checkModalWindow();
});