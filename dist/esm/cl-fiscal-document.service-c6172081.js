import { T as Token } from './Token-bcdb7c50.js';
import { C as CityLedgerService } from './index-3b642972.js';
import { P as PropertyService } from './property.service-bf78d8e9.js';

class ClFiscalDocumentService {
    tokenService = new Token();
    propertyService = new PropertyService();
    cityLedgerService = new CityLedgerService();
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

export { ClFiscalDocumentService as C };

//# sourceMappingURL=cl-fiscal-document.service-c6172081.js.map