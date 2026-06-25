'use strict';

var Token = require('./Token-mN7PQKGF.js');
var index$1 = require('./index-Dd_1v2qq.js');
var index = require('./index-Db3oXH3N.js');

class ClFiscalDocumentService {
    tokenService = new Token.Token();
    propertyService = new index.PropertyService();
    cityLedgerService = new index$1.CityLedgerService();
    init(baseurl, ticket) {
        if (baseurl)
            this.tokenService.setBaseUrl(baseurl);
        this.tokenService.setToken(ticket);
    }
    async fetchData(propertyId, agentId, documentNumber) {
        const [propertyData, clResult] = await Promise.all([
            this.propertyService.getExposedProperty({ id: propertyId, language: 'en' }),
            this.cityLedgerService.fetchCL({
                AGENCY_ID: agentId,
                START_ROW: 0,
                END_ROW: 1000,
                SEARCH_QUERY: documentNumber,
            }),
        ]);
        return {
            property: propertyData?.My_Result ?? null,
            transactions: clResult?.My_Cl_tx ?? [],
        };
    }
}

exports.ClFiscalDocumentService = ClFiscalDocumentService;
