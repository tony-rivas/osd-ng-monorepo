import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain(
    'Welcome to One Stop Desktop'
  );
  // Expect document title
  expect(await page.locator('head > title').innerText()).toContain(
    'One Stop Desktop'
  );
});
