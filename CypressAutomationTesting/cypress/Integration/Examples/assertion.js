describe('assertions',()=>{
    it('implicit',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        // cy.url().should('include','orangehrmlive')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','opensource')

        
    //     cy.url().should('include','orangehrmlive')
    //    .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     .should('contain','opensource')

    cy.url().should('include','orangehrmlive')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     .and('contain','opensource')

     cy.title().should('include','Orange')
     .should('eq','OrangeHRM')
     .should('contain','HRM')

     cy.get('.orangehrm-login-branding > img').should('be.visible')
     .and('exist')

     cy.xpath('//a').should('have.length',5)

     cy.get("input[placeholder='Username']").type('Admin')

     .should('have.value','Admin')


    })

    it('explicit',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get('.oxd-button').click()

        let expname='Bob kumbimath'
        //let expname='xy'
        cy.get('.oxd-userdropdown-name').then((x)=>{
            let actname=x.text()
            expect(actname).to.equal(expname)
            assert.equal(actname,expname)
            // expect(actname).to.not.equal(expname)
            // assert.notEqual(actname,expname)
        })

        

     })
})