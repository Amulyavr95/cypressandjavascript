import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import photocommercepage from "./photocommercepage";

Given("load the photocommerce url as {string}", function (urls) {
        cy.visit(urls)
    });
    When("user sets the values in the photocommerce webpage", function (Valuetoenter) {
        photocommercepage.setDataValue(Valuetoenter)
        });

        When("Select the CheckBox for the required value", function (checkBoxValue) {
            photocommercepage.selectCheckBox(checkBoxValue)
        });
   
   When("Select the required value from DropDown", function (dropDownValue) {
          photocommercepage.selectDropDown(dropDownValue.rawTable[0][0])
      });
   
  When("Select the required Employement fields", function (radioButtonValue) {
          photocommercepage.selectRadioButton(radioButtonValue.rawTable[0][0])
          //photocommerce.selectBirthDate()
      });
   
  When("Click on the submit button", function () {
          photocommercepage.clickSubmitButton()
      });
   
      Then("validate the headervalues in the photocommerce page", function(headervalues) {
        photocommercepage.headervalues(headervalues)
        });