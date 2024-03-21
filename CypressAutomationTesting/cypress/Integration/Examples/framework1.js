import searchdata from "./searchdata";
let testdata
describe('Framework1',()=>{
    before(function(){
        cy.fixture('example').then(data=>{
            testdata=data
        })
    })
    it('framework1',()=>{
        cy.visit(Cypress.env('url'))
        searchdata.search.type(testdata.name)
    })
})