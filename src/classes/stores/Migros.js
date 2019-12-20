
import $ from 'jquery';
import Generic from './Generic';
import Axios from 'axios';
import { API } from '../../config';
import {
    unit
} from 'mathjs'
import { convertPrice } from '../CurrencyConverter';


class Migros extends Generic {


    constructor(){
        super()
        this.pageTypes = {
            SINGLEPRODUCTPAGE: 'migros.singleproduct',
            PRODUCTOVERVIEWPAGE: 'migros.productoverview',
            UNKNOWN: 'migros.unknown'
        }

        this.overviewTarget = $(".mui-lazy-load-product").first()[0]
    }

    listItemTargetFromHref(u) {
        return $(".mui-product-tile").filter(function(){
            return $(this).attr("href") == u;
        }).first().find('.mui-js-rating').html("")
    }
    

    getPageType(){
        if($('.sidebar-product-name').length > 0)
            return this.pageTypes.SINGLEPRODUCTPAGE;
        if($('.mui-lazy-load-product').length > 0)
            return this.pageTypes.PRODUCTOVERVIEWPAGE;

        return this.pageTypes.UNKNOWN;
    }



    // GTIN
    getGTIN(){
        // get gtin from more info panel
        return parseInt($('.table-additional-information td').filter(function(i){
            return $(this).prev().text() === 'GTIN'
        }).first().text().split(",")[0])
    }

    // CATEGORY
    getCategoryString(customBody = false){
        if(!this.product.categoryString){
         this.product.categoryString = $(customBody || 'body').find('.mui-breadcrumb li').map(function(){
            return $.trim($(this).text());
         }).get().reduce((a,b)=> {
             return a+' '+b;
         }).toLowerCase()
        }
        return this.product.categoryString
    }
    

    getProductCategory(customBody = false){
        const cat = this.getCategoryString(customBody)
        if(cat.indexOf('getränke heiss & kalt') <0) 
            this.product.category = 'food';
        if(cat.indexOf('mineralwasser')>=0)
            this.product.category = 'water';
        if(cat.indexOf('joghurt & joghurtdrinks') >=0)
            this.product.category = 'joghurt';
        if(cat.indexOf('käse') >=0)
            this.product.category = 'cheese';
        
        return this.product.category || 'unknown';
    }

    getUrlsFromOverview(){
        let urls = [];
        $('.mui-product-tile').each(function(){
            urls.push($(this).attr("href"))
        })
        return urls
    }

    changePriceList(){
        const $this = this;
        $('.mui-lazy-load-product:first').find(".mui-product-tile:not(.updatedBetterFoodChoice)").each(function(){
            $this.changePrice(
                $(this).find(".mui-product-tile-price"),
                $(this).find('.mui-product-tile-original-price'),
                $(this).find('.mui-product-tile-discount-image-container')
            )
            $(this).addClass('updatedBetterFoodChoice')
        })
    }


    changePrice(customPriceEl = false, customUsualPriceEl = false, customDiscountContainer = false){

        const userCountry = localStorage.getItem("CountryName");

        const currentPriceEl = customPriceEl || $('.current-price');
        const usualPriceEl = customUsualPriceEl || $('.usual-price');
        const discountContainer = customDiscountContainer || $('.sidebar-discount-badge');

        let currentPrice_chf = currentPriceEl.text().replace('-','').trim();
        currentPrice_chf = parseFloat(currentPrice_chf);
        currentPrice_chf = ((currentPrice_chf*10).toFixed(0)/10).toFixed(2);

        const currentPrice_eur = convertPrice(currentPrice_chf)

        if(userCountry === 'Germany')
            currentPriceEl.text('€ '+currentPrice_eur)

        const usualPrice_chf = usualPriceEl.text().replace('statt','').trim();

        // discount
        if(usualPrice_chf && usualPrice_chf.length > 0){
            const usualPrice_eur = convertPrice(usualPrice_chf);
            const percent = ((1-currentPrice_chf/usualPrice_chf)*100).toFixed(0);

            if(userCountry == 'Germany')
                usualPriceEl.text('statt '+usualPrice_eur)

            // badge
            discountContainer.html(
                $("<div>").css({
                    background:'linear-gradient(130deg, #ffb696,#ff4d00, #ff4d00, #ffb696)',
                    fontSize: '35px',
                    color: 'white',
                    display: 'inline-block',
                    fontFamily: "Helvetica Neue Condensed,Impact,arial,sans-serif",
                    fontWeight: 'bold',
                    lineHeight: 1,
                    margin:'30px 0 10px 0',
                    padding: "5px 10px 5px 10px",
                    boxShadow: "5px 5px 5px darkgrey",
                    transform: "rotate(-5deg)"
                }).text(percent+'%')
            )
        }
    }


    getFoodValues(customBody = false){
        const getValue = (key) => {
            // select key next element 
            const txt = $(customBody || "body").find('#nutrient-table td').filter(function() { return $(this).text().trim().toLowerCase().indexOf(key.toLowerCase()) >= 0}).first().next().text().trim()
        
            if (!txt || txt.length === 0 || txt.indexOf('<') >= 0)
                return unit(0,'g')
        
            // take number convert to math object for easy manipulation
            // https://mathjs.org/docs/datatypes/units.html
            return unit(txt.split(' ')[0] + ' ' + txt.split(' ')[1])
        }

        // energy
        const energy = getValue('Energie');
        const acids = getValue('davon gesättigte Fettsäuren');
        const sugar = getValue('davon Zucker');
        const fibers = getValue('Ballaststoffe');
        const protein = getValue('Eiweiss');
        const sodium = getValue('Salz');
        const natrium = getValue('Natrium');

        // TO ASK WHY FRUIT 0
        return {
            energy,acids,sugar,fibers,protein,sodium,natrium, fruitvegetables: unit(0,'g')
        }
    }

    getBadgeParent(){
        return $('#info').first()
    }


    // clean website for the study
    clean(){
        // Single Product Page
        // Remove Availability Information
        $('.sidebar-availability-store-information, .sidebar-product-availability').remove()
        
        // Remove Add to Favorite 
        $('.sidebar-favorite-button-container').remove()



        // Category Overview Page
        $(`
            .widget-ratings.clearfix,
            .clearfix.mui-list-unstyled,
            .mui-panel.panel-border-top,
            .section-bottom-md-padding,
            .section-bottom-padding,
            .container.section-bottom-padding,
            .mui-share-buttons.mui-js-share-buttons.share-buttons,
            .community-tabs-container,
            .mui-js-community-reviews.js-community-loaded,
            .section-bottom-padding.bg-light.js-related-products,
            .section-bottom-padding.bg-white.related-container.container,
            .mui-button.mui-message-list-load-all.mui-js-message-list-load-all-trigger.mui-js-load-all-reviews,
            .section-bottom-padding.last-seen-products.js-last-seen-products,
            .mui-rating.is-small,
            .mui-js-rating.mui-product-tile-rating.mui-js-rating-loaded,
            .mui-ratings-rating-star.star-on-png,
            .mui-product-tile-discount-image-container,
            .mui-product-tile-footer,
            .retailer-tab.retailer-tab-melectronics,
            .retailer-tab.retailer-tab-sportxx,
            .retailer-tab.retailer-tab-micasa,
            .retailer-tab.retailer-tab-doitgarden,
            .retailer-tab.retailer-tab-interio,
            .retailer-tabs.tab-navigation,
            .listing-switcher-link,
            .sidebar-teaser,
            .listing-switcher,
            .sidebar-discount-badge,
            section-bottom-padding,
            .row.mui-footer-list-container,
            .row.mui-footer-link-area,
            .mui-list-unstyled.retailer-tabs.clearfix.retailer-tabs-6
        `).remove()
    }
}

export default Migros