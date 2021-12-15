const BaseObject = require('../baseObject');


class Menu extends BaseObject {
    get menuItems() {
        return this.ph.page.$$('.menu-flex .type-default>a>span');
    }

    get topMenu (){
        return this.ph.page.$$('.branded-header-start .menu-dropdown button');
    }
 
}

module.exports = Menu;