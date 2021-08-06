import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../pageObjects/login'
import Soala from '../pageObjects/soala';

const login = new Login()
const soala = new Soala()

Then(/^Eu entro na página MEUS PROCESSOS$/, () => {
	cy.contains('Meus processos').should('be.visible')
});

Given(/^Que eu selecione ANALISAR PROCESSO$/, () => {
	soala.campoPesquisar().type('Realizar análise técnica')
    soala.primeiroBotaoDesignar().click()
});

Then(/^Eu entro na página COMPONENTE NORMATIVO$/, () => {
    cy.contains('Componente Normativo - Plano de Manejo').should('be.visible')
});

Given(/^Que eu selecione a UNIDADE AFETADA$/, () => {
    cy.wait(2000)
	cy.get('#sqUnidadeConservacaoComponente').select('APA Anhatomirim') 
    cy.get('#stEmpreendimentoInteriorN').check()
});

When(/^Eu clicar em SALVAR e em CONTINUAR$/, () => {
	cy.get('#step0 > .card-body > fieldset > .icmbio-btn-success').click()
    cy.get('#btnComponenteNormativo').click()
});

Then(/^Eu entro na página IMPACTOS AMBIENTAIS POSITIVOS$/, () => {
    cy.contains('Impactos Ambientais Positivos')
});

Given(/^Que eu preencha os dados da página IMPACTOS AMBIENTAIS POSITIVOS$/, () => {
	cy.get('#noImpactoPositivo').type('Impacto')
    cy.get('#txObservacao').type('obs')
});

When(/^Eu clicar em Salvar e Continuar$/, () => {
    cy.get('#step1 > .card-body > fieldset > .icmbio-btn-success').click()
    cy.get('#btnContinuarImpactoPositivo').click()
});

Then(/^Eu entro na página IMPACTOS AMBIENTAIS NEGATIVOS$/, () => {
    cy.contains('Impactos Ambientais Negativos')
});

Given(/^Que eu preencha os dados da página IMPACTOS AMBIENTAIS NEGATIVOS$/, () => {
	cy.get('#sqUnidadeConservacao').select('APA Anhatomirim')
    cy.get('#noImpactoNegativo').type('Florestas pegando fogo')
    cy.get('#sqTipoFonteInformacao').select('')


});





