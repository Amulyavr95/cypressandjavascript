class shoppage{
    static get productlocator(){
        return cy.get(' app-card-list h4 a')
    }

    static get addcart(){
       return  "button[class='btn btn-info']"
    }

    static get checkoutlocator(){
        return "a[class='nav-link btn btn-primary']"

    }

    static get checkoutlocator2(){
        return "button[class='btn btn-success']"
    }

    static get locationl(){
        return "input[id='country']"
    }

    static get checkbox(){
        return "input[id='checkbox2']"
    }
    
    // static get selectedproduct(){
    //     return ':nth-child(1) > .col-sm-8 > .media > .media-body > h4.media-heading > a'
    //     //'h4.media-heading > a' 
    // }
    // static get selectedproduct1(){
    //     return ':nth-child(2) > .col-sm-8 > .media > .media-body > h4.media-heading > a'
    //     //'h4.media-heading > a' 
    // }

   
    static product(product){
        product.rawTable.forEach(row => {
            const key=row[0]
            const value=row[1]

            switch(key){
                case 'product':
                    cy.addproduct(this.productlocator,this.addcart,value)
                        break;
                case 'product1':
                    cy.addproduct(this.productlocator,this.addcart,value)
                    break;
            }

                

        });
    }

    static checkout(){
        cy.get(this.checkoutlocator).click()
    }

    static checkout2(){
        cy.get(this.checkoutlocator2).click()
    }
    // static checkoutmsg(checkoutmsg){
    //     checkoutmsg.rawTable.forEach(row => {
    //         const key=row[0]
    //         const value=row[1]

    //         switch(key){
    //             case 'checkoutmsg':
    //                cy.validate(this.selectedproduct,value)
    //                break;
    //             case 'checkoutmsg1':
    //                 cy.validate(this.selectedproduct1,value)
    //                 break;
    //         }

    //     });
    // }
    static location(place){
        place.rawTable.forEach(row => {
            const key=row[0]
            const value=row[1]

            switch(key){
                case 'place':
                    cy.addlocation(this.locationl,value)
                        break;
                
            }

                

        });
    }
  static checkbox(locator){
    cy.SelectCheckBox(this.checkbox)
  }
}
export default shoppage