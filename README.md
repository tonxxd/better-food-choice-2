# Installation Guide

<img src="https://www.autoidlabs.ch/wp-content/uploads/2019/12/1000_700pixs_p1.png"
     alt="A novel chrome extension to discover better food choices in eCommerce environments"
     style="float: left; margin-right: 10px;" />

## Download and Unzip
To install the Google Chrome extension, please download the ZIP of the repository.
Unzip the archive locally on your machine.

## Set Your Chrome Browser to Developer Mode
On Google Chrome type : chrome://extensions/. Enable the developer mode (right top of the browser). 

## Install the 'better-food-choices' Chrome Extension
Press the 'Load Unpacked' Button and select the **build** folder inside the ZIP you just downloaded. 
The Extension is now installed on your Chrome Browser.

## Go shopping 
Go to https://produkte.migros.ch/ to test the application and discover better food choices! 

# Admin mode
On https://produkte.migros.ch/, click the extension icon to enter the admin mode. You can change your settings there. 

# About the 'better-food-choices' Chrome Extension
This project is a research project of the Auto-ID Labs ETH/HSG (www.autoidlabs.ch). Find out more about the research project here: https://www.autoidlabs.ch/projects/ecommerce-widget-for-nutrition-and-sustainability/ 

The Chrome Extension now works for around 90% of the food and drink products on produkte.migros.ch <br/>
If a product is missing the necessary data for Nutri-Score calculation, an image containing this information is displayed <br/>
It does not yet work for the following type of products: All products with a higher fruit and vegetable score of 40% <br/> <br/>
The files with the name yoghurts.ttl and yoghurts.xml contain the data for roughly 110 yoghurts from Migros <br/>
Java Backend is finished <br/> <br/>
In order to use the extension, the backend has to be running on localhost:8080 as of right now


## BUILD
Make sure to have node and npm installed
Download the repo
From the root folder
`npm watch` and `npm build` to run the development mode and build the package
