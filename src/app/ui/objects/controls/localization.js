const BaseObject = require('../baseObject');


class Localization extends BaseObject {
    get local() {
        return this.ph.page.$('.country-select .country-code-flag');
    }

    get shipDestination(){
        return this.ph.page.$('.select-country #CurrentCountryCode');
    }

    get zipCode(){
        return this.ph.page.$('.input-zipcode input');
    }

    get saveButton(){
        return this.ph.page.$('.ccl-btn .gh-btn-primary');
    }
}

module.exports = Localization;