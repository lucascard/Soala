import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../pageObjects/login'
import Soala from '../pageObjects/soala';

const login = new Login()
const soala = new Soala()
Given(/^Que eu acesse o site do ICMBIO$/, () => {
	cy.visit('/')
});

When(/^Que eu preencha o campo de usuário e senha$/, () => {
    login.cpf().type('909.385.421-68')
    login.senha().type('12345678')
});

When(/^Aperte o botão de Login$/, () => {
	login.botaoLogin().click()
});

Then(/^Eu entro no sistema$/, () => {
	cy.contains('Bem-vindo aos Sistemas do ICMBio!').should('be.visible')
});

Given(/^Eu clique no botão de acessar para entrar no Soala$/, () => {
	soala.botaoAcessar().click()
});

Then(/^Aparece uma modal para escolher a unidade e o perfil$/, () => {
	cy.contains('Unidade Organizacional / Perfil').should('be.visible')
});

When(/^Eu escolho a unidade e o perfil$/, () => {
	soala.userList().select('COTEC - Coordenação de Tecnologia da Informação')
	soala.profileList().select('Coordenador/Gerente')
	soala.botaoAcessarSoala().click()
});

Then(/^Eu entro na pagina MEUS PROCESSOS$/, () => {
	cy.contains('Meus processos').should('be.visible')
});


