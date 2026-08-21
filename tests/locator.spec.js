
import {test} from '@playwright/test';
test('demo',async ({page})=>
{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("#firstName").fill("elango");
    await page.locator("#lastName").fill("jeeva");
    await page.locator("#userEmail").fill("elangovanjeeva10@gmail.com");
    await page.locator("(//input[@class=' mr-sm-2 form-control'])[3]").fill("9003180495");
    await page. waitForTimeout(4000);
    // await page. locator("//div[@class='subjects-auto-complete__input-container css-19bb58m']").fill("english");
    
    await page. locator("#hobbies-checkbox-1").check();
    await page.getByPlaceholder("Current Address").fill("no 98 amman koil st saidapet rd vadapalani ch-26");
    console.log("poll scm done");
    console.log("elango branch done");
    // cdone
    // change in ajith

// super
})