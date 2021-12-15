/*const app = require ('../app/app');

describe ('Header', function(){
    it ('UI: Header', async function(){

        await app.ui.header.click('cookies');
    
        const textShop = await app.ui.header.getText('menuShop');
        app.expect(textShop).to.equal('Shop');

        const textBrands = await app.ui.header.getText('menuBrands');
        app.expect(textBrands).to.equal('Brands');

        const textHelp = await app.ui.header.getText('menuHelp');
        app.expect(textHelp).to.equal('Help With');
        
        const text = await app.ui.header.getText('signIn');
        app.expect(text).to.equal('Create my account'); 

        //await app.ui.header.waitVisible('cart');

        await app.ui.ph.page
            .waitForSelector('.iherb-header-cart>a>svg')
            .then(async () => await app.ui.header.click('cart'));
        
        //await app.ui.header.click('cart');
        // await app.ui.ph.page.waitForResponse(resp => {
        //     return resp.url() === 'https://checkout1.iherb.com/cart' && resp.status() === 200;
        // })

        await app.ui.ph.page.waitFor(7000);
        console.log(await app.ui.ph.page.url());
       // await app.ui.ph.page.goBack();

    });

    xit ('UI: Localization settings', async function(){
        // await app.ui.localizIcon.waitVisible('local');
        // await app.ui.localizIcon.click('local');


       // await app.ui.ph.page.waitFor(5000);

        //await app.ui.localizIcon.searchText('US', 'shipDestination');
        // await app.ui.localizIcon.clearAndInput('35004', 'zipCode');
        // await app.ui.localizIcon.click('saveButton');
        // await app.ui.ph.page.waitFor(3000);
    });

    xit ('UI: Cart', async function(){
        await app.ui.header.cart;
        await app.ui.header.click('cart');
        // await app.ui.ph.page.waitForResponse(resp => {
        //     return resp.url() === 'https://checkout1.iherb.com/cart' && resp.status() === 200;
        // })

     
        app.expect(await app.ui.ph.page.title()).to.include('Cart');
        await app.ui.ph.page.goBack();
    });

    xit ('API: content-promo', async function(){
        const resp = await app.api.content.getPromo();
        app.expect(resp.status).to.equal(200);
        app.expect(resp.data).to.be.jsonSchema(app.api.schema.promoSchema);
    });

    xit ('API: image', async function(){
        const resp = await app.api.image.getImage();
        app.expect(resp.status).to.equal(200);
    });

    xit ('API:catalog', async function(){
        const resp2 = await app.api.catalog.getBlogs();
        app.expect(resp2.status).to.equal(200);
        app.expect(resp2.headers['content-type']).to.equal('text/html; charset=utf-8');
        app.expect(resp2.headers['server']).to.include('cloudflare');
    });

});*/