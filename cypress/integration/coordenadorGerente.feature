#language: pt
Funcionalidade: Coordenador/Gerente

    Como Coordenador, desejo entrar na página do SOALA
    Contexto:
    Dado Que o usuário acesse o sistema com o perfil "Coordenador/Gerente"
    # Quando que um novo processo seja criado
    
    Cenario: Coordenador/Gerente designar designador
    
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
    E O usuário enviar os dados ao SEI
    Entao O documento é assinado
    E Aparece uma mensagem de confirmação.

    Cenário: Coordenador/Gerente gerar nota técnica de posicionamento
    Dado Que exista um processo na etapa "Posicionamento Coordenador/Gerente"
    E Que o usuário selecione a opção "Gerar nota técnica"
    Quando O usuário solicitar assinar e enviar nota técnica
    E O usuário enviar os dados ao SEI
    Então A nota técnica deve ser salva

    Cenário: Coordenador/Gerente gerar despacho de análise de conformidade
    Dado Que exista um processo na etapa "Análise de conformidade realizada"
    E Que o usuário selecione a opção "Gerar Despacho"
    Quando O usuário solicitar assinar o documento
    E O usuário enviar os dados ao SEI
    Então O despacho deve ser salvo