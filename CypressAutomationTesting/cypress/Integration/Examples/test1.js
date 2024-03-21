///<reference types="cypress"/>

describe('My first test' ,function(){

    it('visiting green cart' ,() => {
        cy.visiturl1()
        //cy.get("input[type='search']").type('CA').should('have.length',4)
        cy.get("input[type='search']").type('CA')
        cy.get(".products .product").should('be.visible').should('have.length',4)

        //find
       // cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click()
        //cy.get(".products").find(".product").eq(3).contains("ADD TO CART").click()

        cy.get(".products").find(".product").each(($e1,index,$list) =>{
            const textveg =$e1.find(".product-name").text()
            if(textveg.includes("Carrot")){
                $e1.find('button').click()
            }

        })
        
        
        
    }

    )
}
)