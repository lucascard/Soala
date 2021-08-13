/// <reference types="cypress" />

When(/^O usuário informar o parecerista "([^"]*)"$/, (nome) => {
	cy.get('button[data-id="sqPessoaResponsavel"]').click()
    cy.wait(500)
	cy.get('div[class="bs-searchbox"] input:visible').type(nome)
	cy.wait(1500)
	cy.contains('span[class="text"]', nome).click()
	cy.contains('Salvar').click()
});