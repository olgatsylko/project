const BaseApi = require ('../../baseApi');

class Image extends BaseApi {
    async getImage(){
        return this.get('https://s3.images-iherb.com/static/f/lato-regular-v2.woff2');
    }
}

module.exports = Image;

