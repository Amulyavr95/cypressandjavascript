import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import searchdata from "./searchdata";
import page from "./pagedata";

// Given('load the greenkart url website',function(){
//     cy.visit(Cypress.env('url'))
// })

// Given("load the greenkart website", function (dataTable) {
//        cy.visit(dataTable.rawTable[0][0])
//     });

Given("load the greenkart url website {string}", function (urls) {
    cy.visit(urls)
    });

// When('search for the product Ca in search menu',function(){
//     searchdata.search.type('Ca')
// })
 When("search for the product {string} in search menu", function (searchvalue) {
     searchdata.search.type(searchvalue)
     });

     When("select the perticular {string} and perform add to cart function", function (product) {
        cy.addtocart(page.containerSelector,  page.productNameLocator,product, page.buttonLocator)

        });

Then('validate the product length matches with the given value',function(){
    cy.get(".products .product").should('be.visible').should('have.length',4)

})

When("search for the product {string} as {string} in greenkart web page", function (locatorname,value) {
     page.externalfield(locatorname,value)
    });