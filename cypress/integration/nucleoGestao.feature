#language: pt
Funcionalidade: Fluxo da Núcleo de Gestão

Eu como parte do núcleo de gestão, avaliar pagamento.

Contexto:
    Dado Que o usuário acesse o sistema com o perfil "Núcleo de Gestão"

    Cenário: Encaminhar pagamento não realizado
    Dado Que exista um processo na etapa "Avaliação de pagamento"
    E Que o usuário selecione a opção "Informar Pagamento"
    Quando O usuário informar os dados de pagamento:
    | Data_Envio    | Valor         | Pagamento |   Encaminhar   |
    | Data Atual    |  1.000,00     | Não       |   Sim          |
    E O usuário solicite salvar pagamento
    Então Os dados de pagamento devem ser atualizados

    Cenário: Emitir ALA do processo aceito
    Dado Que exista um processo na etapa "Registro de conclusão do processo"
    E Que o usuário selecione a opção "Registrar conclusão do processo"
    Quando O usuário informar os dados de conclusão do processo:
    | Posicionamento    | Data       | Numero_ALA  |
    | Emissão da ALA    | Data Atual | 08/2021     |
    E O usuário solicite salvar a conclusão de processo
    Então Os dados de conclusão devem ser atualizados

    Cenário: Gerar extrato de processo concluido
    Dado Que exista um processo na etapa "Processo concluído"
    Então a opção "Gerar Extrato" deve estar habilitada