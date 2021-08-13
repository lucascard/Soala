#language: pt
Funcionalidade: Parecerista

    Eu como parecerista, desejo realizar análise ténica.

Contexto:
    Dado Que o usuário acesse o sistema com o perfil "Parecerista"

Cenario: Realizar análise técnica
Dado Que exista um processo na etapa "Realizar análise técnica"
E Que o usuário selecione a opção "Analisar processo"
Quando O usuário informar os dados de componente normativo:
| Unidade_Afetada    | Interior_UC   |
| APA Anhatomirim    | Não           |
E Não preencher as demais etapas
E Assinar o parecer técnico
E O usuário enviar os dados ao SEI
Então A análise técninca deve ser salva