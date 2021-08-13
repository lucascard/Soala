#language: pt
Funcionalidade: Coordenador/Gerente

    Como Coordenador, desejo designar equipe, gerar nota técnica e gerar despacho de análise de conformidade.
    
    Contexto:
    Dado Que o usuário acesse o sistema com o perfil "Coordenador/Gerente"
    # Quando que um novo processo seja criado
    
    Cenario: Coordenador/Gerente designar designador
    Dado Que exista um processo na etapa "Manifestação de parecerista"
    E Que o usuário selecione a opção "Designar equipe"
    Quando O usuário informar os dados:
    |   Designar    |   Unidade_Afetada |   Responsavel               |
    |   Designador  |   APA Anhatomirim |   Aline Carla GonÇalves     |
    E Que o usuário selecione a opção "Gerar Despacho"
    E Que o usuário confirme que deseja continuar
    E O usuário solicitar assinar o despacho de designação
    E O usuário enviar os dados ao SEI
    Então O despacho deve ser salvo

    Cenario: Coordenador/Gerente designar parecerista
    Dado Que exista um processo na etapa "Manifestação de parecerista"
    E Que o usuário selecione a opção "Designar equipe"
    Quando O usuário informar os dados:
    |   Designar    |   Unidade_Afetada |   Responsavel               |
    |   Parecerista  |   APA Anhatomirim |   Aline Carla GonÇalves     |
    E Que o usuário selecione a opção "Gerar Despacho"
    E Que o usuário confirme que deseja continuar
    E O usuário solicitar assinar o despacho de designação
    E O usuário enviar os dados ao SEI
    Então O despacho deve ser salvo

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