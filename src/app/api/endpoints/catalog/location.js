const BaseApi = require ('../../baseApi');

class Catalog extends BaseApi {
    async getBlogs(){
        return this.get('https://www.iherb.com/catalog/getlatestblogspartial?isAjax=true');
    }
}

module.exports = Catalog;