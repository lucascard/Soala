#language: pt
Funcionalidade: Designador

    Como Designador, quero designar os processos.

    Contexto:
    Dado Que o usuário acesse o sistema com o perfil "Designador"

Cenario: Designar parecerista
    Dado Que exista um processo na etapa "Designar equipe"
    E Que o usuário selecione a opção "Designar equipe"
    Quando O usuário informar o parecerista "Aline Carla GonÇalves"
    E Que o usuário selecione a opção "Gerar Despacho"
    E Que o usuário confirme que deseja continuar
    E O usuário solicitar assinar o despacho de designação
    E O usuário enviar os dados ao SEI
    Então O despacho deve ser salvo