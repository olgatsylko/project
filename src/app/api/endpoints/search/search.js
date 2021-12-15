const BaseApi = require ('../../baseApi');

class SearchEp extends BaseApi {
    async getSearchEP(){
        return this.get('https://www.iherb.com/search?kw=Almond%20oil');
    }
}

module.exports = SearchEp;