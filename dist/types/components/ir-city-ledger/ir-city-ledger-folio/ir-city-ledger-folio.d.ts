import { EventEmitter } from '../../../stencil-public-runtime';
import type { TaxOption, ServiceCategoryOption } from './ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema';
import { type FolioFilters, type FolioRow, type FolioSummary } from './types';
import type { ICurrency } from "../../../models/property";
import { Agent } from "../../../services/agents/type";
export declare class IrCityLedgerFolio {
    agent: Agent | null;
    propertyId: number;
    taxOptions: TaxOption[];
    serviceCategoryOptions: ServiceCategoryOption[];
    currencies: ICurrency[];
    isTransactionOpen: boolean;
    filters: FolioFilters;
    data: FolioRow[];
    isLoading: boolean;
    hasFetched: boolean;
    startingBalance: number;
    closingBalance: number;
    totalCount: number;
    pageIndex: number;
    pageSize: number;
    folioSummaryUpdate: EventEmitter<FolioSummary>;
    private cityLedgerService;
    handleAgentIdChange(newValue: number | null, oldValue: number | null): void;
    private clearData;
    private fetchFolioData;
    render(): any;
}
