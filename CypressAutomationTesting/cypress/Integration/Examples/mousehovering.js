describe('MouseHovering',()=>{
    it('mouse hovering',()=>{
        cy.visiturl();
//show()-works on elements hidden with the jquery methods
        //cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('contain','top')
    })
})