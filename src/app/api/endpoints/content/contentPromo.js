const BaseApi = require ('../../baseApi');

class contentPromo extends BaseApi {
    async getPromo(){
        return this.get('https://www.iherb.com/content/categorypromo?lc=en-US&cc=US&isAjax=true&_=1639255035100');
    }
}

module.exports = contentPromo;