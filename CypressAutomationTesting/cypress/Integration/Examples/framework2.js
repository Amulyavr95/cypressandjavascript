import page from "./pagedata"
let testdata
describe('Framework2', () => {
    before(function () {
        cy.fixture('example').then(data => {
            testdata = data
        })
    })

    it('framework2', () => {
        cy.visiturl1()

        page.search.type(testdata.name)

        cy.addtocart(page.containerSelector,  page.productNameLocator, page.buttonLocator,'carrot')
    })
})