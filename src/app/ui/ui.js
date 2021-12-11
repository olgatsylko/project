const BaseObject = require ('./objects/baseObject');
const Menu = require ('./objects/controls/menu');
const Header = require ('./objects/controls/header');

class Ui extends BaseObject {

    get menu() {
        return this.createGetter(Menu);
    }

    get header() {
        return this.createGetter(Header);
    }

}

module.exports = Ui;