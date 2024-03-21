class page{
    static get search(){
        return cy.get("input[type='search']")
     }
 
    static get containerSelector(){
        return cy.get(".products .product")
    }

    

   static get productNameLocator(){
    return "h4.product-name"
   }

    

    static get buttonLocator(){
        return "button[type='button']"
    }

    static externalfield(locatorname,value){
        switch(locatorname){
            case "productname":
                this.search.type(value)
        }
    }
}
export default page