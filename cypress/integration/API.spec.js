///<reference types="cypress"/>

const btoa = require('btoa');

describe('grupo de testes', ()=>{

    const data1 = {
        id_imovel: '6760',
        imob_status: 'Ativo'
    };

    it('Teste 1 - API',()=>{
        cy.request('GET', '/blacklist/fef/'+ btoa(6760)).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).is.not.null;
            expect(response.body.data.id).to.eq(data1.id_imovel);
            expect(response.body.data.imovel[0].imob_status).is.eq(data1.imob_status);
        });
    });

    it('API com Auth', ()=>{

        const data2 = {
            nome: 'Alif',
            cpf: '09129.2292109',
            email: 'alif.flores@credpago.com'
        };

        cy.request({
            method: 'POST',
            url: '/blacklist/relatorio',
            auth:{
                user: 'api@credpago',
                pass: 'Z7tmjxLUlax9ELvQ'
            },
            body: {
                data2
            }
        })
    });
});