#language: pt
Funcionalidade: Coordenador/Gerente

    Como Coordenador, desejo entrar na página do SOALA
    Contexto:
    Quando que um novo processo seja criado
    
    Cenario: Fluxo de coordenador/Gerente
    Dado Que o usuário acesse o sistema com o perfil "Coordenador/Gerente"
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
