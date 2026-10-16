import ApiClient from "../../../../models/ApiClient";
import { CityLedgerService } from "../../../../services/city-ledger/index";
import { PropertyService } from "../../../../services/property.service";
import { LocaleController } from "../../../../services/locale/locale.controller";
export class ClFiscalDocumentService {
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
