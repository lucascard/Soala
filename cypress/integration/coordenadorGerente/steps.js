import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Login from '../pageObjects/login'
import Soala from '../pageObjects/soala';

const login = new Login()
const soala = new Soala()

Then(/^Eu entro na página MEUS PROCESSOS$/, () => {
	cy.contains('Meus processos').should('be.visible')
});

Given(/^Que eu clique em pesquisar e digite MANIFESTAÇÃO DE PARECERISTA$/, () => {
	soala.campoPesquisar().type('Manifestação de parecerista')
});

When(/^Clique no primeiro botão de DESIGNAR EQUIPE$/, () => {
	soala.primeiroBotaoDesignar().click()
});

Then(/^Eu entro na página DESGINAR EQUIPE$/, () => {
	cy.contains('Designar Equipe').should('be.visible')
});

Given(/^Que eu selecione o perfil responsável DESIGNADOR$/, () => {
	cy.wait(1500)
 	soala.perfilResponsavel().select('Designador')
});

When(/^Selecione a Unidade Afetada APA Anhatomirim...$/, () => {
	soala.unidadeAfetada().type('APA Anhatomirim')
	cy.wait(1000)
	soala.primeiraUnidadeAfetada().click()
});

When(/^Selecione a designadora Aline Carla Gonçalves$/, () => {
	soala.informarDesignador().type('Aline Carla Gonçalves')
	soala.primeiroDesignador().click()	
});

When(/^Eu clico em salvar$/, () => {
	soala.botaoSalvarDesignacao().click()
});

Then(/^Aparece uma mensagem de confirmação.$/, () => {
	return true
});

Given(/^Que eu clique em Gerar Despacho$/, () => {
	
	//cy.get('[class="col-sm-12"]').contains('APA Anhatomirim').parents('tr[id="row-432"]').find('span[title="Gerar Despacho"]').click()
	cy.get('[class="col-sm-12"]').contains('APA Anhatomirim').siblings('td').find('span[title="Gerar Despacho"]').click()
	
	
});

When(/^Aperte em Sim$/, () => {
	cy.get('.swal2-confirm').click()
});

When(/^Entre na página Gerar Despacho$/, () => {
	cy.contains('Gerar Despacho').should('be.visible')
});

When(/^Eu selecionar Assinar Documento$/, () => {
	cy.wait(2000)
	cy.get('.card-body > .btn').click()
});

Then(/^Uma modal é aberta$/, () => {
	return true
});

Given(/^Que eu esteja na modal Dados de Envio ao SEI$/, () => {
	cy.contains('Dados de Envio ao SEI').should('be.visible')
});

Then(/^Preencha os campos de Login e senha$/, () => {
	cy.get('#userLogin').type('lucas')
	cy.get('#userSenha').type('lucas123')
	
});

Then(/^Selecione um cargo$/, () => {
	cy.get('#userCargo').select('Assessor(a)')
});

When(/^Eu clicar em enviar$/, () => {
	cy.get('.btn-send').click()
});

Then(/^O documento é assinado$/, () => {
	return true;
});

Then(/^Aparece uma mensagem de confirmação.$/, () => {
	cy.contains('Despacho Interlocutório cadastrado com sucesso.').should('be.visible')
});

When(/^O usuário solicitar assinar o documento$/, () => {
    cy.wait(300)
	cy.intercept('POST', 'https://tctisoala.sisicmbio.icmbio.gov.br/designacao/coordenador/saveDespacho')
    .as('salvarDespacho')
	cy.contains('Assinar Documento').click()
});