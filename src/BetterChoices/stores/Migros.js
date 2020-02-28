import $ from 'jquery';
import Generic from './Generic';
import {
    unit,
    multiply
} from 'mathjs'
import {
    convertPrice
} from '../CurrencyConverter/index';
import {
    settings
} from '../../config';
import {
    getCookie,
    setCookie
} from '../../utils/cookies';
import {
    indexOfMany
} from '../../utils';
import pageCategoriesJSON from './data/pageCategories.json'
import Storage from '../../utils/storage';
import shortid from 'shortid';

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

    getClosestListItem(el){
        return el.closest('.mui-product-tile')
    }

    setDefaultRegion() {
        // check region
        if (getCookie('m-product-region-temporary-cooperative') !== 'gmos') {
            setCookie('m-product-region-temporary-cooperative', 'gmos');
            window.location.reload()
        }
    }

    setDefaultOrdering() {
        // delete options
        const select = $(".js-sort-articles-select");
        
        if (select.length && select.val().indexOf('name_asc') <0) {
            window.location.href = select.find("option").filter(function () {
                return $(this).attr("value").indexOf('name_asc') > -1 ? true : false;
            }).first().attr("value")
        }
        $('.js-sorting-container').remove()
    }

    hideProducts(){
        const $el = $('<div />').addClass("bfcHideProd").html("<p>Loading</p>")
        $('.mui-product-tile:not(.updatedBetterFoodChoice)').append($el);
        // $('.mui-product-tile:not(.updatedBetterFoodChoice)').css({opacity:0})
    }

    changeLogoLink(){
        $(".logo").closest("a").attr("href",'https://www.migros.ch/de/einkaufen.html')
        $('#skip-navmain a').attr("href", 'https://www.migros.ch/de/einkaufen.html')
        $('.mui-breadcrumb li:first a').attr("href", 'https://www.migros.ch/de/einkaufen.html')
        $('.category-browser')
    }

    /**
     *
     *
     * @param {*} u    url to filter list items
     * @returns parent for badge in the list item
     * @memberof Migros
     */
    listItemTargetFromHref(u) {
        return this.listItemFromHref(u).find('.mui-product-tile-footer')
    }



    /**
     * Page type from classes in DOM
     *
     * @returns one of this.pageTypes
     * @memberof Migros
     */
    getPageType() {
        if ($('.mui-lazy-load-product').length > 0)
            return this.pageTypes.PRODUCTOVERVIEWPAGE;

        if ($('.sidebar-product-name').length > 0)
            return this.pageTypes.SINGLEPRODUCTPAGE;

        return this.pageTypes.UNKNOWN;
    }

    getPageCategory() {
        const type = this.getPageType();
        switch (type) {
            case this.pageTypes.PRODUCTOVERVIEWPAGE:
                for (let [key, value] of Object.entries(pageCategoriesJSON)) {
                    for (let u of value) {
                        if (window.location.href.indexOf(u) > -1)
                            return key
                    }
                };
                return 'other'
            case this.pageTypes.SINGLEPRODUCTPAGE:
                return this.getProductCategory();
        }
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

        if (!this.products[GTIN])
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

    getCategoryStringLinks(customBody = false) {
        const GTIN = this.getGTIN(customBody);
        if (!this.products[GTIN].categoryStringLinks) {
            this.products[GTIN].categoryStringLinks = $(".mui-breadcrumb-link").map(function () {
                return $.trim($(this).attr("href"))
            }).get().reduce((a, b) => {
                return a + ' ' + b;
            }).toLowerCase()
        }
        return this.products[GTIN].categoryStringLinks
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

        if (!indexOfMany(cat, ['alimentari', 'lebensmittel', 'denrées alimentaires'])) {
            return 'unknown';
        }

        if (indexOfMany(cat, ['acqua minerale', 'mineralwasser', 'eau minérale']))
            this.products[GTIN].category = 'water';

        else if (indexOfMany(cat, ['getränke heiss & kalt', 'bevande calde e fredde', 'boissons chaudes & froides']))
            this.products[GTIN].category = 'drink';

        else if (indexOfMany(cat, ['käse', 'fromages', 'formaggi']))
            this.products[GTIN].category = 'cheese';

        else if (indexOfMany(cat, ['latticini e uova', 'milchprodukte & eier', 'produits laitiers & œufs']))
            this.products[GTIN].category = 'milk, cheese, eggs';

        else if (indexOfMany(cat, ['viande', 'carne', 'fleisch']))
            this.products[GTIN].category = 'meat';

        else if (indexOfMany(cat, ['fisch & meeresfrüchte', 'poisson & fruits de mer', 'pesce e frutti di mare']))
            this.products[GTIN].category = 'fish';

        else {
            let abort = false;
            const links = this.getCategoryStringLinks(customBody);
            // check links
            for (let [key, values] of Object.entries(pageCategoriesJSON)) {
                for (let c of values) {
                    if (links.indexOf(c) > -1 && !abort) {
                        this.products[GTIN].category = key;
                        abort = true;
                    }
                }
            }
        }


        return this.products[GTIN].category || 'food'
    }

    /**
     * select all urls from list overview
     *
     * @returns array of urls
     * @memberof Migros
     */
    getUrlsFromOverview() {
        let urls = [];
        $('.mui-product-tile:not(.updatedBetterFoodChoice)').each(function () {
            urls.push($(this).attr("href"))
        })
        return urls
    }

    editUrlsFromOverview() {
        $('.mui-product-tile:not(.updatedBetterFoodChoice)').each(function () {
            // remove buttons
            // const $button = $(this).find('.mui-js-shoppinglist-item-add').clone(false, false);
            $(this).find('.mui-product-tile-footer').html($('<div class="mui-js-shoppinglist-item-add-bfc"><button class="bfcAddToCartList">+</button></div>'))
            $(this).attr("bfcid", shortid.generate())
            $(this).addClass('updatedBetterFoodChoice')
        })
    }

    /**
     * Wrapper function to iteratively convert prices in list
     *
     * @memberof Migros
     */
    changePriceList(el, cat) {
            this.changePrice(
                el.find(".mui-product-tile-price"),
                el.find('.mui-product-tile-original-price'),
                el.find('.mui-product-tile-discount-image-container'),
                cat
            )
            el.find(".bfcHideProd").fadeOut().remove()
      
    }

    getAddToCartButton(element) {
        if (!element)
            return $(".sidebar-product-information").find(".mui-shoppinglist-add")
        return element.find('.mui-js-shoppinglist-item-add-bfc')
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
    async changePrice(customPriceEl = false, customUsualPriceEl = false, customDiscountContainer = false, category) {

        const userCountry = await Storage.get("bfc:country");

        const currentPriceEl = customPriceEl || $('.current-price');
        const usualPriceEl = customUsualPriceEl || $('.usual-price');
        const discountContainer = customDiscountContainer || $('.sidebar-discount-badge');

        // prevent nan
        if(currentPriceEl.length ===0){
            return
        }
            

        let currentPrice_chf = currentPriceEl.text().replace('.-', '').replace('CHF','').replace("€",'').replace("ab",'').replace("Nan",'').replace('-', '').trim();
        currentPrice_chf = parseFloat(currentPrice_chf).toFixed(2);

        const currentPrice_eur = convertPrice(currentPrice_chf, category)

        if (userCountry === 'de')
            currentPriceEl.text('€ ' + currentPrice_eur)
        else 
            currentPriceEl.text('CHF '+currentPrice_chf)

        currentPriceEl.addClass("updated")

        let usualPrice_chf = usualPriceEl.text().replace('statt', '').replace('.-', '').replace('CHF','').replace("€",'').replace("ab",'').replace("Nan",'').replace('-', '').trim();
        usualPrice_chf = parseFloat(usualPrice_chf)



        // discount
        if (usualPrice_chf && settings.showDiscount) {
            const usualPrice_eur = convertPrice(usualPrice_chf, category);
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
        } else {
            discountContainer.html("")
            usualPriceEl.text("")
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
                .find('#nutrient-table td')
                .filter(function () { // take right td
                    for (let a of key) {
                        if ($(this).text().trim().toLowerCase().indexOf(a.toLowerCase()) >= 0)
                            return true
                    }
                    return false
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
        const energy = getValue(['Energie', 'Energia', 'Énergie']);
        const acids = getValue(['davon gesättigte Fettsäuren', 'dont acides gras', 'di cui acidi grassi saturi']);
        const sugar = getValue(['davon Zucker', 'di cui zuccheri', 'dont Sucres']);
        const fibers = getValue(['Ballaststoffe', 'Fibre alimentari', 'Fibres alimentaires']);
        const protein = getValue(['Eiweiss', 'Proteine', 'Protéines']);
        const fruitvegetables = getValue(['Fruchtgehalt']); //TODO missing translations for fruits and natrium

        // convert salt to sodium 
        const sodium = multiply(getValue(['Sale', 'Salz', 'Sel']), .4).toNumber('g') > getValue(['Natrium']).toNumber('g') ? multiply(getValue(['Sale', 'Salz', 'Sel']), .4) : getValue(['Natrium']);

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
    async getProductData(customBody = false) {
        const $body = $(customBody || document);

        const category = this.getProductCategory(customBody);
        let price = $body.find('.current-price').first().text().replace("€",'').replace('.-','').replace('-','').replace("chf",'').replace('CHF','').replace('EUR','').replace('eur','')
        // convert price
        if(await Storage.get("bfc:country") == 'de' && !$('.current-price').hasClass("updated"))
            price = convertPrice(price,category)

        $('.current-price').addClass("updated")
        
        const regex = /(([\d]+)[xX])?([\d.?]+)\s?(l|ml|g|kg|gr|G|GR|ML|L|KG)([\s?.?,?;?])/
        const sizeMatch = regex.exec($body.find(".sidebar-subtext").text()) || regex.exec($body.find('.sidebar-product-name').first().text())
        return {
            category,
            name: $body.find('.sidebar-product-name').first().text().replace(regex,''),
            price,
            nutritionTable: this.getFoodValues(customBody),
            size: sizeMatch ? unit((sizeMatch[2]||1)*sizeMatch[3],sizeMatch[4].toLowerCase()) : false,
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

        // Remove Review and rating (BY JIE)
        $('.mui-rating, .mui-rating-counter').remove()

        // Remove energy-pictogram-box(BY JIE)
        $('.energy-pictogram-box').remove()

        // Category Overview Page
        $(`
            .js-banner-1,
            .discount-stage,
            .js-banner-2,
            .bg-wooden,
            .filter-list.js-boolean-filters,
            .mui-share-buttons,
            .mui-footer-list-container,
            .mui-footer-link-area,
            .sidebar-teaser,
            .sidebar-retailer,
            .retailer-tabs,
            .related-container,
            .listing-switcher li:eq(1),
            #gopt-related-products,
            .container-fluid.is-relative.is-overflow-hidden.is-bg-cover-center-right.bg.is-inverted.is-overlapping-product-trigger,
            .mui-teaser-picture-desktop,
            .js-no-preferred-store,
            .mui-favorite-button ,
            .community-tabs-pane,
            #gopt-last-seen-products,
            .group-discounts-list,
            .group-discounts-container,
            .ui-js-headerbar,
            #layout-02-1655bdda,
            [data-slug='do-it-garden'],
            [data-slug='micasa'],
            [data-slug='melectronics'],
            .is-main-menu,
            .sidebar-discount-badge,
            .bg-wooden,
            .js-filter-widget.filters-container.products-filters,
            .mui-share-buttons,
            .mui-footer-list-container,
            .mui-footer-link-area
        `).remove()
    }
}

export default Migros