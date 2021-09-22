///<reference types="cypress"/>

const data = require('./data.json');
const routes = require('../../../fixtures/routes');
const params = require('../../../fixtures/parameters.json');

class Blacklist {

    consultarFEF(){
        cy.request(routes.blacklist.fef.method, routes.blacklist.fef.url).then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body).is.not.null;
            expect(response.body.data.id).to.eq(data.fef.id_imovel);
            expect(response.body.data.imovel[0].imob_status).is.eq(data.fef.imob_status);
        });
    }

    consultarRelatorio(){
        cy.request({
            method: routes.blacklist.relatorio.method,
            url: routes.blacklist.relatorio.url,
            auth:{
                user: params.auth_API.user,
                pass:  params.auth_API.pass
            },
            body: {
               data
            }
        });
    }
}

export default new Blacklist();