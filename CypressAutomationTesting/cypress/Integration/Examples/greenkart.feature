Feature: GreenkartWebsite

    regression or smoke tc
    @smoke
    Scenario Outline: searching product in greenkart website

        # Given load the greenkart url website
        # Given load the greenkart website
        #  |https://rahulshettyacademy.com/seleniumPractise/#/|
        Given load the greenkart url website '<urls>'
        # When search for the product '<searchvalue>' in search menu
        #When select the perticular '<product>' and perform add to cart function
        When search for the product "productname" as "<productvalue>" in greenkart web page
        Then validate the product length matches with the given value

        Examples:
            | urls                                               |productvalue|product|
            | https://rahulshettyacademy.com/seleniumPractise/#/ |CA|Capsicum| 