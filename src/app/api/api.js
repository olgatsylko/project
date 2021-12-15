const BaseApi = require ('./baseApi');
const Image = require ('./endpoints/images/image');
const Catalog = require ('./endpoints/catalog/location');
const ContentPromo = require ('./endpoints/content/contentPromo');
const SearchEp = require ('./endpoints/search/search');
const schema = require ('../api/schemas/schema');

class Api extends BaseApi {
    schema = schema;
    get image (){
        return this.createGetter(Image);
    }

    get content() {
        return this.createGetter(ContentPromo);
    }

    get catalog() {
        return  this.createGetter(Catalog);
    }
    get srchEndP(){
        return  this.createGetter(SearchEp);
    }

}

module.exports = Api;