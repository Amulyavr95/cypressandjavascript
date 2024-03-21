describe('framework ts',()=>{
    let testdata
    before(function(){
        cy.fixture('example').then(data=>{
            testdata=data
        })
    })


    beforeEach(()=>{
        cy.visiturl1()
    })
    it('framework tc',()=>{
        cy.get("input[type='search']").type(testdata.name)
    })
    it('framework tc',()=>{
        cy.get("input[type='search']").type(testdata.name1)
    })
})