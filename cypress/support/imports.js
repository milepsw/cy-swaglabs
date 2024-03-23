// Pages
import Common from '../page-objects/components/common.js';
import LoginPage from '../page-objects/pages/loginPage.js';
import ProductsPage from '../page-objects/pages/productsPage.js';
import ProductsDetailPage from '../page-objects/pages/productDetailPage.js';
import CartPage from '../page-objects/pages/cartPage.js';
import YourInfoPagePage from '../page-objects/pages/yourInfoPage.js';
import OverViewPage from '../page-objects/pages/overviewPage.js';
import FinishPage from '../page-objects/pages/finishPage.js';
// Test data
import loginData from '../test-data/loginData.json';
import productsData from '../test-data/productsData.json';
// ***************************************************************************************************************************************************************
// Load environment-specific variables
const state = Cypress.env('state');
const config = require('../../cypress.env.json')[state];
const baseUrl = config.baseUrl;
const username = config.username;
const password = config.password;
// Keywords
const common = new Common()
const loginPage = new LoginPage()
const productsPage = new ProductsPage()
const productDetailPage = new ProductsDetailPage()
const cartPage = new CartPage()
const yourInfoPage = new YourInfoPagePage()
const overviewPage = new OverViewPage()
const finishPage = new FinishPage()
// ***************************************************************************************************************************************************************
export { 
    // Env
    baseUrl, username, password, 
    // Page
    common, loginPage, productsPage, productDetailPage, cartPage, yourInfoPage, overviewPage, finishPage, 
    // Test data
    loginData, productsData
};
// ***************************************************************************************************************************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')