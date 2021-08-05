#language: pt
Funcionalidade: Soala

    Como usuário, desejo entrar na página do SOALA
    
Cenario: Tela de login com CPF
    Dado Que eu acesse o site do ICMBIO
    E Que eu preencha os campos de usuário e senha
    Quando Aperte o botão de Login
    Entao Eu entro no sistema

    Dado Que eu clique no botão de acessar para entrar no Soala
    Quando Eu escolho a unidade e o perfil
    Entao Eu entro na página MEUS PROCESSOS

    Dado Que eu clique em pesquisar e digite MANIFESTAÇÃO DE PARECERISTA
    E Clique no primeiro botão de DESIGNAR EQUIPE
    Entao Eu entro na página DESGINAR EQUIPE

    Dado Que eu selecione o perfil responsável DESIGNADOR
    E Selecione a Unidade Afetada APA Anhatomirim...
    E Selecione a designadora Aline Carla Gonçalves
    Quando Eu clico em salvar
    Entao Aparece uma mensagem de confirmação.

    Dado Que eu clique em Gerar Despacho
    E Aperte em Sim
    E Entre na página Gerar Despacho
    Quando Eu selecionar Assinar Documento
    Entao Uma modal é aberta

    #Modal SEI
    Dado Que eu esteja na modal Dados de Envio ao SEI
    E Preencha os campos de Login e senha
    E Selecione um cargo
    Quando Eu clicar em enviar
    Entao O documento é assinado
    E Aparece uma mensagem de confirmação.