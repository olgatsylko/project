const BaseObject = require('../baseObject');

class Header extends BaseObject {
    get headerElements() {
        return this.ph.page.$('.iherb-header-primary');
    }

    get cart() {
        return this.ph.page.$('.iherb-header-cart>a');
    }

    get menuShop() {
        return this.ph.page.$('.mega-menu-shop');
    }

    get menuBrands() {
        return this.ph.page.$('.mega-menu-brands');
    }

    get menuHelp() {
        return this.ph.page.$('.help-with-menu');
    }

}

module.exports = Header;