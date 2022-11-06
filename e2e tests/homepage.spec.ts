import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('https://from-zero-to-hero.netlify.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Junior/);
});
