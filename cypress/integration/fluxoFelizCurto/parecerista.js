/// <reference types="cypress" />


When(/^O usuário informar os dados de componente normativo:$/, (tabelaDados) => {
	const DADOS = tabelaDados.hashes()[0]
    cy.wait(2000)
    cy.get('select[name="sqUnidadeConservacaoComponente"]').select(DADOS.Unidade_Afetada)
    if(DADOS.Interior_UC === 'Não') cy.get('input[id="stEmpreendimentoInteriorN"]').click()
    else{
        cy.get('input[id="stEmpreendimentoInteriorS"]').click()
        if(DADOS.Plano_Manejo === 'Não') cy.get('input[id="stPlanoManejo_N"]').click()
        else{
            cy.get('input[id="stPlanoManejo_S"]').click()
            cy.get('textarea[id="txZonaSobreposta"]').type(DADOS.Zona_Sobreposta)
            if(DADOS.Incompativel === 'Prosseguir análise') cy.get('input[id="stIncompativelN"]').click()
            else{
                cy.get('input[id="stIncompativelS"]').click()
                cy.get('textarea[id="txIncompatibilidadeRegrasZona"]').type(DADOS.Descricao_Incompatibilidade)
            }
        }
    }
    cy.contains('Salvar').click()
    cy.contains('Continuar').click()
});

When(/^O usuário informar os dados de impactos ambientais positivos:$/, (tabelaDados) => {
	const DADOS = tabelaDados.hashes()[0]
    cy.get('input[id="noImpactoPositivo"]').type(DADOS.Impacto_Positivo)
    cy.get('textarea[id="txObservacao"]').type(DADOS.Observações)
    cy.contains('Salvar').click()
    cy.contains('Continuar').click()
});

When(/^Não preencher as demais etapas$/, () => {
    cy.wait(1000)
	cy.get('button[id="btnContinuarImpactoPositivo"]').click()
    cy.wait(1000)
    cy.get('button[id="btnContinuarImpactoNegativo"]').click()
    cy.wait(1000)
    cy.get('button[id="btnContinuarConclusao"]').click()
    cy.wait(1000)
    cy.contains('Finalizar Análise Técnica').click()
    cy.wait(1000)
    cy.contains('button', 'Sim').click()
});


When(/^Assinar o parecer técnico$/, () => {
	cy.contains('Assinar Documento').click()
    cy.wait(1000)
    cy.contains('button', 'Sim').click()
    cy.wait(1000)
    cy.intercept('POST', 'https://tctisoala.sisicmbio.icmbio.gov.br/designacao/saveParecerTecnico')
    .as('salvarParecer')
});

Then(/^A análise técninca deve ser salva$/, () => {
	cy.wait('@salvarParecer').its('response.body').should('include', 'Parecer t\\u00e9cnico cadastrado com sucesso.')
});
