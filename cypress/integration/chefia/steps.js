/// <reference types="cypress" />

When(/^Que exista um processo na etapa "([^"]*)"$/, (etapa) => {
    cy.get('input[type="search"]').type(etapa)
    cy.wait(4000)
	cy.get('td').contains(new RegExp('^' + etapa + '$', 'g'))
});

Given(/^Que o usuário selecione a opção "([^"]*)"$/, opcao => {
	cy.get('[title=\"'+opcao+'\"]').first().click()
});

When(/^Designe o analista "([^"]*)"$/, (analista) => {
	cy.contains("Selecione uma opção...").click()
    cy.get('input[placeholder="Pesquisar..."').type(analista)
    cy.get('span[class="text"]').contains(analista).click()
    cy.get('.card-header').click()
    cy.contains('Adicionar').click()
    cy.intercept('POST', 'https://tctisoala.sisicmbio.icmbio.gov.br/designacao/chefia/saveAnalistas')
    .as('saveAnalistas')
    cy.get('button').contains('Designar').click()
});

Then(/^O Processo deve ser designado$/, () => {
    cy.wait('@saveAnalistas').its('response.body').should('include', 'Analista designado com sucesso.')
});

When(/^O usuário solicitar assinar e enviar$/, () => {
    cy.intercept('POST', 'https://tctisoala.sisicmbio.icmbio.gov.br/designacao/gerarNotaTecnicaSei')
    .as('gerarNotaTecnicaSei')
    cy.wait(500)
	cy.contains('Assinar e enviar').click()
});

Then(/^A nota técnica deve ser salva$/, () => {
	cy.wait('@gerarNotaTecnicaSei').its('response.body').should('include', 'Nota t\\u00e9cnica salva com sucesso.')
});
