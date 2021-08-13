/// <reference types="cypress" />

When(/^O usuário informar os dados:$/, (tabelaDados) => {
	const DADOS = tabelaDados.hashes()[0]
	cy.wait(500)
	cy.get('select[id="sqPerfilResponsavel"]').select(DADOS.Designar)
	cy.wait(500)

	if(DADOS.Designar === 'Parecerista') cy.get('button[data-id="sqUnidadesAfetadas"]').click()
	else cy.get('button[data-id="sqUnidadeAfetada"]').click()
	
	cy.wait(500)
	cy.get('div[class="bs-searchbox"] input:visible').type(DADOS.Unidade_Afetada)
	cy.wait(500)
	cy.contains('span', DADOS.Unidade_Afetada).click()
	cy.get('.card-header').click()

	if(DADOS.Designar === 'Parecerista') cy.get('button[data-id="sqPessoasResponsaveis"]').click()
	else cy.get('button[data-id="sqPessoaResponsavel"]').click()
	
	cy.wait(500)
	cy.get('div[class="bs-searchbox"] input:visible').type(DADOS.Responsavel)
	cy.wait(1500)
	cy.contains('span[class="text"]', DADOS.Responsavel).click()
	cy.get('.card-header').click()
	cy.contains('Salvar').click()
});

When(/^O usuário solicitar assinar o documento$/, () => {
    cy.wait(300)
	cy.intercept('POST', 'https://tctisoala.sisicmbio.icmbio.gov.br/designacao/coordenador/saveDespacho')
    .as('salvarDespacho')
	cy.contains('Assinar Documento').click()
});