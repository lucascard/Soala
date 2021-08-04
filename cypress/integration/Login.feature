Feature: Soala

    Como usuário, desejo entrar na página do SOALA

Scenario: Tela de login com CPF
    Given Que eu acesse o site do ICMBIO
    When Que eu preencha o campo de usuário e senha
    And Aperte o botão de Login
    Then Eu entro no sistema

    Entrando no SOALA
    Given Eu clique no botão de acessar para entrar no Soala
    Then Aparece uma modal para escolher a unidade e o perfil
    When Eu escolho a unidade e o perfil
    Then Eu entro na página MEUS PROCESSOS
