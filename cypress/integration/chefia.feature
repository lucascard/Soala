#language: pt
Funcionalidade: Fluxo da Chefia

Eu como parte da chefia, desejo analisar nota tecnica, designar um analista ou solicitar cobrança GRU.

Contexto:
    Dado Que o usuário acesse o sistema com o perfil "Chefia ICMBio/Responsável Designado"

    Cenario: Designar Analista
    Dado Que exista um processo na etapa "Análise de conformidade"
    E Que o usuário selecione a opção "Designar Analista"
    E Designar o analista "Aline Carla"
    Entao O Processo deve ser designado

    Cenario: Analisar Nota Tecnica
    Dado Que exista um processo na etapa "Análise de conformidade"
    E Que o usuário selecione a opção "Gerar nota técnica"
    Quando O usuário solicitar assinar e enviar
    E O usuário enviar os dados ao SEI
    Entao A nota técnica deve ser salva

    Cenario: Solicitar Cobrança de GRU
    Dado Que exista um processo na etapa "Análise de conformidade realizada"
    E Que o usuário selecione a opção "Encaminhar Posicionamento"
    Quando O usuário marcar "Sim" para a emissão de GRU
    E O usuário anexe o documento na GRU
    E O usuário solicite salvar
    Então Os dados da GRU devem ser salvos

    Cenario: Gerar Despacho
    Dado Que exista um processo na etapa "Pagamento não realizado"
    E Que o usuário selecione a opção "Gerar Despacho"
    Quando O usuário solicitar assinar o documento
    E O usuário enviar os dados ao SEI
    Então O despacho deve ser salvo