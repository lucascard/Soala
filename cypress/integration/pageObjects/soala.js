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
}
export default soala