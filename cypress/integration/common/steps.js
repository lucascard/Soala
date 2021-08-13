/// <reference types="cypress" />
Given(/^Que o usuário acesse o sistema com o perfil "([^"]*)"$/, (perfil) => {
    cy.visit('/')
    cy.get('#nuLogin').type('909.385.421-68')
    cy.get('#senha').type('12345678')
    cy.get('button[type="submit"]').click()

    cy.contains('SOALA').parent().children('button').click()
    cy.contains('option', 'COTEC - Coordenação de Tecnologia da Informação').parents('select').select('COTEC - Coordenação de Tecnologia da Informação')
    cy.contains('option', perfil).parents('select').select(perfil)
    cy.get('#btn-access').click()
});

When(/^O usuário enviar os dados ao SEI$/, () => {
	cy.get('input[name="userLogin"]').type('12345')
    cy.get('input[name="userSenha"]').type('12345')
    cy.get('select[name="userCargo"]').select('Assessor(a)')
    cy.contains('Enviar').click()
});

Given(/^Que exista um processo na etapa "([^"]*)"$/, (etapa) => {
    cy.get('input[type="search"]').type(etapa)
    cy.wait(6000)
	cy.get('td').contains(new RegExp('^' + etapa + '$', 'g'))
});

When(/^Que o usuário selecione a opção "([^"]*)"$/, opcao => {
	cy.get('[title=\"'+opcao+'\"]').first().click()
});

When(/^que um novo processo seja criado$/, () => {
    var dataAtual = new Date(),
    diaAtual = dataAtual.getDate().toString().padStart(2, '0'),
    mesAtual = (dataAtual.getMonth()+1).toString().padStart(2, '0'),
    anoAtual = dataAtual.getFullYear()

    // Backup Do Comando Para Limpar LocalStorage
    const clear = Cypress.LocalStorage.clear
    // Desativando Limpeza Automática do LocalStorage
    Cypress.LocalStorage.clear = function (keys, ls, rs) {
    }

    //Caso tenha um token valido coloque na proxima linha
    // localStorage.setItem('tokenApi', 'DIGITE O TOKEN AQUI E DESCOMENTE A LINHA')

    cy.request({    //Envia Processo Vazio Para API
        method: 'POST',
        failOnStatusCode: false,
        url: 'https://tctisoala.sisicmbio.icmbio.gov.br/api/save',
        form: true,
        headers: {
            'token': localStorage.tokenApi,
        }
    }).then(res => {
        if (res.body.message === 'Chave inv&aacute;lida.'){  //Token Salvo é Invalido
            cy.request({ //Gera Novo Token
                method: 'POST',
                failOnStatusCode: false,
                url: 'https://tctisoala.sisicmbio.icmbio.gov.br/api/getToken',
                form: true,
                headers: {
                    'app-secret': '$2y$13$QNcFJfj2KZTd198VzBMA5.LxzTp9FvqydJf.F2DegR5NX66nm5qj2',
                },
            }).then(response => {
                localStorage.setItem('tokenApi', response.body.token) //Salva Novo Token no LocalStorage
            })
        }
    })
    console.log(localStorage)
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: 'https://tctisoala.sisicmbio.icmbio.gov.br/api/save',
        form: true,
        headers: {
            'token': localStorage.getItem('tokenApi'),
        },
        body: {
            "data": [{
                "nu_processo": "00014123456202014",
                "no_razao_social_empreendedor": "Razão Social Nome Teste /çãõ",
                "no_fantasia_empreendedor": "Fantasia Nome Teste!@#$12",
                "nu_cpfcnpj_empreendedor": "44455388000190",
                "dt_criacao_processo": anoAtual+"/"+mesAtual+"/"+diaAtual,
                "dt_inicio_analise": anoAtual+"/"+mesAtual+"/"+diaAtual,
                "tx_endereco_empreendedor": "Texto teste, nº2 para endereço do empreendimento",
                "tx_caracterizacao_empreendimento": "Texto teste para caracterização do empreendimento.",
                "no_empreendimento": "Empreendimento Teste Automatizado",
                "no_tipologia_empreendimento": "Tipologia",
                "nu_cep_empreendimento": "12345-123",
                "tx_email_empreendimento": "email@email.com",
                "nu_telefone_empreendimento": "61-9999-8888",
                "no_orgao_licenciador": "IBAMA",
                "nu_area_extensao_empreendimento": "123.45",
                "st_adensamento_empreendimento": "Sim",
                "nu_protocolo_entrega_fisica": "987654321",
                "tx_caracterizacao_area_estudo": "Texto de caracterização da área de estudo. 123 teste.",
                "tx_informacao_complementar": "Informação complementar do empreendimento. Teste 567.",
                "tx_informacao_adicional": "Informação adicional do empreendimento. Teste 901.",
                "dt_autuacao_processo_icmbio": anoAtual+"/"+mesAtual+"/"+diaAtual,
                "nu_processo_icmbio": (Math.random() * 99999999999999999).toString(),
                "no_acao": "Ação",
                "tx_despacho_preanalise": "Um texto de despacho de pré análise. Teste. Teste. Obs#$%&*.",
                "tx_informacao_adicional_preanalise": "Informação adiconal da pré-análise. !@#$%*();çãõe.",
                "si_processo": "Situação do processo",
                "dt_expedicao_oficio": anoAtual+"/"+mesAtual+"/"+diaAtual,
                "dt_autuacao_oficio_complementacao": anoAtual+"/"+mesAtual+"/"+diaAtual,
                "in_responsavel_analise": "Instância responsável pela análise",
                "un_medida_area_empreendimento": "Unidade de medida da área do empreendimento",
                "localizacao": [
                    {
                        "no_municipio": "Cabrobró",
                        "no_uf": "PE",
                        "nu_latitude_empreendimento": "-8.514167",
                        "nu_longitude_empreendimento": "-39.31"
                    },
                    {
                        "no_municipio": "Orocó",
                        "no_uf": "PE",
                        "nu_latitude_empreendimento": "-8.62",
                        "nu_longitude_empreendimento": "-39.601944"
                    }
                ],
                "uc": [
                    {
                        "no_uc_empreendimento": "REBIO de Pedra Talhada",
                        "co_cnuc": "197"
                    },
                    {
                        "no_uc_empreendimento": "REBIO de Serra Negra",
                        "co_cnuc": "200"
                    }
                ],
                "responsavel": [
                    {
                        "no_responsavel_empreendimento": "responsável empreendimento 1",
                        "nu_telefone_responsavel": "81-99999-7777",
                        "tx_email_responsavel": "responsavel1@emailfake.com"
                    },
                    {
                        "no_responsavel_empreendimento": "Responsável Empreendimento 2",
                        "nu_telefone_responsavel": "87-99999-6666",
                        "tx_email_responsavel": "responsavel2@emailfake.com"
                    }
                ]
            }],
        },
    }).then(response => expect(response.body.message).to.eq('Dados enviados com sucesso.'))
});

When(/^O usuário solicitar assinar e enviar nota técnica$/, () => {
    cy.intercept('POST', 'https://tctisoala.sisicmbio.icmbio.gov.br/designacao/gerarNotaTecnicaSei')
    .as('gerarNotaTecnicaSei')
    cy.wait(500)
	cy.contains('Assinar e enviar').click()
});

Then(/^A nota técnica deve ser salva$/, () => {
	cy.wait('@gerarNotaTecnicaSei').its('response.body').should('include', 'Nota t\\u00e9cnica salva com sucesso.')
});

Then(/^O despacho deve ser salvo$/, () => {
	cy.wait('@salvarDespacho').its('response.body').should('include', 'Despacho Interlocut\\u00f3rio cadastrado com sucesso.')
});