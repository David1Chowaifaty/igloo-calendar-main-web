'use strict';

const Token = require('./Token-fb15e0d7.js');
const index = require('./index-d1c39688.js');
const property_service = require('./property.service-ceef98b2.js');

class ClFiscalDocumentService {
    tokenService = new Token.Token();
    propertyService = new property_service.PropertyService();
    cityLedgerService = new index.CityLedgerService();
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

//# sourceMappingURL=cl-fiscal-document.service-01c1264b.js.map