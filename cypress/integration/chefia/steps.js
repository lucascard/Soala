/// <reference types="cypress" />

When(/^Que exista um processo na etapa "([^"]*)"$/, (etapa) => {
	cy.contains(etapa)
});

Given(/^Que o usuário selecione a opção "([^"]*)"$/, (args1) => {
	cy.get('[title="Designar Analista"]').click()
});

When(/^Designe o analista "([^"]*)"$/, (analista) => {
	cy.contains("Selecione uma opção...").click()
    cy.get('input[placeholder="Pesquisar..."').type(analista)
    cy.get('span[class="text"]').contains(analista).click()
    cy.get('.card-header').click()
    cy.contains('Adicionar').click()
});

Then(/^O Processo deve ser designado$/, () => {
    cy.intercept('POST', 'https://tctisoala.sisicmbio.icmbio.gov.br/designacao/chefia/saveAnalistas')
    .as('saveAnalistas')
    cy.get('button').contains('Designar').click()
    cy.wait('@saveAnalistas').its('response.body').should('include', 'Analista designado com sucesso.')
});
