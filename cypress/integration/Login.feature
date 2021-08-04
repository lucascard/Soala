#language: pt
Funcionalidade: Soala

    Como usuário, desejo entrar na página do SOALA

Cenario: Tela de login com CPF
    Dado Que eu acesse o site do ICMBIO
    Quando Que eu preencha o campo de usuário e senha
    E Aperte o botão de Login
    Entao Eu entro no sistema

    Dado Eu clique no botão de acessar para entrar no Soala
    Entao Aparece uma modal para escolher a unidade e o perfil
    Quando Eu escolho a unidade e o perfil
    Entao Eu entro na página MEUS PROCESSOS

    Quando Eu clico em pesquisar e digito MANIFESTAÇÃO DE PARECERISTA
    E Clico no primeiro botão de DESIGNAR EQUIPE
    Entao Eu entro na página DESGINAR EQUIPE e nome do processo
