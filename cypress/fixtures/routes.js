const btoa = require('btoa');

const BASE_URL = Cypress.env("matrix");

export const blacklist = {
    fef: {
        method: 'GET',
        url: BASE_URL + '/blacklist/fef/'+ btoa(6760)
    },
    relatorio: {
        method: 'POST',
        url: BASE_URL+ '/blacklist/relatorio',
    }
};
