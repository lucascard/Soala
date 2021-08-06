import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../pageObjects/login'
import Soala from '../pageObjects/soala';

const login = new Login()
const soala = new Soala()

Then(/^Eu entro na página MEUS PROCESSOS$/, () => {
	cy.contains('Meus processos').should('be.visible')
});

Given(/^Que eu Designe a equipe de um processo$/, () => {
    cy.get('#tableProcesso_filter > label > .form-control').type('Designar equipe')
    cy.get(':nth-child(1) > .text-center > a > .text-success').click()
    
});

Then(/^Eu entro na página DESIGNAR PARECERISTAS$/, () => {
    cy.contains('Designar Pareceristas').should('be.visible')
});

Given(/^Que eu Designe o Parecerista$/, () => {
    cy.get('.filter-option-inner-inner').type('Aline Carla Gonçalves')
    cy.get('li > .dropdown-item').click()
    cy.get('#btnSalvarDesignacao').click({ force: true })
});

When(/^Gerar o despacho da equipe designada$/, () => {
    cy.contains('APA Anhatomirim').siblings('td').find('span[title="Gerar Despacho"]').click()
    cy.get('.swal2-confirm').click()
});

Then(/^Eu assino o documento$/, () => {
	cy.contains('Gerar Despacho').should('be.visible')
    cy.wait(1000)
    cy.get('.card-body > .btn').click()
});

Given(/^Que eu preencha os Dados do SEI$/, () => {
    cy.contains('Dados de Envio ao SEI').should('be.visible')
	cy.get('#userLogin').type('Lucas')
    cy.get('#userSenha').type('Lucas123')
    cy.get('#userCargo').select('Assessor(a)')
});

When(/^Eu enviar todos os dados$/, () => {
    cy.get('.btn-send').click()
});

Then(/^O documento o processo termina$/, () => {
	cy.contains('Designar Pareceristas').should('be.visible')
});

