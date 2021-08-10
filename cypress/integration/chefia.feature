#language: pt
Funcionalidade: Fluxo da Chefia

Eu como parte da chefia, desejo analisar nota tecnica ou designar um analista

Contexto:
    Dado Que o usuário acesse o sistema com o perfil "Chefia ICMBio/Responsável Designado"
    E Que exista um processo na etapa "Análise de conformidade"

    Cenario: Designar Analista
    Dado Que o usuário selecione a opção "Designar Analista"
    E Designe o analista "Aline Carla"
    Entao O Processo deve ser designado

    Cenario: Analisar Nota Tecnica
    Dado Que o usuário selecione a opção "Gerar nota técnica"
    E O usuário solicitar assinar e enviar
    Quando O usuário enviar os dados ao SEI
    Entao A nota técnica deve ser salva