///<reference types="cypress"/>

import blacklist from '../support/matrix/blacklist/requests';

describe('Requisições Blacklist', ()=>{

    it('API sem Auth',()=>{
       blacklist.consultarFEF();
    });

    it('API com Auth', ()=>{
       blacklist.consultarRelatorio();
    });
});