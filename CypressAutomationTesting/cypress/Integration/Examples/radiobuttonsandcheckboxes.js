describe('radiobuttons and checkboxes',()=>{
    it('radio buttons',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("input[value='radio1']").should('be.visible')
        cy.get("input[value='radio2']").should('be.visible')

        cy.get("input[value='radio1']").check().should('be.checked')
        cy.get("input[value='radio2']").check().should('be.checked')


    })

    it('checkbox',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get("input[type='checkbox']").check(['option2']).should('be.checked')
        cy.get("input[type='checkbox']").first().check().should('be.checked')
        cy.get("input[type='checkbox']").last().check().should('be.checked')
        cy.get("input[type='checkbox']").first().uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check().should('be.checked')
        cy.get("input[type='checkbox']").uncheck().should('not.be.checked')

        
        

    })
})