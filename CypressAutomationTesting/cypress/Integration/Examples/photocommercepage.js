class photocommercepage{
    static get name(){
        return cy.get(':nth-child(1) > .form-control')
    }

    static get email(){
        return cy.get(':nth-child(2) > .form-control')
    }

    static get password(){
        return cy.get('#exampleInputPassword1')

    }

    static get date(){
        return cy.get("input[name='bday']")
    }
    static get checkBox()
    {
        return '#exampleCheck1'
    }
 
    static get labelCheckBox()
    {
        return 'form.ng-dirty > :nth-child(4) > .form-check-label'
    }
 
    static get dropDownLocator()
    {
        return '#exampleFormControlSelect1'
    }
 
    static get radioButtonLabelLocator()
    {
        return '.form-check-label'
    }
 
    static get radioButtonLocator()
    {
        return "[name='inlineRadioOptions']"
    }
 
    
    static get submitButtonLocator()
    {
        return '.btn'
    }
 
    static get messageLocator()
    {
        return '.alert > strong'
    }

   
 

    static setDataValue(Valuetoenter){
        Valuetoenter.rawTable.forEach(row => {
            const key=row[0];
            const value=row[1];

            switch(key){
                case 'name':
                    this.name.type(value)
                    break;
            
            case 'email':
                    this.email.type(value)
                    break;

            case 'password':
                        this.password.type(value)
                        break;
            case 'date':
                this.date.type(value)
                break;
            default:   
            }


        });
    }

    static headervalues(headervalues){
            headervalues.rawTable.forEach(row => {
            const key=row[0];
            const value=row[1];

            switch(key){
                case 'success':
                    cy.validate(this.messageLocator,value)
                
            } 
        }
        )};

    static selectCheckBox(value)
    {
        if(cy.get(this.labelCheckBox).contains(value.rawTable[0][0]))
        {
            cy.SelectCheckBox(this.checkBox)
        }
    }
        static selectDropDown(value)
        {
            cy.SelectDropdown(this.dropDownLocator,value)      
        }
      
        static selectRadioButton(value)
        {
            cy.SelectRadioButton(this.radioButtonLabelLocator,this.radioButtonLocator,value)
        }
      
        static selectBirthDate()
        {
            cy.get(this.dateButtonLocator).click()
        }
      
        static clickSubmitButton()
        {
            cy.ClickButton(this.submitButtonLocator)
        }
      
        static verifyMessageField(value)
        {
            cy.get(this.messageLocator).should('have.text',value)
        }

        static 
     }
    

export default photocommercepage