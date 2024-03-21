// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="Cypress"/>
///<reference types="cypress-xpath"/>
Cypress.Commands.add('visiturl',(url)=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
})
Cypress.Commands.add('visiturl1',(url)=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})
Cypress.Commands.add('selectcheckboxandradiobutton',(checkboxlocator)=>
{
    cy.get(checkboxlocator).check().should('be.checked')
}
)

Cypress.Commands.add('selectdropdown',(dropdownlocator,value)=>{
    cy.get(dropdownlocator).select(value).should('have.value',value)
})

Cypress.Commands.add('waitelement',(locator,timeout=30000)=>{
    cy.get(locator,{timeout}).should('be.visible')
})

Cypress.Commands.add('addtocart',(containerSelector, productNameLocator, product,buttonLocator) =>{
    containerSelector.each(($e1, index, $list) => {
        const textveg = $e1.find(productNameLocator).text();
        if (textveg.includes(product)) {
            $e1.find(buttonLocator).click();
        }
    });
})

Cypress.Commands.add('SelectDropdown',(dropdownlocator,value)=>{
    cy.get(dropdownlocator).select(value)
})
 
//Command to slect a particular checkBox
Cypress.Commands.add('SelectCheckBox',(locator)=>{
    cy.get(locator).check() 
})
 
//Command to click on element
Cypress.Commands.add('ClickButton',(locator)=>{
    cy.get(locator).click()
})
 
//Command to traverse through multiple radio button
Cypress.Commands.add('SelectRadioButton',(labelLocator,radioButtonLocator,value)=>{
    cy.get(labelLocator).each(($ele,index,$list)=>{
        if($ele.text().includes(value))
        {
            cy.wrap($ele).parent().find(radioButtonLocator).click();
        }
    })
})
 
Cypress.Commands.add('validate',(locator,expectedvalue)=>{
    // cy.get(locator).then(function(textvalue){
    //     expect(textvalue.text().trim()).to.equal(expectedvalue)
    cy.get(locator).each(($ele,index,$list)=>{
        let textvalue=$ele.text()
            expect(textvalue).to.equal(expectedvalue)
    })
})

Cypress.Commands.add('addproduct',(productlocator,addproduct,value)=>{
    productlocator.each(($e1,index,$list)=>{
        if($e1.text().includes(value)){
            cy.wrap($e1).parent().parent().next().find(addproduct).click();
        }
    });
})

Cypress.Commands.add('addlocation',(locator,value)=>{
    cy.get(locator).type(value)
})
  