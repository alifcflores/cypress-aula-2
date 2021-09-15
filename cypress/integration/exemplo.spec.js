///<reference types="cypress"/>

describe('Grupo de testes - Intercept',()=>{

    const data = {
        usuario: '',
        senha: ''
    }

    const fields = {
        usuario: '[name="usuario"]',
        senha: '[name="senha"]',
        entrar: '.hidden-xs'
    }

    beforeEach('Login', ()=>{
        cy.visit('/admin');
        cy.get(fields.usuario).type(data.usuario);
        cy.get(fields.senha).type(data.senha);

        cy.intercept('/admin/aut.php').as('login');
        cy.get(fields.entrar).click();
        cy.wait('@login');
        cy.get('body').should('contain', 'Início');
    });


    it('Teste 1 - Intercept', ()=>{
      cy.visit('/admin/relatorio.php');

      cy.intercept('POST', '/admin/relatorio.php', {statusCode: 200}).as('registros');
      cy.get('#btn-pesquisar').click();
      cy.wait('@registros');
    });
});