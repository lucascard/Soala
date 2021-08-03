import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given(/^Que eu acesse o site do ICMBIO$/, () => {
	cy.visit('/')
});

When(/^Que eu preencha o campo de usuário e senha$/, () => {
    cy.get('#nuLogin').type('909.385.421-68')
    cy.get('#senha').type('12345678')
});

When(/^Aperte o botão de Login$/, () => {
	cy.get('.form-actions > .btn-primary').click()
});

Then(/^Eu entro no sistema$/, () => {
	cy.contains('Bem-vindo aos Sistemas do ICMBio!').should('be.visible')
});

Given(/^Eu clique no botão de acessar para entrar no Soala$/, () => {
	cy.get('[data-content="Sistema para Obtenção de Autorização para Licenciamento Ambiental"] > .caption > .btn')
    .as('botaoAcessar').click()
});

