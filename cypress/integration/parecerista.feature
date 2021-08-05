#language: pt
Funcionalidade: Parecerista

    Como Parecerista

Cenario: Fluxo Parecerista

Dado Que o usuário acesse o sistema com o perfil "Parecerista"
Entao Eu entro na página MEUS PROCESSOS

Dado Que eu selecione ANALISAR PROCESSO
Entao Eu entro na página COMPONENTE NORMATIVO

Dado Que eu selecione a UNIDADE AFETADA
Quando Eu clicar em SALVAR e em CONTINUAR
Entao Eu entro na página IMPACTOS AMBIENTAIS POSITIVOS

Dado Que eu preencha os dados da página IMPACTOS AMBIENTAIS POSITIVOS
Quando Eu clicar em Salvar e Continuar
Entao Eu entro na página IMPACTOS AMBIENTAIS NEGATIVOS

Dado Que eu preencha os dados da página IMPACTOS AMBIENTAIS NEGATIVOS

