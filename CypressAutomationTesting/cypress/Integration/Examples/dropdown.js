describe('dropdown',()=>{
    it.skip('with select',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')

    })

    it.skip('without select',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('italy')
        cy.get('#autocomplete').each(($e1,index,$list)=>{
            if($e1.text()=='italy'){
                $e1.click()
            }
        })
        cy.get('#autocomplete').should('have.value','italy')

    })

    it('autosuggesstion',()=>{
        cy.visit('https://www.google.co.in/')
        cy.get('div.a4bIc').type('cypress automation')
        cy.get('div.wM6W7d>span').each(($e1,index,$list)=>{
            if($e1.text()=='cypress automation tutorial'){
                cy.wrap($e1).click()

            }
        })
    })
})




