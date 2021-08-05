/// <reference types="cypress" />

Given(/^que o usuario acesse o sistema com o perfil "([^"]*)"$/, (perfil) => {
	cy.visit('/')
    cy.get('#nuLogin').type('909.385.421-68')
    cy.get('#senha').type('12345678')
    cy.get('button[type="submit"]').click()

    cy.contains('SOALA').parent().children('button').click()
    cy.contains('option', 'COTEC - Coordenação de Tecnologia da Informação').parents('select').select('COTEC - Coordenação de Tecnologia da Informação')
    cy.contains('option', perfil).parents('select').select(perfil)
    cy.get('#btn-access').click()
});
