import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { C as CityLedgerService } from './index-Cv9X7OoP.js';
import { P as PropertyService } from './index-rQF32beg.js';
import { L as LocaleController } from './locale.controller-DKzzcKD9.js';

class ClFiscalDocumentService {
    apiClientService = new ApiClient();
    propertyService = new PropertyService();
    cityLedgerService = new CityLedgerService();
    init(baseurl, ticket) {
        if (baseurl)
            this.apiClientService.setBaseUrl(baseurl);
        this.apiClientService.setApiClient(ticket);
    }
    async fetchData(propertyId, agentId, documentNumber) {
        const [propertyData, clResult] = await Promise.all([
            this.propertyService.getExposedProperty({ id: propertyId, language: LocaleController.language }),
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

export { ClFiscalDocumentService as C };
