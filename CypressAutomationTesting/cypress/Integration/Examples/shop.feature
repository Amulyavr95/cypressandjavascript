Feature: shop website


    Scenario Outline:  shopping product in shop webpage
        Given visit "<urls>" of shop website
        When add any product to cart
            | product  | Blackberry |
            | product1 | iphone X   |
        When checkout the added product
        When checkout the finally selected products
        When enter the location 
             |place|banglore|
        When select the chekbox
            
        # Then validate the headervalues in the shop webpage
        #     | checkoutmsg  | Blackberry |
        #     | checkoutmsg1 | iphone X   |
        Examples:
            | urls                                                |
            | https://rahulshettyacademy.com/angularpractice/shop |