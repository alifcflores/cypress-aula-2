///<reference types="cypress"/>

import relatorio from '../support/plataforma/imoveis/relatorio/commands';

describe('/admin/relatorio.php',()=>{

    beforeEach('Login', ()=>{
      cy.login();
    });

    it('Validando Intercept', ()=>{
       relatorio.acessarRelatorio();
       relatorio.interceptarRelatorio();
    });
});