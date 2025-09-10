import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Mujeres' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Hombres' }).click();
  await page.getByRole('button', { name: 'Nuevo producto' }).click();
});