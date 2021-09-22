const urls = require('../fixtures/urls');

Cypress.Commands.add('login', () => { 
        cy.visit(urls.login.login);
        cy.get('[name="usuario"]').type('alif.flores@credpago.com');
        cy.get('[name="senha"]').type('Afcred@2021');
        cy.intercept(urls.login.auth).as('login');
        cy.get('.hidden-xs').click();
        cy.wait('@login');
        cy.get('body').should('contain', 'Início');
 });

 
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
