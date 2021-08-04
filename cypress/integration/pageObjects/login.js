class login{
    cpf(){
        return cy.get('#nuLogin')
    }
    senha(){
        return cy.get('#senha')
    }
    botaoLogin(){   
        return cy.get('.form-actions > .btn-primary')
    }
}

export default login
