const app = require ('../app/app');

describe ('API 1', function(){
    // before(async() => {
    //     await app.ui.ph.launch();
    // });

    // after(()=> app.ui.ph.finish());

    // beforeEach(async()=> {
    //     await app.ui.ph.create();
    //     await app.ui.ph.navigate();
    // })

    // afterEach(() => app.ui.ph.close());

    it ('Start test 1', async function(){
        // await app.ui.ph.page.waitForResponse(resp => {
        //     return resp.url() === 'https://www.iherb.com/' && resp.status() === 200;
        // })

        // const text = await app.ui.header.getText('title');
        // app.ui.expect(text).to.equal('Puppeteerv12.0.1');

       
        await app.ui.header.headerElements;
        await app.ui.header.cart;
        await app.ui.header.clickByElement('cart');
        await app.ui.ph.page.waitFor(5000);


        // const resp = await app.api.image.getImage();
        // app.expect(resp.status).to.equal(200);

        // const resp2 = await app.api.content.getPromo();
        // app.expect(resp2.status).to.equal(200);
        // app.expect(resp2.data).to.be.jsonSchema(app.api.schema.promoSchema);

    })



    // it ('test 2', async function(){
    //     const resp = await app.api.catalogCCL.getLocation();
    //     app.expect(resp.status).to.equal(200);
        //app.expect(resp.data).to.be.jsonSchema(app.api.schema.promoSchema);//add schema
    //})

})