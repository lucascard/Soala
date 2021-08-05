#language: pt
Funcionalidade: Designador

    Como Designador, quero designar os processos

Cenario: Fluxo Designador

    Dado Que o usuário acesse o sistema com o perfil "Designador"
    Entao Eu entro na página MEUS PROCESSOS

    Dado Que eu Designe a equipe de um processo
    Entao Eu entro na página DESIGNAR PARECERISTAS

    Dado Que eu Designe o Parecerista
    Quando Gerar o despacho da equipe designada
    Entao Eu assino o documento

    Dado Que eu preencha os Dados do SEI
    Quando Eu enviar todos os dados
    Entao O documento o processo termina
