const BaseObject = require ('./objects/baseObject');
const Menu = require ('./objects/controls/menu');
const Header = require ('./objects/controls/header');
const Search = require ('./objects/controls/search');
const ProductContainer = require ('./objects/controls/productContainer');
const Localization = require ('./objects/controls/localization');
const MainPage = require ('./objects/pages/mainPage');
class Ui extends BaseObject {

    get menu() {
        return this.createGetter(Menu);
    }

    get header() {
        return this.createGetter(Header);
    }

    get search() {
        return this.createGetter(Search);
    }

    get localizIcon() {
        return this.createGetter(Localization);
    }

    get mainPage() {
        return this.createGetter(MainPage);
    }

    get productCont() {
        return this.createGetter(ProductContainer);
    }

}

module.exports = Ui;