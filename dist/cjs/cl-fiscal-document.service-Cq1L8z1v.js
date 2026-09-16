'use strict';

var ApiClient = require('./ApiClient-u7fuhiXA.js');
var index$1 = require('./index-COQ6L7wn.js');
var index = require('./index-CGEg1Fow.js');
var locale_controller = require('./locale.controller-C5iGrwyB.js');

class ClFiscalDocumentService {
    apiClientService = new ApiClient.ApiClient();
    propertyService = new index.PropertyService();
    cityLedgerService = new index$1.CityLedgerService();
    init(baseurl, ticket) {
        if (baseurl)
            this.apiClientService.setBaseUrl(baseurl);
        this.apiClientService.setApiClient(ticket);
    }
    async fetchData(propertyId, agentId, documentNumber) {
        const [propertyData, clResult] = await Promise.all([
            this.propertyService.getExposedProperty({ id: propertyId, language: locale_controller.LocaleController.language }),
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
