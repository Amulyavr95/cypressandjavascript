describe('test suite',function(){
    it('checkbox test',function(){

        //checkbox
        cy.visiturl('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('input#checkBoxOption1').check().should('be.checked')
        // cy.get("input[type='checkbox']").check(['option2','option3'])
    //     cy.get("input[type='checkbox']").each(($e1,index,$list)=>{
               
    //     if($e1.text()=='Option2'){
    //         $e1.check()
    //     }
    //  })
        //cy.get('select#dropdown-class-example').select('Option1').should('have.value','option1')
        // cy.selectcheckbox('input#checkBoxOption1')
        // cy.selectdropdown('select#dropdown-class-example','option1')
        cy.waitelement('select#dropdown-class-example').select('Option1')
    })
}
   
)