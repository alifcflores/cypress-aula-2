///<reference types="cypress"/>

const btoa = require('btoa');

const data = {
    fef: {
        id_imovel: '6760',
        imob_status: 'Ativo'
    },
    relatorio: {
        nome: 'Alif',
        cpf: '09129.2292109',
        email: 'alif.flores@credpago.com'
    }
};

describe('Testes com API', ()=>{

    it('API sem Auth',()=>{
        cy.request('GET', '/blacklist/fef/'+ btoa(6760)).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).is.not.null;
            expect(response.body.data.id).to.eq(data.fef.id_imovel);
            expect(response.body.data.imovel[0].imob_status).is.eq(data.fef.imob_status);
        });
    });

    it('API com Auth', ()=>{
        cy.request({
            method: 'POST',
            url: '/blacklist/relatorio',
            auth:{
                user: 'api@credpago',
                pass: 'Z7tmjxLUlax9ELvQ'
            },
            // body: {
            //    data
            // }
        });
    });
});