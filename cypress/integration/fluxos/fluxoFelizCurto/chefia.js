/// <reference types="cypress" />

When(/^Designar o analista "([^"]*)"$/, (analista) => {
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

When(/^O usuário marcar "([^"]*)" para a emissão de GRU$/, (opt) => {
    cy.wait(1500)
    cy.contains(opt).siblings('input').click()
});

When(/^O usuário anexe o documento na GRU$/, () => {
	cy.fixture('SOALA_GRU_Template.pdf').then(conteudo => {
        cy.get('input[type="file"]').attachFile({
            fileContent: conteudo.toString(),
            fileName: 'SOALA_GRU_Template.pdf',
        })
    })
});

When(/^O usuário solicite salvar$/, () => {
    cy.intercept('POST', 'https://tctisoala.sisicmbio.icmbio.gov.br/designacao/chefia/salvarArquivoGRU')
    .as('salvarGRU')
	cy.contains('Salvar').click()
});

Then(/^Os dados da GRU devem ser salvos$/, () => {
	cy.wait('@salvarGRU').its('response.body').should('include', 'Os dados foram salvos com sucesso.')
});

When(/^A chefia solicitar assinar o documento$/, () => {
    cy.wait(300)
	cy.intercept('POST', 'https://tctisoala.sisicmbio.icmbio.gov.br/designacao/chefia/saveDespacho')
    .as('salvarDespacho')
	cy.contains('Assinar Documento').click()
});