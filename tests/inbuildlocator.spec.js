import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  // await page.getByRole('textbox', { name: 'First Name' }).click();
  // await page.getByRole('textbox', { name: 'First Name' }).fill('elango');
  // await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  // await page.getByRole('textbox', { name: 'Last Name' }).fill('jeeva');
  // await page.getByRole('textbox', { name: 'name@example.com' }).click();
  // await page.getByRole('textbox', { name: 'name@example.com' }).fill('elango@gmail.com');
  // await page.getByRole('radio', { name: 'Male', exact: true }).check();
  // await page.getByRole('radio', { name: 'Male', exact: true }).check();
  // await page.getByRole('radio', { name: 'Male', exact: true }).press('9');
  // await page.getByRole('textbox', { name: 'Mobile Number' }).click();
  // await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9000215485');
  // await page.getByRole('checkbox', { name: 'Music' }).check();
  // await page.getByRole('textbox', { name: 'Current Address' }).click();
  // await page.getByRole('textbox', { name: 'Current Address' }).fill('no: 5 hirenexa');


  await page.getByPlaceholder("First Name").fill("ajith");
  
  await page.getByText("Submit").click;
  await page.waitForTimeout(4000);
});