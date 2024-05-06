Feature: Cadastro e Login no Carrefour

Scenario: Cadastrar usuário e realizar login com sucesso
    Given the user accesses the Carrefour registration page
    When he fills in the name, email, CPF, date of birth, password and password confirmation fields with valid data
    And clicks on the "Register" button
    Then the system should:
        Validate the information entered
        Display a successful registration message
        Redirect the user to the login page

    Given the user is on the login page
    When he fills in the email field with the registered email and the password field with the defined password
    And clicks on the "Login" button
    Then the system should:
        Validate the informed credentials
        Grant access to the user's account
        Display a welcome message
        Redirect the user to the website's homepage


        // cypress/integration/cadastro_login.spec.js

describe('Cadastro e Login no Carrefour', () => {
    it('Cadastrar usuário e realizar login com sucesso', () => {
      // Cenário 1: Cadastro de Usuário
      cy.visit('https://www.carrefour.com.br/'); // Acessar página de cadastro
      cy.get('#nome').type('Nome Completo'); // Preencher campo de nome
      cy.get('#email').type('usuario@exemplo.com'); // Preencher campo de email
      cy.get('#cpf').type('12345678900'); // Preencher campo de CPF
      cy.get('#dataNascimento').type('10/10/2000'); // Preencher campo de data de nascimento
      cy.get('#senha').type('Senha12345'); // Preencher campo de senha
      cy.get('#confirmarSenha').type('Senha12345'); // Preencher campo de confirmação de senha
      cy.get('#btnCadastrar').click(); // Clicar no botão de cadastro
  
      // Validações e mensagens de sucesso
      cy.url().should('include', '/login'); // Verificar redirecionamento para a página de login
      cy.get('.alert-success').should('contain', 'Cadastro realizado com sucesso!');
  
      // Cenário 2: Login com Usuário Cadastrado
      cy.get('#email').type('usuario@exemplo.com'); // Preencher campo de email
      cy.get('#senha').type('Senha12345'); // Preencher campo de senha
      cy.get('#btnLogin').click(); // Clicar no botão de login
  
      // Validações e mensagens de sucesso
      cy.url().should('include', '/'); // Verificar redirecionamento para a página inicial
      cy.get('.alert-success').should('contain', 'Bem-vindo, Nome Completo!');
    });
  });
  