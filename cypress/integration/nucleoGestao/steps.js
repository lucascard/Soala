/// <reference types="cypress" />

When(/^O usuário informar os dados:$/, tabelaDados => {
    const DADOS = tabelaDados.hashes()[0]
    var data_envio, data_recebimento

    var dataAtual = new Date(),
        diaAtual = dataAtual.getDate().toString().padStart(2, '0'),
        mesAtual = (dataAtual.getMonth()+1).toString().padStart(2, '0'),
        anoAtual = dataAtual.getFullYear()

    if(DADOS.Data_Envio === 'Data Atual') data_envio = diaAtual+mesAtual+anoAtual
    else data_envio = DADOS.Data_Envio
    
    
    cy.wait(300)
	cy.contains('Data de envio da GRU').siblings('input').type(data_envio)
    cy.contains('Valor da GRU').siblings('input').type(DADOS.Valor)

    if(DADOS.Pagamento === 'Sim'){
        cy.get('input[id="pagamento_realizado"]').click()

        if(DADOS.Data_Recebimento === 'Data Atual') data_recebimento = diaAtual+mesAtual+anoAtual
        else data_recebimento = DADOS.Data_Recebimento
    
        cy.contains('Data de recebimento do comprovante').siblings('input').type(data_recebimento)
    }else if(DADOS.Pagamento === 'Não'){
        cy.get('input[id="pagamento_realizado_nao"]').click()

        if(DADOS.Encaminhar === 'Sim') cy.get('input[id="sq_encaminhar"]').click()
        else if(DADOS.Encaminhar === 'Não') cy.get('input[id="sq_encaminhar_nao"]').click()
    }
});

When(/^O usuário solicite salvar$/, () => {
    cy.intercept('POST', 'https://tctisoala.sisicmbio.icmbio.gov.br/processos/updateInformarPagamento')
    .as('atualizarPagamento')
	cy.contains('Salvar').click()
});

Then(/^Os dados de pagamento devem ser atualizados$/, () => {
	cy.wait('@atualizarPagamento').its('response.body').should('include', 'Informa\\u00e7\\u00f5es de pagamento atualizadas com sucesso.')
});
