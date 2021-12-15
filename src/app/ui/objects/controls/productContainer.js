const BaseObject = require('../baseObject');


class ProductContainer extends BaseObject {
    get panelItems() {
        //return this.ph.page.$$('.carouselRow a');
        return this.ph.page.$$('.absolute-link-wrapper>a');
    }

    get addToCart(){
        return this.ph.page.$(`button[name*='AddToCart']`);
    }
 
}

module.exports = ProductContainer;