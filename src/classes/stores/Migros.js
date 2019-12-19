
import $ from 'jquery';
import Generic from './Generic';
import Axios from 'axios';
import { API } from '../../config';
import {
    unit
} from 'mathjs'


class Migros extends Generic {


    constructor(){
        super()
        this.pageTypes = {
            SINGLEPRODUCTPAGE: 'migros.singleproduct',
            PRODUCTOVERVIEWPAGE: 'migros.productoverview',
            UNKNOWN: 'migros.unknown'
        }
    }
    

    getPageType(){
        if($('.sidebar-product-name').length ===1)
            return this.pageTypes.SINGLEPRODUCTPAGE;
        if($('.mui-js-product-list').length ===1)
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
    getCategoryString(){
        if(!this.product.categoryString){
         this.product.categoryString = $('.mui-breadcrumb li').map(function(){
            return $.trim($(this).text());
         }).get().reduce((a,b)=> {
             return a+' '+b;
         }).toLowerCase()
        }
        return this.product.categoryString
    }
    

    getProductCategory(){
        const cat = this.getCategoryString()
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


    getFoodValues(){
        const getValue = (key) => {
            // select key next element 
            const txt = $('#nutrient-table td').filter(function() { return $(this).text().trim().toLowerCase().indexOf(key.toLowerCase()) >= 0}).first().next().text().trim()
        
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