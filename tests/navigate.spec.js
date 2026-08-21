import {test} from '@playwright/test';
test('demo',async ({page})=>
{
    await page.goto("https://www.facebook.com/");
    // let title=  await page.title();
    // console.log(title);
    // let url=await page.url();
    // console.log(url);
    await page.goto('https://www.instagram.com/');
    await page.goBack();
    // await page.waitForLoadState();
    await page.goto('https://www.amazon.in/');
    await page.screenshot ({path:'./amazon.png'});
    // await page.screenshot({path:'C:\\Users\\91900\\OneDrive\\Pictures\\Screenshots\\insta.png'})
    await page.goForward();
    await page.reload();

})