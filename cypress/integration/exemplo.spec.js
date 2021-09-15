///<reference types="cypress"/>

describe('Grupo de testes - Intercept',()=>{

    const data = {
        usuario: '',
        senha: ''
    }

    const fields = {
        usuario: '[name="usuario"]',
        senha: '[name="senha"]',
        entrar: '.hidden-xs',
        pesquisar: '#btn-pesquisar'
    }

    const urls = {
        login: '/admin',
        auth: '/admin/aut.php',
        relatorio: {
            method: 'POST',
            url: '/admin/relatorio.php'
        }    
    }

    beforeEach('Login', ()=>{
        cy.visit(urls.login);
        cy.get(fields.usuario).type(data.usuario);
        cy.get(fields.senha).type(data.senha);

        cy.intercept(urls.auth.url).as('login');
        cy.get(fields.entrar).click();
        cy.wait('@login');
        cy.get('body').should('contain', 'Início');
    });


    it('Teste 1 - Intercept', ()=>{
      cy.visit(urls.relatorio);

      cy.intercept(urls.relatorio.method, urls.relatorio.url, {statusCode: 200}).as('registros');
      cy.get(fields.pesquisar).click();
      cy.wait('@registros');
    });
});