#language: pt
Funcionalidade: Fluxos

Fluxo onde o processo e designado diretamente para o parecerista e a chefia faz a Análise de conformidade.

    Contexto:
    #Quando que um novo processo seja criado

    Cenário: Coordenador/Gerente designar parecerista
    Dado Que o usuário acesse o sistema com o perfil "Coordenador/Gerente"
    E Que exista um processo na etapa "Manifestação de parecerista"
    E Que o usuário selecione a opção "Designar equipe"
    Quando O usuário informar os dados:
    |   Designar    |   Unidade_Afetada |   Responsavel               |
    |   Parecerista  |   APA Anhatomirim |   Aline Carla GonÇalves    |
    E Que o usuário selecione a opção "Gerar Despacho"
    E Que o usuário confirme que deseja continuar
    E O usuário solicitar assinar o despacho de designação
    E O usuário enviar os dados ao SEI
    Então O despacho deve ser salvo

    Cenario: Parecerista realizar análise técnica
    Dado Que o usuário acesse o sistema com o perfil "Parecerista"
    E Que exista um processo na etapa "Realizar análise técnica"
    E Que o usuário selecione a opção "Analisar processo"
    Quando O usuário informar os dados de componente normativo:
    | Unidade_Afetada    | Interior_UC   |
    | APA Anhatomirim    | Não           |
    E Não preencher as demais etapas
    E Assinar o parecer técnico
    E O usuário enviar os dados ao SEI
    Então A análise técninca deve ser salva

    Cenario: Chefia analisar Nota Tecnica
    Dado Que o usuário acesse o sistema com o perfil "Chefia ICMBio/Responsável Designado"
    E Que exista um processo na etapa "Análise de conformidade"
    E Que o usuário selecione a opção "Gerar nota técnica"
    Quando O usuário solicitar assinar e enviar nota técnica
    E O usuário enviar os dados ao SEI
    Entao A nota técnica deve ser salva

    Cenario: Chefia solicitar Cobrança de GRU
    Dado Que o usuário acesse o sistema com o perfil "Chefia ICMBio/Responsável Designado"
    E Que exista um processo na etapa "Análise de conformidade realizada"
    E Que o usuário selecione a opção "Encaminhar Posicionamento"
    Quando O usuário marcar "Sim" para a emissão de GRU
    E O usuário anexe o documento na GRU
    E O usuário solicite salvar
    Então Os dados da GRU devem ser salvos

    Cenário: Núcleo de Gestão encaminhar pagamento não realizado
    Dado Que o usuário acesse o sistema com o perfil "Núcleo de Gestão"
    E Que exista um processo na etapa "Avaliação de pagamento"
    E Que o usuário selecione a opção "Informar Pagamento"
    Quando O usuário informar os dados de pagamento:
    | Data_Envio    | Valor         | Pagamento |   Encaminhar   |
    | Data Atual    |  1.000,00     | Não       |   Sim          |
    E O usuário solicite salvar pagamento
    Então Os dados de pagamento devem ser atualizados

    Cenario: Chefia gerar Despacho
    Dado Que o usuário acesse o sistema com o perfil "Chefia ICMBio/Responsável Designado"
    E Que exista um processo na etapa "Pagamento não realizado"
    E Que o usuário selecione a opção "Gerar Despacho"
    Quando A chefia solicitar assinar o documento
    E O usuário enviar os dados ao SEI
    Então O despacho deve ser salvo

    Cenário: Coordenador/Gerente gerar nota técnica de posicionamento
    Dado Que o usuário acesse o sistema com o perfil "Coordenador/Gerente"
    E Que exista um processo na etapa "Posicionamento Coordenador/Gerente"
    E Que o usuário selecione a opção "Gerar nota técnica"
    Quando O usuário solicitar assinar e enviar nota técnica
    E O usuário enviar os dados ao SEI
    Então A nota técnica deve ser salva

    Cenário: Coordenador/Gerente gerar despacho de análise de conformidade
    Dado Que o usuário acesse o sistema com o perfil "Coordenador/Gerente"
    E Que exista um processo na etapa "Análise de conformidade realizada"
    E Que o usuário selecione a opção "Gerar Despacho"
    Quando O coordenador solicitar assinar o documento
    E O usuário enviar os dados ao SEI
    Então O despacho deve ser salvo

    Cenário: Núcleo de Gestão emitir ALA do processo aceito
    Dado Que o usuário acesse o sistema com o perfil "Núcleo de Gestão"
    E Que exista um processo na etapa "Registro de conclusão do processo"
    E Que o usuário selecione a opção "Registrar conclusão do processo"
    Quando O usuário informar os dados de conclusão do processo:
    | Posicionamento    | Data       | Numero_ALA  |
    | Emissão da ALA    | Data Atual | 08/2021     |
    E O usuário solicite salvar a conclusão de processo
    Então Os dados de conclusão devem ser atualizados