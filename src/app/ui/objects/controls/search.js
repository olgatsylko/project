const BaseObject = require ('../baseObject');

class Search extends BaseObject {
    // get searchResults() {
    //     return this.ph.page.$$('search-item-api-method-name');
    // }


    // get searchContent() {
    //     return this.ph.page.$$('a[href*="elementhand"]');
    // }

    get searchInput(){
        return this.ph.page.$('input#txtSearch');

    }
}

module.exports = Search;