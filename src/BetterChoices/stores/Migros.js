import $ from 'jquery';
import Generic from './Generic';
import {
    unit,
    multiply
} from 'mathjs'
import {
    convertPrice
} from '../CurrencyConverter';
import { ImmortalDB } from 'immortal-db';


/**
 *
 *
 * @class Migros 
 * @extends {Generic}
 */
class Migros extends Generic {


    /**
     * Creates an instance of Migros.
     * Override default pagetypes classes to be detected 
     * @memberof Migros
     */
    constructor() {
        super()
        this.pageTypes = {
            SINGLEPRODUCTPAGE: 'migros.singleproduct',
            PRODUCTOVERVIEWPAGE: 'migros.productoverview',
            UNKNOWN: 'migros.unknown'
        }

    }

    /**
     *
     *
     * @param {*} u    url to filter list items
     * @returns list item
     * @memberof Migros
     */
    listItemFromHref(u) {
        return $("body").find(".mui-product-tile").filter(function () {
            return $(this).attr("href") == u;
        }).first()
    }

    /**
     *
     *
     * @param {*} u    url to filter list items
     * @returns parent for badge in the list item
     * @memberof Migros
     */
    listItemTargetFromHref(u) {
        return this.listItemFromHref(u).find('.mui-js-rating').html("")
    }



    /**
     * Page type from classes in DOM
     *
     * @returns one of this.pageTypes
     * @memberof Migros
     */
    getPageType() {
        console.log($('.sidebar-product-name').length, $('.mui-lazy-load-product').length)
        if ($('.sidebar-product-name').length > 0)
            return this.pageTypes.SINGLEPRODUCTPAGE;
        if ($('.mui-lazy-load-product').length > 0)
            return this.pageTypes.PRODUCTOVERVIEWPAGE;

        return this.pageTypes.UNKNOWN;
    }



    /**
     * Retrieve GTIN from page
     *
     * @returns GTIN
     * @memberof Migros
     */
    getGTIN(customBody = false) {
        // get gtin from more info panel
        const GTIN = parseInt($(customBody || 'body').find('.table-additional-information td').filter(function (i) {
            return $(this).prev().text() === 'GTIN'
        }).first().text().split(",")[0])

        if(!this.products[GTIN])
            this.products[GTIN] = {};

        return GTIN
    }

    /**
     * Parse DOM for category string
     *
     * @param {boolean} [customBody=false]
     * @returns category string
     * @memberof Migros
     */
    getCategoryString(customBody = false) {
        // GTIN
        const GTIN = this.getGTIN(customBody);
        if (!this.products[GTIN].categoryString) {
            this.products[GTIN].categoryString = $(customBody || 'body').find('.mui-breadcrumb li').map(function () {
                return $.trim($(this).text());
            }).get().reduce((a, b) => {
                return a + ' ' + b;
            }).toLowerCase()
        }
        return this.products[GTIN].categoryString
    }


    /**
     * retrieve category from category string
     *
     * @param {boolean} [customBody=false]
     * @returns category
     * @memberof Migros
     */
    getProductCategory(customBody = false) {
        const GTIN = this.getGTIN(customBody);
        const cat = this.getCategoryString(customBody);


        if (cat.indexOf('mineralwasser') >= 0)
            this.products[GTIN].category = 'water';
        else if (cat.indexOf('getränke heiss & kalt') >= 0)
            this.products[GTIN].category = 'drink';
        else if (cat.indexOf('joghurt & joghurtdrinks') >= 0)
            this.products[GTIN].category = 'joghurt';
        else if (cat.indexOf('käse') >= 0)
            this.products[GTIN].category = 'cheese';
        else if (cat.indexOf('lebensmittel') >= 0)
            this.products[GTIN].category = 'food'

        return this.products[GTIN].category || 'unknown';
    }

    /**
     * select all urls from list overview
     *
     * @returns array of urls
     * @memberof Migros
     */
    getUrlsFromOverview() {
        let urls = [];
        $('.mui-product-tile').each(function () {
            urls.push($(this).attr("href"))
        })
        return urls
    }

    /**
     * Wrapper function to iteratively convert prices in list
     *
     * @memberof Migros
     */
    changePriceList() {
        const $this = this;
        $('.mui-lazy-load-product:first').find(".mui-product-tile:not(.updatedBetterFoodChoice)").each(function () {
            $this.changePrice(
                $(this).find(".mui-product-tile-price"),
                $(this).find('.mui-product-tile-original-price'),
                $(this).find('.mui-product-tile-discount-image-container')
            )
            $(this).addClass('updatedBetterFoodChoice')
        })
    }

    getAddToCartButton(element){
        if(!element)
            return $(".sidebar-product-information").find(".mui-shoppinglist-add").first()
        return element.find('.mui-shoppinglist-button-add')
    }


    /**
     * Convert price of a product based on region
     * Take as parameters custom selectors so it works
     * both for list overview and single page
     *
     * @param {boolean} [customPriceEl=false]
     * @param {boolean} [customUsualPriceEl=false]
     * @param {boolean} [customDiscountContainer=false]
     * @memberof Migros
     */
    async changePrice(customPriceEl = false, customUsualPriceEl = false, customDiscountContainer = false) {

        const userCountry = await ImmortalDB.get("bfc:country");

        const currentPriceEl = customPriceEl || $('.current-price');
        const usualPriceEl = customUsualPriceEl || $('.usual-price');
        const discountContainer = customDiscountContainer || $('.sidebar-discount-badge');

        let currentPrice_chf = currentPriceEl.text().replace('.-', '').replace('-', '').trim();
        currentPrice_chf = parseFloat(currentPrice_chf);
        currentPrice_chf = ((currentPrice_chf * 10).toFixed(0) / 10).toFixed(2);

        const currentPrice_eur = convertPrice(currentPrice_chf)

        if (userCountry === 'de')
            currentPriceEl.text('€ ' + currentPrice_eur)

        let usualPrice_chf = usualPriceEl.text().replace('.-', '').replace('-', '').replace('statt', '').trim();
        usualPrice_chf = parseFloat(usualPrice_chf)

        // discount
        if (usualPrice_chf) {
            const usualPrice_eur = convertPrice(usualPrice_chf);
            const percent = ((1 - currentPrice_chf / usualPrice_chf) * 100).toFixed(0);

            if (userCountry == 'de')
                usualPriceEl.text('statt ' + usualPrice_eur)

            // badge
            discountContainer.html(
                $("<div>").css({
                    background: 'linear-gradient(130deg, #ffb696,#ff4d00, #ff4d00, #ffb696)',
                    fontSize: '35px',
                    color: 'white',
                    display: 'inline-block',
                    fontFamily: "Helvetica Neue Condensed,Impact,arial,sans-serif",
                    fontWeight: 'bold',
                    lineHeight: 1,
                    margin: '30px 0 10px 0',
                    padding: "5px 10px 5px 10px",
                    boxShadow: "5px 5px 5px darkgrey",
                    transform: "rotate(-5deg)"
                }).text(percent + '%')
            )
        }
    }


    /**
     * Get values to calculate score from customBody (for product list) or from page
     *
     * @param {boolean} [customBody=false]
     * @returns object of values
     * @memberof Migros
     */
    getFoodValues(customBody = false) {
        const getValue = (key) => {
            // select key next element 
            const txt = $(customBody || "body")
                .find('td')
                .filter(function () { // take right td
                    return $(this).text().trim().toLowerCase().indexOf(key.toLowerCase()) >= 0
                })
                .first()
                .next() // take next td
                .text().trim().replace('%', 'g') // trim and change % to g since math do not recognize %

            // default value with unit
            if (!txt || txt.length === 0 || txt.indexOf('<') >= 0)
                return unit(0, 'g')

            // take number convert to math object for easy manipulation
            // https://mathjs.org/docs/datatypes/units.html
            return unit(txt.split(' ')[0] + ' ' + txt.split(' ')[1])
        }

        // values
        const energy = getValue('Energie');
        const acids = getValue('davon gesättigte Fettsäuren');
        const sugar = getValue('davon Zucker');
        const fibers = getValue('Ballaststoffe');
        const protein = getValue('Eiweiss');
        const fruitvegetables = getValue('Fruchtgehalt');

        // convert salt to sodium 
        const sodium = multiply(getValue('Salz'), .4).toNumber('g') > getValue('Natrium').toNumber('g') ? multiply(getValue('Salz'), .4) : getValue('Natrium');

        // TO ASK WHY FRUIT 0
        console.log({
            energy,
            acids,
            sugar,
            fibers,
            protein,
            sodium,
            fruitvegetables
        })
        return {
            energy,
            acids,
            sugar,
            fibers,
            protein,
            sodium,
            fruitvegetables
        }
    }

    /**
     * get badge parent for single page product
     *
     * @returns
     * @memberof Migros
     */
    getBadgeParent() {
        return $('#info').first()
    }

    /**
     * get product data from page
     *
     * @param {boolean} [customBody=false]
     * @returns
     * @memberof Migros
     */
    getProductData(customBody = false){
        const $body = $(customBody || document);
        return {
            name: $body.find('.sidebar-product-name').first().text(),
            price: $body.find('.current-price').first().text(),
            img: $body.find('.product-stage-slider-image').first().attr("data-src")
        }
    }


    /**
     * Clean page for study from ads etc
     *
     * @memberof Migros
     */
    clean() {
        // Single Product Page
        // Remove Availability Information
        $('.sidebar-availability-store-information, .sidebar-product-availability').remove()

        // Remove Add to Favorite 
        $('.sidebar-favorite-button-container').remove()



        // Category Overview Page
        $(`
            .js-banner-1,
            .js-banner-2,
            .bg-wooden,
            .mui-share-buttons,
            .mui-footer-list-container,
            .mui-footer-link-area,
            .sidebar-teaser,
            .sidebar-retailer,
            .retailer-tabs,
            .mui-teaser-picture-desktop,
            .js-no-preferred-store,
            .mui-favorite-button ,
            .community-tabs-pane,
            .bg-wooden,
            .mui-share-buttons,
            .mui-footer-list-container,
            .mui-footer-link-area
        `).remove()
    }
}

export default Migros