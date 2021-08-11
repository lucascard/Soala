#language: pt
Funcionalidade: Fluxo da Núcleo de Gestão

Eu como parte do núcleo de gestão, avaliar pagamento.

Contexto:
    Dado Que o usuário acesse o sistema com o perfil "Núcleo de Gestão"

    Cenário: Encaminhar pagamento não realizado
    Dado Que exista um processo na etapa "Avaliação de pagamento"
    E Que o usuário selecione a opção "Informar Pagamento"
    Quando O usuário informar os dados:
    | Data_Envio    | Valor         | Pagamento |   Encaminhar   |
    | Data Atual    |  1.000,00     | Não       |   Sim          |
    E O usuário solicite salvar
    Então Os dados de pagamento devem ser atualizados