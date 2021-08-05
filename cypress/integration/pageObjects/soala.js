class soala{
    botaoAcessar(){
        return cy.get('[data-content="Sistema para Obtenção de Autorização para Licenciamento Ambiental"] > .caption > .btn')
    }
    userList(){
        return cy.get('#usersList')
    }
    profileList(){
        return cy.get('#feijoadaProfile')
    }
    botaoAcessarSoala(){
        return cy.get('#btn-access')
    }
    campoPesquisar(){
        return cy.get('#tableProcesso_filter > label > .form-control')
    }
    primeiroBotaoDesignar(){
        return cy.get(':nth-child(1) > .text-center > a > .text-success')
    }
    segundoBotaoDesignar(){
        return cy.get(':nth-child(2) > .text-center > a > .text-success')
    }
    perfilResponsavel(){
        return cy.get('#sqPerfilResponsavel')
    }
    unidadeAfetada(){
        return cy.get(':nth-child(2) > .input-group > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner')
    }
    primeiraUnidadeAfetada(){
        return cy.get('li > .dropdown-item')
    }
    informarDesignador(){
        return cy.get(':nth-child(3) > .input-group > .dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner')
    }
    primeiroDesignador(){
        return cy.get(':nth-child(3) > .input-group > .dropdown > div.dropdown-menu > div.inner > .dropdown-menu > li > .dropdown-item')
    }
    botaoSalvarDesignacao(){
        return cy.get('#btnSalvarDesignacao')
    }
}
export default soala