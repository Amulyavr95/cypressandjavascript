///<reference types="cypress"/>
describe('dynamic dd test suite',function() 
{
    it('test for daynamic dd',function(){

        cy.visiturl()
        cy.get('.ui-autocomplete-input').type('ind')
        cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
            if($e1.text()=='India'){
                $e1.click()
            }
        })

        cy.selectcheckboxandradiobutton("input[value='radio1']").click()

        cy.get('#displayed-text').should('be.visible')
        cy.get("input[value='Hide']").click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get("input[value='Show']").click()
        cy.get('#displayed-text').should('be.visible')
        

        
    })

})