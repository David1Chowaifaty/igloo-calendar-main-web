'use strict';

const Token = require('./Token-8fd11984.js');
const index = require('./index-2fc76e3c.js');
const property_service = require('./property.service-7021c784.js');

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

//# sourceMappingURL=cl-fiscal-document.service-cd65139e.js.map