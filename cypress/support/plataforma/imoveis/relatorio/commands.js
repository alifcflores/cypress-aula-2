///<reference types="cypress"/>

const fields = require('./fields');
const data = require('./data');
const urls = require('../../../../fixtures/urls');

class Relatorio {
    
    acessarRelatorio(){
        cy.visit(urls.imovel.relatorio);
    }

    interceptarRelatorio(){
        cy.intercept(urls.imovel.relatorio.method, urls.imovel.relatorio.url, {statusCode: 200}).as('registros');
        cy.get(fields.filtros.pesquisar).click();
        cy.wait('@registros');
    }

}

export default new Relatorio();

