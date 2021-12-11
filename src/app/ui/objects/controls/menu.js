const BaseObject = require('../baseObject');


class Menu extends BaseObject {
    get menuItem() {
        return this.ph.page.$('');
    }


}

module.exports = Menu;