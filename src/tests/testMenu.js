const app = require ('../app/app');

describe ('Menu', function(){
    it ('UI: Menu', async function(){

    await app.ui.header.click('cookies');
    // await app.ui.ph.page
    //     .waitForSelector('.branded-header-start button')
    //     .then(async function() { await app.ui.menu.clickBy('topMenu', 'Help With')});

    await app.ui.menu.clickBy('topMenu', 'Shop')

   
    await app.ui.ph.page.waitFor(5000);
    await app.ui.ph.page
        .waitForSelector(`button[aria-expanded*="true"]`)
        .then(async function() { await app.ui.menu.clickBy('menuItems', 'Biotin')});
    //await app.ui.menu.clickBy('menuItems', 'Algae');
    await app.ui.ph.page.waitFor(3000);

    
    });

});