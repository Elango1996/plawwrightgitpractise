import {chromium, test} from '@playwright/test'
    test('browser launch', async({})=>{
        // const browser=await chromium.launch();
        // const context=await browser.newContext();
        // const page=await context.newPage();

        const browser = await chromium.launch();
        const context1 = await browser.newContext();
        const page1 = await context1.newPage();
        const page2 = await context1.newPage();
        const page3 = await context1.newPage();

    const context2 = await browser.newContext();
            const spage = await context2.newPage();
            
        await page1.goto('https://www.instagram.com/');
        await page2.goto('https://www.facebook.com/login/');
        await page3.goto('https://www.w3schools.com/');
        await spage.goto("https://www.instagram.com/");
        await spage.goto('https://www.facebook.com/login/');
        await spage.goBack();
        await spage.goBack();
        


    })
