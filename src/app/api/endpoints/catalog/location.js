const BaseApi = require ('../../baseApi');

class Location extends BaseApi {
    async getLocation(){
        return this.get('https://catalog.app.iherb.com/ccl/location?&_=1639255035101');
    }
}

module.exports = Location;