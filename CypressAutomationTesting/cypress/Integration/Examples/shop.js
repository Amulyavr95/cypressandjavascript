import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import shoppage from "./shoppage";


Given("visit {string} of shop website", function (urls) {
        cy.visit(urls)
    });
    When("add any product to cart", function (product) {
        shoppage.product(product)
        });

    When("checkout the added product", function () {
            shoppage.checkout()
            });
     When("checkout the finally selected products", function () {
               shoppage.checkout2()
        });
        When("enter the location", function (place) {
            shoppage.location(place)
     });
     When("select the chekbox", function () {
            shoppage.checkbox()
        });
 

            // Then("validate the headervalues in the shop webpage", function (checkoutmsg) {
            //    shoppage.checkoutmsg(checkoutmsg)
            //     });