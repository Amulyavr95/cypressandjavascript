Feature: Photocommerce
    @scenario1 @reg
    Scenario Outline: user regestration for photocommerce

    Given load the photocommerce url as "<urls>"
    When user sets the values in the photocommerce webpage
            | name     | amulya             |
            | email    | amulyavr@gmail.com |
            | password | vr                 |
            
    When Select the CheckBox for the required value
            | Check me out if you Love IceCreams! |
 
        When Select the required value from DropDown
            | Female |
 
        When Select the required Employement fields
            | Employed |
 
        When Click on the submit button
 
        Then validate the headervalues in the photocommerce page
           |successmsg | Success! |
   

    Examples:
             | urls                                            |
             | https://rahulshettyacademy.com/angularpractice/ |

@scenario2 @smoke
Scenario Outline: user regestration for photocommerce

    Given load the photocommerce url as "<urls>"
    Examples:
             | urls                                             |
             |https://rahulshettyacademy.com/AutomationPractice/|
  @scenario3 @reg
    Scenario Outline: user regestration for photocommerce

    Given load the photocommerce url as "<urls>"
    When user sets the values in the photocommerce webpage
            | name     | ananya             |
            | email    | ananyabr@gmail.com |
            | password | br                 |
            | date     | 2001-12-25         |
    

    Examples:
             | urls                                             |
             | https://rahulshettyacademy.com/angularpractice/ |
