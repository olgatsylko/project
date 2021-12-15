const BaseObject = require('../baseObject');

class Header extends BaseObject {

    get cookies(){
        return this.ph.page.$('#truste-consent-button');
    } 
    get headerElements() {
        return this.ph.page.$$('.iherb-header-primary div');
    }
    get cart() {
        return this.ph.page.$('.iherb-header-cart>a');
    }
    get signIn() {
        return this.ph.page.$('.iherb-header-signed-out>a');
    }
    
    get menuShop() {
        return this.ph.page.$('.shop-menu button');
       // return this.ph.page.$('.shop-menu>button svg use');
    }

    get menuBrands() {
        //return this.ph.page.$('.mega-menu-brands');
        return this.ph.page.$('.brands-menu button');
    }

    get menuHelp() {
        return this.ph.page.$('.help-with-menu button');
    }

}

module.exports = Header;