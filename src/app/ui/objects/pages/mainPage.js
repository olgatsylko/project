const BasePage = require ('./basePage');

class MainPage extends BasePage {
    get customBanner() {
        return this.ph.page.$$('.hp-banners-menu-row li>a');
    }
    get recommends(){
        return this.ph.page.$('#recommendations h3');
    }

    get recViewAll() {
        return this.ph.page.$('#recommendations #recommendations-view-all'); 
        //return this.ph.page.$(`a[href*='recommended-for-you?type=2']`)
    }; 

    get recommendFilterButton(){
        return this.ph.page.$('.recommended-filter .active')
    }

    get trending() {
        return this.ph.page.$('#hp-module-trending b');
    }

    get bestSellers() {
        return this.ph.page.$('#hp-module-best-selling b');
    }

    get newArrivals() {
        return this.ph.page.$('#hp-module-new-arrivals h3');
    }

}

module.exports = MainPage;