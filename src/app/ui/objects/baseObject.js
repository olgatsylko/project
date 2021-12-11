const printer = require ('../../../config/support/logger');
const Base = require ('../../base');

class BaseObject extends Base {
    #ph = require('../pageHolder');

    get ph() {
        return this.#ph;
    }
 
    async getText(element){
       // const text = (await ((await this[element]).evaluate(node => node.innerText)).trim());
        const text = (await ((await this[element]).evaluate(node => node.innerText))).trim();
        printer.print('method', `Element ${element} has text '${text}'`);
        return text;
    }

    async clickByElement(element) {
        let el = await this[element];
        await el.click();

        // let a = await this.#ph.page.$('.iherb-header-cart>a')
        // await a.click();
    }

    async clickBy(elements, textOrPosition){
        let arr = await this[elements];
        if (!Array.isArray(arr)){
            printer.print('Error', 'The method works with just array of elements');
            throw new Error (`Wrong type of 'elements' argument, should be an array`)
        }
        if (typeof textOrPosition === 'number') {
            printer.print('method', `Click on Element ${elements} with position ${textOrPosition}`);
            await arr[textOrPosition].click();
        } else {
            printer.print('method', `Click on Element ${elements} with test ${textOrPosition}`);
            for (let element of arr){
                const text = (await element.evaluate(node => node.innerText)).trim();
                if (text === textOrPosition) {
                    await element.click();
                    break;
                }
            }
        }
    }
}

module.exports = BaseObject;