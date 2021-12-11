const BaseApi = require ('./baseApi');
const Image = require ('./endpoints/images/image');
const Location = require ('./endpoints/catalog/location');
const contentPromo = require ('./endpoints/content/contentPromo');
const schema = require ('../api/schemas/schema');

class Api extends BaseApi {
    schema = schema;
    get image (){
        return this.createGetter(Image);
    }

    get content() {
        return this.createGetter(contentPromo);
    }

    get catalogCCL() {
        return  this.createGetter(Location);
    }
}

module.exports = Api;