import {test} from '@playwright/test';

test('test', async ({ page }) => 
{

await page.goto('https://demoqa.com/automation-practice-form');
await page. waitForTimeout(4000);
 await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('elango');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('jeeva');
await page.getByRole('radio', { name: 'Male', exact: true }).check();
await page.getByRole('radio', { name: 'Female', exact: true }).check();


})